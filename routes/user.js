var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pro', function(req, res, next) {
  let products=[{
    name:'iphone 14 pro',
    storage:256,
    color:'black',
    image:'https://media.croma.com/image/upload/v1662655585/Croma%20Assets/Communication/Mobiles/Images/261976_j6acr4.png'
   },
{ 
  name:'iphone 14 ',
    storage:256,
    color:'yellow',
    image:'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697017892/Croma%20Assets/Communication/Mobiles/Images/270411_0_pigpst.png?tr=w-600'
},
    {
  name:'iphone 15 pro',
storage:256,
color:'natural titanium',
image:'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694673735/Croma%20Assets/Communication/Mobiles/Images/300807_0_nqjdg6.png?tr=w-600'
},{
  name:'iphone 15 ',
  storage:256,
  color:'blue',
  image:'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662703326/Croma%20Assets/Communication/Mobiles/Images/261949_cz9ezx.png?tr=w-1000'
}
]
  res.render('index',{products});
});
router.get('/',function(req,res){
 
res.render('log')
})
router.post('/login',async (req,res)=>{
  try{
  let username=res.body.username
  let password=res.body.password
  console.log(req.body);
  
  }
  catch{
    
  }
})
module.exports = router;
