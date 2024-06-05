# Blogging Website

## Overview

This is a blogging website built using the MERN stack (MongoDB, Express, React, Node.js). Users can read posts, manage their profiles, and comment on posts. They can also edit or delete their comments. Admins have additional privileges to manage posts and users.

## Features

### User Features
- **Read Posts**: Browse and read blog posts.
- **Manage Profile**: Update personal information.
- **Comment on Posts**: Add comments to blog posts.
- **Edit/Delete Comments**: Modify or remove their comments.

### Admin Features
- **Manage Profile**: Update personal information.
- **Post Blogs**: Create new blog posts.
- **Edit/Delete Posts**: Modify or remove existing posts.
- **Delete Users**: Remove users from the platform.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB

## Setup and Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/SheikhULAB/mern-blog
    cd your-repo
    ```

2. **Install Dependencies**

    Install server dependencies:

    ```bash
    cd server
    npm install
    ```

    Install client dependencies:

    ```bash
    cd ../client
    npm install
    ```

3. **Environment Variables**

    Create a `.env` file in the `server` directory with the following content:

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the Server**

    Start the server:

    ```bash
    cd server
    npm start
    ```

5. **Run the Client**

    Start the client:

    ```bash
    cd ../client
    npm start
    ```

6. **Access the Application**

    Open your browser and navigate to `http://localhost:3000`.

## Project Structure

### Server

The server side of the application is built using Node.js and Express. It includes the following main directories:

- `controllers/`: Contains the controller functions for handling API requests.
- `models/`: Contains the Mongoose schemas for the application.
- `routes/`: Contains the route definitions.
- `utils/`: Contains utility functions and middleware, such as authentication.

### Client

The client side of the application is built using React. It includes the following main directories:

- `components/`: Contains the React components used in the application.
- `pages/`: Contains the main page components.
- `services/`: Contains the services for making API calls.
- `styles/`: Contains the CSS styles for the application.

## API Endpoints

### Auth

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Authenticate a user and return a token.

### Posts

- **POST /api/post/create**: Create a new post (Admin only).
- **GET /api/post/getposts**: Get posts (supports query parameters for filtering).
- **PUT /api/post/updatepost/:postId/:userId**: Update a post (Admin only).
- **DELETE /api/post/deletepost/:postId/:userId**: Delete a post (Admin only).

### Comments

- **POST /api/comment/create**: Add a new comment.
- **PUT /api/comment/updatecomment/:commentId/:userId**: Update a comment.
- **DELETE /api/comment/deletecomment/:commentId/:userId**: Delete a comment.

### Users

- **GET /api/user/:userId**: Get user profile information.
- **PUT /api/user/updateuser/:userId**: Update user profile information.
- **DELETE /api/user/deleteuser/:userId**: Delete a user (Admin only).

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. Any improvements or bug fixes are welcome!

## License

This project is licensed under the MIT License.
