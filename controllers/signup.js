const connection=require('../database/connection')
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const {tokenData}= require('../middleware/createToken');



module.exports.register=async(req,res)=>{
    const  salt=10;

    const hashPassword= await bcrypt.hash(req.body.password,salt)

    let userData={
        username:req.body.username,
        password:hashPassword,
        email:req.body.email,
        location:req.body.location
    }
    connection.query("SELECT email FROM ZomatoUser WHERE email = '"+ req.body.email +"'", function(err, result, field){
        if(result.length ==0){
            var sql = "INSERT INTO ZomatoUser SET ?";
            let query=connection.query(sql,userData,(err,result)=>{
            if(err) throw err;
            console.log("Signed up successfully!!!")
            res.send("Signed up successfully!!")

            
            })
            const Data = { email: req.body.email }
            const accessToken = tokenData(Data, process.env.SECRETKEY,{expiresIn: "24h"})
            console.log("token is ==",accessToken)
            res.cookie("key=", accessToken);


            
        }else{  
            console.log("User Already Exists!!")
            res.send("User is already exists!!!")
        }
           
    
            
        })
    
           
}

