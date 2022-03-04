const express = require('express');
const res = require('express/lib/response');
const path=require('path');
// import express from 'express'
// import connectDB from './db/connectdb.js';
// import './models/Students.js'
// import path from 'path'
// import web from './Router/homerouter.js'
const web=require('./Router/homerouter.js');
// const mongoose=require('mongoose');
const connectDB= require('./db/connectdb.js');
// const getdocs= require('./models/Students.js');
// const { getDoc } = require('./controller/homecontroller.js');
const app = express();
const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"
// const stu=require('./models/Students.js')

connectDB(DATABASE_URL)
app.use(express.urlencoded({ extended: false }));
app.set('views', './views')
app.set('view engine' , 'ejs')
app.use(express.static('public'))
app.use('/',web)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




