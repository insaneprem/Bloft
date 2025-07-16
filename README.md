# Bloft - Modern Blog Platform

Bloft is a modern microservices-based blog platform built with Next.js, TypeScript, and Express.js. The platform features a clean, responsive design with real-time capabilities and AI-powered content creation.

## 🏗️ Architecture

The project follows a microservices architecture with three main services:

### Frontend (Next.js)
- **Port**: 3000
- **Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Radix UI
- **Features**: Responsive design, real-time updates, Google OAuth

### Backend Microservices

#### User Service (Port 5000)
- **Purpose**: User authentication and profile management
- **Tech Stack**: Express.js, MongoDB, JWT, Google OAuth
- **Features**: User registration, login, profile management, Google OAuth integration

#### Blog Service (Port 5002)
- **Purpose**: Blog content management and caching
- **Tech Stack**: Express.js, Redis, PostgreSQL
- **Features**: Blog CRUD operations, search, filtering, caching

#### Author Service (Port 5001)
- **Purpose**: Content creation and AI features
- **Tech Stack**: Express.js, PostgreSQL, RabbitMQ, Google AI
- **Features**: Blog creation, editing, AI-powered content generation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- PostgreSQL
- Redis
- RabbitMQ

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog-microservice-project-2025
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install service dependencies**
   ```bash
   # User Service
   cd ../services/user
   npm install

   # Blog Service
   cd ../blog
   npm install

   # Author Service
   cd ../author
   npm install
   ```

4. **Set up environment variables**
   
   Create `.env` files in each service directory with the following variables:

   **User Service (.env)**
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   Cloud_Name=your_cloudinary_name
   Cloud_Api_Key=your_cloudinary_api_key
   Cloud_Api_Secret=your_cloudinary_api_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

   **Blog Service (.env)**
   ```
   PORT=5002
   REDIS_URL=your_redis_url
   DATABASE_URL=your_postgresql_url
   ```

   **Author Service (.env)**
   ```
   PORT=5001
   DATABASE_URL=your_postgresql_url
   Cloud_Name=your_cloudinary_name
   Cloud_Api_Key=your_cloudinary_api_key
   Cloud_Api_Secret=your_cloudinary_api_secret
   RABBITMQ_URL=your_rabbitmq_url
   GOOGLE_AI_API_KEY=your_google_ai_api_key
   ```

5. **Start the services**

   In separate terminal windows:

   ```bash
   # Start User Service
   cd services/user
   npm run dev

   # Start Blog Service
   cd services/blog
   npm run dev

   # Start Author Service
   cd services/author
   npm run dev

   # Start Frontend
   cd frontend
   npm run dev
   ```

## 🎯 Features

- **User Authentication**: Google OAuth integration
- **Blog Management**: Create, edit, delete, and search blogs
- **Real-time Updates**: Live content updates
- **AI Integration**: AI-powered content generation
- **Responsive Design**: Mobile-first approach
- **Caching**: Redis-based caching for performance
- **Microservices**: Scalable architecture

## 🛠️ Tech Stack

### Frontend
- Next.js 15
- TypeScript
- Tailwind CSS
- Radix UI
- React Hot Toast
- Axios

### Backend
- Express.js
- TypeScript
- MongoDB (User Service)
- PostgreSQL (Blog & Author Services)
- Redis (Caching)
- RabbitMQ (Message Queue)
- JWT (Authentication)
- Google AI (Content Generation)

## 📁 Project Structure

```
blog-microservice-project-2025/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # Next.js app router
│   │   ├── components/      # React components
│   │   ├── context/         # React context
│   │   └── lib/             # Utility functions
│   └── package.json
├── services/
│   ├── user/                # User authentication service
│   ├── blog/                # Blog content service
│   └── author/              # Author and AI service
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository. 