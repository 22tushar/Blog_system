const mongoose=require('mongoose');
const { getDoc } = require('../controller/homecontroller');

// defining Schema

const StudentSchema = new mongoose.Schema({
       name:{ type :String , required:true},
       age: {type : String , required:true},
       // fees :{ type : mongoose.Decimal128 , required:true , validate : (v) => {
       //        v  >= 2000
       // }},
       join : { type :Date , default : Date.now }
       
})

// student is a Collection name 
// compiling schema
const StudentModel = new  mongoose.model("student",StudentSchema)
module.exports=StudentModel;

// const getdocs= async () => {
//               //   const result= await studentModel.find().select({name:0});
//        // const result= await studentModel.find({},'age');
//        try{
       
//                      const result= await StudentModel.find();
//                      //   result.forEach(  (element) => {
//                      console.log(result);
//                      //   });
//               } catch (err){
//                      console.log(err)
//               }
//        }
       
       // const createDocs = async () => {
              
              //         try{
                     //                // creating document
                     //               const s1Doc= new studentModel({
                            //                      name:"Tushar",
                            //                      age:21,
                            //                      fees:26
                            //               })
                            //               const s2Doc= new studentModel({
//                      name:"Ayushi",
//                      age:21,
//                      fees:26
//               })


//               // saving docs
//               const result= await studentModel.insertMany([s1Doc,s2Doc]);

//               console.log(result);

//         } catch(error) {
       //                console.log(error)
       //         }
       // }
       
       
  