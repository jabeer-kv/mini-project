var express = require('express');
var router = express.Router();
var user=require('../models/user')
var Products=require('../models/products')


//  user home/
 const isAuth=function(req,res,next){
  if(req.session.logedin){
    next()
  }
 
 else{
  res.redirect('/')
 }

 }

/* GET login page. */

router.get('/',function(req,res){
 
res.render('log')
})

//get signup page/
router.get ('/signup',function(req,res){
  res.render('signup')
})
//signup details/
router.post('/signup',async (req,res)=>{
  console.log(req.body);
 await user.insertMany(req.body)
  
   res.redirect('/')
})

//login details//


router.post('/login',async (req,res,next)=>{
  let email=req.body.email
  let password=req.body.password
  console.log(req.body.email);
  console.log(req.body.password);
   
  const valid=await user.findOne({
    email:email
  })
  console.log(valid);
  if(!valid){
    res.render('log',{invalid:'invalid email'})
  }
  else{
if (valid.password==password){
  req.session.user=req.body
  req.session.loggedin=true
  if(valid.role=='admin'){
  res.redirect('/admin')
  }
  else{
    res.redirect('/index')
  }

}
else{
  res.render('login',{invalid:'invalid password'})
}
  }
  
})
// product /
router.get('/index',async function(req,res){
 const product= await Products.find()
 res.render('index',{product})
})
//admin/
 router.get('/admin',function(req,res,next){
  res.render('admin')
 })

  
module.exports = router;
