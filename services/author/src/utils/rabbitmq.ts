import amqp from "amqplib";

let channel: amqp.Channel;

export const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URL as string);
    channel = await connection.createChannel();

    console.log("✅ Connected to RabbitMQ");
  } catch (error) {
    console.error("❌ Failed to connect to RabbitMQ", error);
  }
};

export const publishToQueue = async (queueName: string, message: any) => {
  if (!channel) {
    console.error("RabbitMQ channel is not initialized");
    return;
  }

  await channel.assertQueue(queueName, { durable: true });

  channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)), {
    persistent: true,
  });
};

export const invalidateChacheJob = async (cacheKeys: string[]) => {
  try {
    const message = {
      action: "invalidateCache",
      keys: cacheKeys,
    };

    await publishToQueue("cache-invalidation", message);

    console.log("✅ Cache invalidation job published to RabbitMQ");
  } catch (error) {
    console.error("❌ Failed to publish cache job to RabbitMQ", error);
  }
};
