const connection=require('../database/connection')

module.exports.foodCategory=async(req, res) => {
    let userCategory=req.body.category
    console.log(userCategory)

    if (userCategory=="nonveg"){
        var sql = "SELECT * FROM  Non_Veg_restaurants";
        var query = connection.query(sql,(err,data)=>{
            if(err) throw err;
            console.log(data)
            res.send(data)
        })


    }
    else{
        var sql = "SELECT * FROM  Vegrestaurants";
        var query = connection.query(sql,(err,data)=>{
            if(err) throw err;
            console.log(data)
            res.send(data)
        })

        

    }

}
