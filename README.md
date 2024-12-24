# Online Book Review Application

This repository contains the server-side implementation of an Online Book Review application, developed using Node.js and Express.js. This project demonstrates the practical application of back-end development skills, focusing on RESTful APIs, CRUD operations, authentication, asynchronous programming, and using node package manager (npm).

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Tasks and Implementation](#tasks-and-implementation)
  - [Task 1: Get the book list available in the shop](#task-1-get-the-book-list-available-in-the-shop)
  - [Task 2: Get the books based on ISBN](#task-2-get-the-books-based-on-isbn)
  - [Task 3: Get all books by the author](#task-3-get-all-books-by-the-author)
  - [Task 4: Get all books based on title](#task-4-get-all-books-based-on-title)
  - [Task 5: Get a book review](#task-5-get-a-book-review)
  - [Task 6: Register new user](#task-6-register-new-user)
  - [Task 7: Login as a registered user](#task-7-login-as-a-registered-user)
  - [Task 8: Add/modify a book review](#task-8-addmodify-a-book-review)
  - [Task 9: Delete a book review](#task-9-delete-a-book-review)
  - [Task 10: Get all books using an async callback function](#task-10-get-all-books-using-an-async-callback-function)
  - [Task 11: Search by ISBN using Promises](#task-11-search-by-isbn-using-promises)
  - [Task 12: Search by Author](#task-12-search-by-author)
  - [Task 13: Search by Title](#task-13-search-by-title)
- [Course Certificate](#course-certificate)

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

## Tasks and Implementation

### Task 1: Get the book list available in the shop
Retrieve and display a list of all books in the shop.

![Task 1 Screenshot](images/1-getallbooks.png)

### Task 2: Get the books based on ISBN
Fetch specific book details using its ISBN.

![Task 2 Screenshot](images/2-getdetailsISBN.png)

### Task 3: Get all books by the author
Search and retrieve books written by a specific author.

![Task 3 Screenshot](images/3-getbooksbyauthor.png)

### Task 4: Get all books based on title
Find and list books matching a particular title.

![Task 4 Screenshot](images/4-getbooksbytitle.png)

### Task 5: Get a book review
Retrieve the review of a specific book.

![Task 5 Screenshot](images/5-getbookreview.png)

### Task 6: Register new user
Allow new users to register and access features.

![Task 6 Screenshot](images/6-register.png)

### Task 7: Login as a registered user
Enable registered users to log in and manage reviews.

![Task 7 Screenshot](images/7-login.png)

### Task 8: Add/modify a book review
Add or update reviews for books by logged-in users.

![Task 8 Screenshot](images/8-reviewadded.png)

### Task 9: Delete a book review
Delete an existing review added by the logged-in user.

![Task 9 Screenshot](images/9-deletereview.png)

### Task 10: Get all books using an async callback function
Demonstrate the use of asynchronous callbacks to fetch books.

![Task 10 Screenshot](images/task10.png)

### Task 11: Search by ISBN using Promises
Use Promises to search books by their ISBN.

![Task 11 Screenshot](images/task11.png)

### Task 12: Search by Author
Search for books using the author’s name with Promises.

![Task 12 Screenshot](images/task12.png)

### Task 13: Search by Title
Fetch books based on their title using Promises.

![Task 13 Screenshot](images/task13.png)

## Course Certificate
You can view the course certificate [here](https://github.com/KunalSachdev2005/expressBookReviews/blob/main/Developing_Back-end_Apps_with_Node_JS_%26_Express_Certificate.pdf).
