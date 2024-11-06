const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({message: "Username and Password are required"});
  }

  const matchingUsers = users.filter((user) => user.username === username);
  if (matchingUsers.length > 0) {
    return res.status(400).json({message: "User already exists"});
  }

  users.push({"username":username, "password":password});
  return res.status(200).json({message: "User successfully registered"});
});

function BookList() {
    return new Promise((resolve, reject) => {
        resolve(books);
    });
}

// Get the book list available in the shop
public_users.get('/', async function (req, res) {
  //Write your code here
  try {
    const bk = await BookList();
    res.send(JSON.stringify(bk, null, 4));
  } catch (error) {
    res.status(500).send("Error fetching book list");
  }
});

function getBookDetailsByISBN(isbn) {
    return new Promise((resolve, reject) => {
      if (books[isbn]) {
        resolve(books[isbn]);
      } else {
        reject("Book not found");
      }
    });
  }

// Get book details based on ISBN
public_users.get('/isbn/:isbn',async function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;

  try {
    const bookDetails = await getBookDetailsByISBN(isbn);
    res.status(200).json(bookDetails);
  } catch (error) {
    res.status(404).json({message: error});
  }
});

function getBooksByAuthor(author) {
    return new Promise((resolve, reject) => {
      const matchingBooks = [];
      for (const isbn in books) {
        if (books[isbn].author === author) {
          matchingBooks.push(books[isbn]);
        }
      }
      if (matchingBooks.length > 0) {
        resolve(matchingBooks);
      } else {
        reject("No Books found by this author");
      }
    });
}
  
// Get book details based on author
public_users.get('/author/:author', async function (req, res) {
  //Write your code here
  const author = req.params.author;
  try {
    const booksByAuthor = await getBooksByAuthor(author);
    res.status(200).json(booksByAuthor);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

function getBooksByTitle(title) {
    return new Promise((resolve, reject) => {
      const matchingBooks = [];
      for (const isbn in books) {
        if (books[isbn].title === title) {
          matchingBooks.push(books[isbn]);
        }
      }
      if (matchingBooks.length > 0) {
        resolve(matchingBooks);
      } else {
        reject("No Books found by this title");
      }
    });
}

// Get all books based on title
public_users.get('/title/:title', async function (req, res) {
  //Write your code here
  const title = req.params.title;
  try {
    const booksByTitle = await getBooksByTitle(title);
    res.status(200).json(booksByTitle);
  } catch (error) {
    res.status(404).json({message: error});
  }
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;

  if (books[isbn]) {
    return res.status(200).json(books[isbn].reviews);
  } else {
    return res.status(404).json({message: "Book not found"});
  }
});

module.exports.general = public_users;
