const express = require('express');
const StudentController = require('../controller/homecontroller.js');
const router=express.Router()
const studentController=require('../controller/homecontroller.js')

// import express from 'express'
// import Home from '../controller/homecontroller'
// const router=express.Router();

router.get("/",studentController.getDoc)
router.post("/" ,StudentController.createDoc)
router.get('/edit/:id',StudentController.editDoc)
router.post('/update/:id' , StudentController.update)
router.post('/delete/:id', studentController.deleteDoc)


module.exports=router

