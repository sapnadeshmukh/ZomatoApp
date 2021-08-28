const connection=require('../database/connection')
const readlinesync=require("readline-sync")


module.exports.order=async(req, res) => {
    let userItemId=req.params.id;
    console.log(userItemId)


    let sql = "SELECT * FROM AddToCard WHERE addcard_id=" + userItemId;

        var query = connection.query(sql,(err,data)=>{
            if(err) throw err;
            // console.log(data)
            // console.log(data[0])
            let menu=data[0]["menu"]
            // console.log(menu)
            let hotel=data[0]["restaurants_name"]
            // console.log(hotel)
            let price=data[0]["price"]
            // console.log(price)
            let time="45 min"
            // console.log(time)
            let DeleveryCharge=60
            // console.log(DeleveryCharge)

            let totalcost=price+DeleveryCharge
            // console.log(totalcost)
            let payment=readlinesync.question("how you will pay  online or by cash--")
            // console.log(payment)


            let sql='INSERT INTO orderID (menu,TIME,totalcost,delivery_charge,payments,price,restaurants_name) VALUES ?';
                var Details=[
                    [menu,time,totalcost,DeleveryCharge,payment,price,hotel]
                ]
                connection.query(sql,[Details],function(err){
                
                
                    if (err) throw err;
                    console.log("Data Added  orderID in table!!!");
        
              

                })




            //payments varchar(50)


            res.send(data)
        })


}