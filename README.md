# API for Video and Image Posts

This is an API for managing and retrieving data related to videos and image-based posts. It allows users to create, update, and view content using technologies like Prisma, Express, Multer, and JSON Web Tokens (JWT) for authentication.

## Features

- Register and retrieve data related to videos and image-based posts
- File uploads using Multer (for images and videos)
- User authentication with JWT
- Error handling with Express Async Errors
- Structured data with Prisma ORM

## Technologies Used

- **Express**: Web framework for Node.js
- **Prisma**: ORM for database management
- **Multer**: Middleware for handling `multipart/form-data` (file uploads)
- **Express Async Errors**: Error handling middleware for async functions
- **JSON Web Tokens (JWT)**: Authentication middleware for secure API endpoints

## Requirements

- **Node.js** (>= v14)
- **npm** (>= v6) or **yarn**
- A **mysql** (or other supported) database configured for Prisma

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/loopsdesenvolvedor/api-loops.git
   cd api-loops
