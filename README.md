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
   _Screenshot: [1-getallbooks.png](images/1-getallbooks.png)_

2. **Task 2**: Get the books based on ISBN.  
   _Screenshot: [2-gedetailsISBN.png](images/2-gedetailsISBN.png)_

3. **Task 3**: Get all books by the author.  
   _Screenshot: [3-getbooksbyauthor.png](images/3-getbooksbyauthor.png)_

4. **Task 4**: Get all books based on title.  
   _Screenshot: [4-getbooksbytitle.png](images/4-getbooksbytitle.png)_

5. **Task 5**: Get a book review.  
   _Screenshot: [5-getbookreview.png](images/5-getbookreview.png)_

6. **Task 6**: Register new user.  
   _Screenshot: [6-register.png](images/6-register.png)_

7. **Task 7**: Login as a registered user.  
   _Screenshot: [7-login.png](images/7-login.png)_

8. **Task 8**: Add/modify a book review.  
   _Screenshot: [8-reviewadded.png](images/8-reviewadded.png)_

9. **Task 9**: Delete the book review that was earlier added by that particular user.  
   _Screenshot: [9-deletereview.png](images/9-deletereview.png)_

10. **Task 10**: Get all books using an async callback function.
     _Screenshot: [10-getbookcallback.png](images/task10.png)_
    
12. **Task 11**: Search by ISBN using Promises.
13. **Task 12**: Search by Author.
14. **Task 13**: Search by Title.
15. **Task 14**: Submit the project GitHub link.

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

## Project Certificate
You can view the project certificate [here](https://github.com/KunalSachdev2005/expressBookReviews/blob/main/Developing_Back-end_Apps_with_Node_JS_%26_Express_Certificate.pdf).

