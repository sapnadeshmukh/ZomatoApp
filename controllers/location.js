const connection=require('../database/connection')
const {authenticateToken}= require('../middleware/createToken');


module.exports.location=async(req, res) => {
    var token = req.headers.cookie;
    var TOKEN=token.split(';')
    if(TOKEN !=undefined){
        let userLocation=req.body.location
        console.log(userLocation)

        const data=authenticateToken(TOKEN[0],process.env.SECRETKEY)
        console.log(data)
        let location=req.body.location;
        let user=req.params.id;

        
        
        let sql="UPDATE  ZomatoUser SET location='" +location+  "'WHERE id="+ user;





        let quary = connection.query(sql,(err,result)=>{
            if(err) throw err
            console.log("location added successfully!!")
            res.send("location added suceefully!!!")
        })  



       
    }


}
