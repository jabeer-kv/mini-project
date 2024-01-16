var express = require('express');
var router = express.Router();
var user=require('../models/user')
var Products=require('../models/products')
var deletion=require('../models/deletion');



//  user home/
 const isAuth=function(req,res,next){
  if(req.session.loggedIn){
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
  req.session.loggedIn=true
  if(valid.role=='user'){
  res.redirect('/index')
  }
  else{
    res.redirect('/admin')
    // console.log('dsvdf')
  }

}
else{
  res.render('log',{invalid:'invalid password'})
}
  }
  
})
// admin /

router.get('/admin',isAuth,async function(req,res){
const users=await
user.find({role: 'user'})
 res.render('admin',{users})
})

// search/
router.post('/search', async (req, res) => {
  const search = req.body.search
  const data= await user.find({ name: { $regex: `^${search}`, $options: 'i' } });
  res.render('admin', { users:data });
});
//delete/
router.post('/delete', async (req, res) => {
  const deleted= await
  user.findOneAndDelete({_id:req.body.delete})
  deletion.insertMany(deleted)
  res.redirect('/admin')
});
//edit/
router.get('/edit/:id', async (req, res) => {
 
  console.log(req.params.id)
  const foredit=await
  user.findOne({_id:req.params.id})
  console.log(foredit);

  res.render('edit',{foredit})
 
});
//update/
router.post('/update/:id', async (req, res) => {
  const id=req.params.id
  await
  user.updateOne({_id:id},req.body
    )
  res.redirect('/admin')

})



// product /
router.get('/index',isAuth,async function(req,res){
 const product= await Products.find()
 res.render('index',{product})
})
//logout/
router.get('/logout',function(req,res){
  req.session.destroy()
  res.redirect('/')
   
  
 
})

  
module.exports = router;
