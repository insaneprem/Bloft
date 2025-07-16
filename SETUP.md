# Bloft Setup Guide

This guide will help you set up the Bloft project locally.

## Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **MongoDB** (for user service)
- **PostgreSQL** (for blog and author services)
- **Redis** (for caching)
- **RabbitMQ** (for messaging)

## Step 1: Install Dependencies

```bash
# Install frontend dependencies
cd frontend
npm install

# Install user service dependencies
cd ../services/user
npm install

# Install blog service dependencies
cd ../blog
npm install

# Install author service dependencies
cd ../author
npm install
```

## Step 2: Set Up Environment Variables

### User Service
1. Navigate to `services/user/`
2. Copy `env.example` to `.env`
3. Update the values in `.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/bloft_users
JWT_SEC=your_secure_jwt_secret_here
Cloud_Name=your_cloudinary_name
Cloud_Api_Key=your_cloudinary_api_key
Cloud_Api_Secret=your_cloudinary_api_secret
Google_Client_id=your_google_oauth_client_id
Google_client_secret=your_google_oauth_client_secret
```

### Blog Service
1. Navigate to `services/blog/`
2. Copy `env.example` to `.env`
3. Update the values in `.env`:

```env
PORT=5002
DB_URL=postgresql://username:password@localhost:5432/bloft_blogs
REDIS_URL=redis://localhost:6379
Rabbimq_Host=localhost
Rabbimq_Username=guest
Rabbimq_Password=guest
USER_SERVICE=http://localhost:5000
```

### Author Service
1. Navigate to `services/author/`
2. Copy `env.example` to `.env`
3. Update the values in `.env`:

```env
PORT=5001
DB_URL=postgresql://username:password@localhost:5432/bloft_authors
Cloud_Name=your_cloudinary_name
Cloud_Api_Key=your_cloudinary_api_key
Cloud_Api_Secret=your_cloudinary_api_secret
Rabbimq_Host=localhost
Rabbimq_Username=guest
Rabbimq_Password=guest
Gemini_Api_Key=your_google_ai_api_key
JWT_SEC=your_secure_jwt_secret_here
```

## Step 3: Set Up Databases

### MongoDB (User Service)
```bash
# Start MongoDB
mongod

# Create database
mongo
use bloft_users
```

### PostgreSQL (Blog & Author Services)
```bash
# Create databases
createdb bloft_blogs
createdb bloft_authors
```

### Redis
```bash
# Start Redis server
redis-server
```

### RabbitMQ
```bash
# Start RabbitMQ server
rabbitmq-server
```

## Step 4: Start Services

Open 4 terminal windows and run:

### Terminal 1 - User Service
```bash
cd services/user
npm run dev
```

### Terminal 2 - Blog Service
```bash
cd services/blog
npm run dev
```

### Terminal 3 - Author Service
```bash
cd services/author
npm run dev
```

### Terminal 4 - Frontend
```bash
cd frontend
npm run dev
```

## Step 5: Access the Application

- Frontend: http://localhost:3000
- User Service: http://localhost:5000
- Blog Service: http://localhost:5002
- Author Service: http://localhost:5001

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the PORT in the respective `.env` file
2. **Database connection failed**: Make sure your database services are running
3. **Module not found**: Run `npm install` in the service directory
4. **Environment variables not loading**: Make sure `.env` files are in the correct location

### Getting API Keys

- **Cloudinary**: Sign up at https://cloudinary.com/
- **Google OAuth**: Create credentials at https://console.cloud.google.com/
- **Google AI**: Get API key from https://makersuite.google.com/app/apikey

## Development

- The services will automatically restart when you make changes
- TypeScript compilation happens in watch mode
- Check the terminal output for any errors 