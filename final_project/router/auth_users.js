const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
    const matchingUsers = users.filter((user) => user.username === username);

    return matchingUsers.length === 0;
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
    const user = users.find((user) => user.username === username);
    return user && user.password === password;
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(404).json({message: "Error logging in"});
  }

  if (authenticatedUser(username, password)) {
    let accessToken = jwt.sign({
        data: password
    }, "access", {expiresIn: 60 * 60});

    req.session.authorization = {
        accessToken, username
    }
    
    return res.status(200).send({message:"User successfully logged in", accessToken:accessToken});
  } else {
    return res.status(208).json({message: "Invalid Login. Check Username and Password"})
  }
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  const { username } = req.session.authorization;
  const { review } = req.query;
  const { isbn } = req.params;

  if (!username) {
    return res.status(401).json({message: "You must be logged in to add a review"});
  }

  if (!review) {
    return res.status(400).json({message: "You must provide a review"});
  }

  if (!books[isbn]) {
    return res.status(404).json({message: "Book not found"});
  }

  const existingReview = books[isbn].reviews[username];

  if (existingReview) {
    books[isbn].reviews[username] = review;
    return res.status(200).json({message: "Review updated successfully"});
  } else {
    books[isbn].reviews[username] = review;
    return res.status(200).json({message: "Review added successfully"});
  }
});

regd_users.delete("/auth/review/:isbn", (req, res) => {
    const { username } = req.session.authorization;
    const { isbn } = req.params;

    if (!username) {
        return res.send(401).json({message: "You must be logged in to delete a review"});
    }
    if (!books[isbn]) {
        return res.status(404).json({message: "Book not found"});
      }
    
    const userReview = books[isbn].reviews[username];

    if (userReview) {
      delete books[isbn].reviews[username];
      return res.status(200).json({message: "Review deleted successfully"});
    } else {
      return res.status(404).json({message: "No review found for this user"});
    }
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
