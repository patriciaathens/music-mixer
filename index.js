require('dotenv').config()

const express = require('express');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const path = require("path")
const app = express();

app.use(cors());
app.options('*', cors());
app.use(cookieParser());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  res.header('Accept-Ranges', 'bytes');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.use(express.json({extended: false}));

// MONGO DB //
const uri = process.env.ATLAS_URI;
mongoose.connect(
  uri,
  {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
  }
)
.then(() => {
  console.log("Connected to the Mongo database!");
})
.catch(err => {
  console.log("Cannot connect to Mongo database!", err);
  process.exit();
});

app.use("/public", express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/frontend/dist/frontend'));

app.use('/api/advice', require('./routes/advice'));

app.get('*', function(req, res) {
  res.sendfile(path.join(__dirname + '/frontend/dist/frontend/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

