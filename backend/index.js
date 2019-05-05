require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const mongodbUri =
  process.env.MONGODB_URI || "mongodb://localhost/music-loop-dev";


