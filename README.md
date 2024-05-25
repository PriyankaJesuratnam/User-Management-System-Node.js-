# User Management System (Node.js) CRUD Application

This is a User Management System developed using Node.js for the backend, HTML for the frontend, and MongoDB (connected via REST API) as the database. The application allows for creating, reading, updating, and deleting user records.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Create User**: Add new users to the system.
- **Read User**: View details of existing users.
- **Update User**: Modify details of existing users.
- **Delete User**: Remove users from the system.

## Prerequisites
- Node.js
- MongoDB
- Firebase

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-management-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd user-management-system
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Set up your MongoDB database and Firebase configuration. Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   FIREBASE_API_KEY=your_firebase_api_key
   ```

## Usage
1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to access the application.

## API Endpoints
- **GET /api/users**: Retrieve all users.
- **GET /api/users/:id**: Retrieve a user by ID.
- **POST /api/users**: Create a new user.
  - Request body should include:
    ```json
    {
      "name": "User Name",
      "email": "user@example.com",
      "password": "password123"
    }
    ```
- **PUT /api/users/:id**: Update an existing user.
  - Request body can include any of the user fields to be updated:
    ```json
    {
      "name": "Updated Name",
      "email": "updated@example.com"
    }
    ```
- **DELETE /api/users/:id**: Delete a user by ID.

## Contributing
1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.
