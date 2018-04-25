const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const users = require('./routes/api/users');
// const decks = require('./routes/api/decks');
// const comments = require('./routes/api/comments');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/users', users);
// app.use('/api/decks', decks);
// app.use('/api/comments', comments);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));