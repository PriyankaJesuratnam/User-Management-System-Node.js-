# User Management System (Node.js)

This is a User Management System developed using Node.js for the backend, HTML for the frontend, and MongoDB for the database. The system is connected via REST API.

## Features

- Create, Read, Update, and Delete (CRUD) operations for user management.
- RESTful API endpoints for managing users.
- MongoDB as the database for storing user information.
- Simple and intuitive HTML frontend for interacting with the system.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- MongoDB installed and running on your local machine or accessible via a cloud service.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/PriyankaJesuratnam/User-Management-System-Node.js-.git
   cd user-management-system-nodejs
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/user-management
   ```

   Adjust the `MONGODB_URI` if your MongoDB instance is hosted differently.

## Usage

1. **Start the application:**

   ```sh
   npm start
   ```

   The server will start on the port defined in the `.env` file (default is 3000).

2. **Open your browser:**

   Navigate to `http://localhost:3000` to access the User Management System frontend.

## API Endpoints

The following RESTful API endpoints are available for managing users:

- **GET /api/users** - Retrieve a list of all users.
- **GET /api/users/:id** - Retrieve a single user by ID.
- **POST /api/users** - Create a new user.
- **PUT /api/users/:id** - Update an existing user by ID.
- **DELETE /api/users/:id** - Delete a user by ID.

### Sample User Object

A user object has the following structure:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30,
  "address": "123 Main St"
}
```

## Project Structure

The project structure is as follows:

```
user-management-system-nodejs/
├── public/
│   ├── css/
│   ├── js/
│   └── index.html
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

- **public/**: Contains static assets like CSS and JavaScript files, and the HTML frontend.
- **src/**: Contains the application's source code.
  - **controllers/**: Handles the logic for API endpoints.
  - **models/**: Defines the Mongoose schema for users.
  - **routes/**: Defines the API routes.
  - **app.js**: Main application file that sets up the server and connects to the database.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.
