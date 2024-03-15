//? all the requires to get the neccessary packages 
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./router/use.route')
const mongoose = require('mongoose');
const mongoFunction= require('./config/mongodb')
const env = process.env.NODE_ENV || "environment";
const middleware = require('./middleware/redis')

if (env === "environment") {
  require("dotenv/config");
}

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(middleware.redisMiddlewar);

//? connecting database
mongoFunction.connectMongo();

app.use('/1', userRouter);

app.listen(process.env.PORT, () => {
    console.log('server running at',process.env.PORT);
})