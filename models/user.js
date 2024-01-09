const mongoose=require('mongoose')
const url='mongodb://localhost:27017/shop'
const connect=mongoose.connect(url)
connect.then(()=>{
    console.log('success')
})
.catch (()=>{
  console.log('error');
})

const signup=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

})

module.exports=new mongoose.model('users',signup)