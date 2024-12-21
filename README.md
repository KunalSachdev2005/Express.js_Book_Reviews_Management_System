# Online Book Review Application

This repository contains the server-side implementation of an Online Book Review application, developed using Node.js and Express.js. This project demonstrates the practical application of back-end development skills, focusing on RESTful APIs, CRUD operations, authentication, and asynchronous programming.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Tasks Implemented](#tasks-implemented)
- [Testing the API](#testing-the-api)
- [Screenshots](#screenshots)
- [Setup and Installation](#setup-and-installation)
- [Project Certificate](#project-certificate)

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

## Tasks Implemented
1. **Task 1**: Get the book list available in the shop.
   
   ![Task 1 Screenshot](images/1-getallbooks.png)

2. **Task 2**: Get the books based on ISBN.
   
   ![Task 2 Screenshot](images/2-gedetailsISBN.png)

3. **Task 3**: Get all books by the author.
   
   ![Task 3 Screenshot](images/3-getbooksbyauthor.png)

4. **Task 4**: Get all books based on title.
   
   ![Task 4 Screenshot](images/4-getbooksbytitle.png)

5. **Task 5**: Get a book review.
   
   ![Task 5 Screenshot](images/5-getbookreview.png)

6. **Task 6**: Register new user.
   
   ![Task 6 Screenshot](images/6-register.png)

7. **Task 7**: Login as a registered user.
   
   ![Task 7 Screenshot](images/7-login.png)

8. **Task 8**: Add/modify a book review.
   
   ![Task 8 Screenshot](images/8-reviewadded.png)

9. **Task 9**: Delete the book review that was earlier added by that particular user.
   
   ![Task 9 Screenshot](images/9-deletereview.png)

10. **Task 10**: Get all books using an async callback function.
    
    ![Task 10 Screenshot](images/task10.png)

11. **Task 11**: Search by ISBN using Promises.
    
    ![Task 11 Screenshot](images/task11.png)

12. **Task 12**: Search by Author.
    
    ![Task 12 Screenshot](images/task12.png)

13. **Task 13**: Search by Title.
    
    ![Task 13 Screenshot](images/task13.png)

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

## Project Certificate
You can view the project certificate [here](https://github.com/KunalSachdev2005/expressBookReviews/blob/main/Developing_Back-end_Apps_with_Node_JS_%26_Express_Certificate.pdf).

