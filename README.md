# My Node.js Product Management API

This is a Node.js-based REST API for managing products. Users can register, log in, create products, and view a list of products. Each product is associated with the user who created it.

## Features

- User Registration and Authentication (JWT-based)
- Product Creation with name, unique ID, image, and description
- List all products with associated user information
- Sort products by alphabetical order and date

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token) for authentication

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- A REST client (e.g., [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client), Postman, or Insomnia)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/manishchandrakar/Product-Management-API.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Product-Management-API
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   MONGO_URI="mongodb://localhost:27017/mydatabase"
   JWT_SECRET="superstrongsecretkey12345!@#$%"
   PORT=5000
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

### API Endpoints

#### User Authentication

- **Register:** `POST /api/auth/register`
  - Request Body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```

- **Login:** `POST /api/auth/login`
  - Request Body:
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```

#### Product Management

- **Create Product:** `POST /api/products`
  - Requires Authentication
  - Request Body:
    ```json
    {
      "name": "Smartphone",
      "uniqueId": "SM12345",
      "image": "smartphone.png",
      "description": "Latest model smartphone with advanced features"
    }
    ```

- **List Products:** `GET /api/products`
  - Optional Query Parameters: `sortBy=name` or `sortBy=date`

### Testing

Use [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) or any other REST client to test the API endpoints.

### Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome!

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
