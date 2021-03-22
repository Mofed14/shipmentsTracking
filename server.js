const cors = require("cors");
const express = require("express");
const app = express();
const shipments = require("./router/shipment");
global.__basedir = __dirname;
const mongoose = require('mongoose')
const printer = require('./router/printer')
const track = require('./router/track')

// database
async function db() {
    try {
      await mongoose.connect("mongodb://localhost/shipment");
    } catch (error) {
      throw error;
    }
  }
  db();

//// midleware
const initRoutes = require("./router/file");
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

/// router 
app.use('/shipments',shipments)
app.use('/printer',printer)
app.use('/track', track)


//// server
const port = 8080;
async function server() {
    try {
      await app.listen(port);
      console.log(`server is listening on ${port}`);
    } catch (error) {
      throw error;
    }
  }
  
  server();