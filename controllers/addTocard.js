const connection=require('../database/connection')

module.exports.Addcard=async(req, res) => {
    let userItemId=req.params.id;
    let userCategory=req.body.category

    if (userCategory=="nonveg"){


        

        let sql = "SELECT menu,price,restaurants_name FROM Non_Veg_restaurants WHERE restaurants_id=" + userItemId;
        var query = connection.query(sql,(err,data)=>{
            if(err) throw err;
            console.log(data)
            let menu=(data[0].menu)

            let price=(data[0].price)
            let restaurants_name=(data[0].restaurants_name)
            console.log(menu)
            console.log(price)
            console.log(restaurants_name)

            let sql='INSERT INTO AddToCard (menu,restaurants_name,price) VALUES ?';
                var hotels=[
                    [menu,restaurants_name,price]
                ]
                connection.query(sql,[hotels],function(err){
                
                
                    if (err) throw err;
                    console.log("Data Added in AddToCard table!!!");
        
              

                })




            res.send(data)
        })
    }else{
        let sql = "SELECT menu,price,restaurants_name FROM  Vegrestaurants WHERE restaurants_id=" + userItemId;
        var query = connection.query(sql,(err,data)=>{
            if(err) throw err;
            console.log(data)
            let menu=(data[0].menu)

            let price=(data[0].price)
            let restaurants_name=(data[0].restaurants_name)
            console.log(menu)
            console.log(price)
            console.log(restaurants_name)

            let sql='INSERT INTO AddToCard (menu,restaurants_name,price) VALUES ?';
                var hotels=[
                    [menu,restaurants_name,price]
                ]
                connection.query(sql,[hotels],function(err){
                
                
                    if (err) throw err;
                    console.log("Data Added in AddToCard table!!!");
        
              

                })


            res.send(data)
        })

    }




}