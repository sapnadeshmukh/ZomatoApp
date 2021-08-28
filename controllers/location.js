const connection=require('../database/connection')
const {authenticateToken}= require('../middleware/createToken');


module.exports.location=async(req, res) => {
    var token = req.headers.cookie;
    // console.log("header token",token)
    var TOKEN=token.split(';')
    // console.log("orignal",TOKEN[0]);
    if(TOKEN !=undefined){
        let userLocation=req.body.location
        console.log(userLocation)

        const data=authenticateToken(TOKEN[0],process.env.SECRETKEY)
        console.log(data)
        let location=req.body.location;
        // console.log(location)
        // console.log(typeof(location))
        let user=req.params.id;
        // console.log(user)

        
        
        let sql="UPDATE  ZomatoUser SET location='" +location+  "'WHERE id="+ user;

        // console.log(sql)




        let quary = connection.query(sql,(err,result)=>{
            if(err) throw err
            console.log("location added successfully!!")
            res.send("location added suceefully!!!")
        })  



       
    }


}
