const mongoose=require('mongoose')
const url='mongodb://localhost:27017/shop'
const connect=mongoose.connect(url)
connect.then(()=>{
    console.log('success')
})
.catch (()=>{
  console.log('error');
})
const products= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    size:{
        type:String,
        requierd:true
    },
    image:{
        type:String,
        requierd:true
    }

})
const productData=new mongoose.model('Products',products)
module.exports=productData