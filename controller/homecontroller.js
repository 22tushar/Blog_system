
const StudentModel=require('../models/Students.js')


// console.log("Hi")
class StudentController {
    
   static createDoc= async (req,res) => {
      

      try{
         console.log("create")
         const {Name,age}=req.body;
         const data = new StudentModel({
             name:Name,
             age:age
         })
 
         const result = await data.save();
         
         res.redirect('/')
      }catch(error){
         console.log(error)
      }
        
   }
  
   static getDoc= async (req,res) => {

      try{
         const result= await StudentModel.find();
         // console.log(result)
        
       res.render('index',{result})
      } catch (err) {
          console.log(err)
      }
       
      // res.render('index')
   }

   static editDoc= async (req,res)=>{

      try{

      const result= await StudentModel.findById(req.params.id)
      // console.log(result)
      res.render('update' , {result})
      } catch (error){
         console.log(error)
      }
   }
   static update= async (req,res)=>{
      
       try{

       const result = await StudentModel.findByIdAndUpdate(req.params.id,req.body)
       

      //   console.log(result)
       res.redirect('/')
       } catch (error){
          console.log(error)
       }
   }

   static deleteDoc= async (req,res)=>{
       
       try{
           const result = await StudentModel.findByIdAndDelete(req.params.id)
           res.redirect('/')
       } catch (error){
          console.log(error)
       }
   }

}
module.exports=StudentController