# Online Book Review Application

This repository contains the server-side implementation of an Online Book Review application, developed using Node.js and Express.js. This project demonstrates the practical application of back-end development skills, focusing on RESTful APIs, CRUD operations, authentication, and asynchronous programming.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Breakdown](#project-breakdown)
  - [Part A: Forking and Cloning the Repository](#part-a-forking-and-cloning-the-repository)
  - [Part B: Setting Up the Environment](#part-b-setting-up-the-environment)
  - [Part C: Implementing Authentication](#part-c-implementing-authentication)
  - [Part D: CRUD Operations](#part-d-crud-operations)
  - [Part E: Enhancing with Async/Await and Promises](#part-e-enhancing-with-asyncawait-and-promises)
- [Testing the API](#testing-the-api)
- [Screenshots](#screenshots)
- [Setup and Installation](#setup-and-installation)
- [Contributing](#contributing)
- [License](#license)

## Overview
The Online Book Review application is designed to manage book reviews for an online bookstore. It provides a RESTful API for managing books and reviews, allowing multiple users to interact with the system simultaneously. Authentication ensures that only authorized users can perform certain operations, such as adding, editing, or deleting reviews.

## Features
1. Retrieve a list of all books in the bookstore.
2. Search books by ISBN, author names, or titles.
3. Retrieve reviews for specific books.
4. User registration and login.
5. Add, modify, and delete book reviews (logged-in users only).
6. Concurrent user interactions using asynchronous programming.

## Technologies Used
- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for building RESTful APIs.
- **JWT (JSON Web Tokens)**: For user authentication and authorization.
- **Session Authentication**: To manage user sessions securely.
- **Axios**: For HTTP requests.
- **Postman**: For API testing.
- **Async/Await and Promises**: To handle asynchronous operations.

## Project Breakdown

### Part A: Forking and Cloning the Repository
1. Fork the provided GitHub repository to create your own copy.
2. Clone the forked repository to your local development environment.

_Screenshot: Repository cloned into the development environment._

### Part B: Setting Up the Environment
1. Navigate to the `express` server directory.
2. Run `npm install` to install all necessary packages.
3. Use Postman to test the API endpoints with your credentials.

_Screenshot: Output of `npm install` and successful connection to the server._

### Part C: Implementing Authentication
1. Configure JWT for token-based authentication.
2. Implement session-level authentication to manage user sessions.
3. Restrict access to certain endpoints (e.g., add, edit, delete reviews) to authenticated users only.

_Screenshot: Postman test showing successful login and token retrieval._

### Part D: CRUD Operations
1. **Retrieve Books**: Fetch all books or search by ISBN, author, or title.
2. **Add Review**: Allow logged-in users to add a review.
3. **Modify Review**: Restrict logged-in users to modify their own reviews.
4. **Delete Review**: Restrict logged-in users to delete their own reviews.

_Screenshot: Postman tests demonstrating successful CRUD operations._

### Part E: Enhancing with Async/Await and Promises
1. Use `async`/`await` for retrieving all books.
2. Use Promises for searching books by ISBN, author, or title.
3. Ensure concurrent operations for multiple users.

_Screenshot: Code snippet implementing async/await and Promises._

## Testing the API
1. Use Postman to test each API endpoint.
2. Verify CRUD operations for books and reviews.
3. Test authentication workflows, including registration and login.

_Screenshot: Postman collection showing all API requests and responses._

## Screenshots
- Repository Setup: Forked and cloned repository.
- Environment Setup: `npm install` and server connection.
- Authentication: Login and JWT token retrieval.
- CRUD Operations: Adding, modifying, and deleting reviews.
- Async/Await: Code demonstrating asynchronous operations.

## Setup and Installation
1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd express-book-review
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Test the API using Postman or a similar tool.

## Contributing
Contributions are welcome! Feel free to fork the repository, make your changes, and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

