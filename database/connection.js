const mysql = require("mysql");
require('dotenv').config()

// Configure MySQL connection
let connection = mysql.createConnection({
    host : process.env.db,
    user : process.env.user,
    password : process.env.password,
    database : process.env.db_name
});


//Establish MySQL connection
connection.connect((err,result)=>{
    if(err)throw err
    console.log("Database connected!!!")
});

    // To create users
    var sql="create table if not exists ZomatoUser (id  int(11) NOT NULL auto_increment,username varchar(50) NOT NULL,email varchar(50) NOT NULL UNIQUE,password varchar(1000) NOT NULL,location varchar(50),primary key (id))";
    connection.query(sql,(err,result)=>{
            if(err) throw err
            console.log(" ZomatoUser Table has created!!")
        })


        // To create veg  restaurants
        var sql="create table if not exists  Vegrestaurants (restaurants_id  int(11) NOT NULL auto_increment,menu varchar(50) NOT NULL ,restaurants_name varchar(50) ,price int(121),primary key (restaurants_id))";
        connection.query(sql,(err,result)=>{
                if(err) throw err
                console.log(" Vegrestaurants Table has created!!")



            

                let sql='INSERT INTO Vegrestaurants (menu,restaurants_name,price) VALUES ?';
                var hotels=[
                    ["pizza","Adarsh hotel",199],["pasta","SaiBaba",120] ,["veg biryani","rajhotel",90] ,["juice","Tajhotel ",40], ["chhole bhature","ambani",40],["puri sbji","7Star",80],["rayta","GuruKrupa",25],["idli","SatGuru",80],["Dosa","ApnaDhaba",120],
                    ["wadapav","Aashyana",123],["panir puri","Adarsh hotel",234],["palak puri","SaiBaba",100] 
                ]
                connection.query(sql,[hotels],function(err){
                
                
                    if (err) throw err;
                    console.log("Data Added in Vegrestaurants !!!");
        
              

                })

              
                
            })

            // to create non veg restaurants
            var sql="create table if not exists  Non_Veg_restaurants (restaurants_id  int(11) NOT NULL auto_increment,menu varchar(50) NOT NULL ,restaurants_name varchar(50) , price  int(121),primary key (restaurants_id))";
            connection.query(sql,(err,result)=>{
                if(err) throw err
                console.log(" Non_Veg_restaurants Table has created!!")



            

                let sql='INSERT INTO Non_Veg_restaurants (menu,restaurants_name,price) VALUES ?';
                var hotels=[
                    ["chicken","Adarsh hotel",200],["maton","SaiBaba",600] ,["egg biryani","rajhotel",260] ,["egg_curry","Tajhotel ",120], ["amlet","ambani",50],["fish","7Star",90],["lolipop","GuruKrupa",300],["chicken_roll","SatGuru",234],["Tandoori_Lamb_Chops","ApnaDhaba",345],
                    ["Malabar Fish Biryani ","Aashyana",5767],["keema","Adarsh hotel",56],["chicken biryani","SaiBaba",6778] 
                ]
                connection.query(sql,[hotels],function(err){
                
                
                    if (err) throw err;
                    console.log("Data Added in Non_Veg_restaurants !!!");
        
              

                })

              
                
            })



            // to create  addcard
            var sql="create table if not exists  AddToCard (addcard_id  int(11) NOT NULL auto_increment,menu varchar(50) NOT NULL ,restaurants_name varchar(50) , price  int(121),primary key (addcard_id))";
            connection.query(sql,(err,result)=>{
                if(err) throw err
                console.log(" AddToCard Table has created!!")
            })



            // To create order
            const sql_data="create table if not exists orderID (order_id  int(11) NOT NULL auto_increment,menu varchar(50),TIME varchar(50) , totalcost  int(11), delivery_charge int(11), payments varchar(50),price int (11),restaurants_name varchar(50),primary key (order_id))";
            connection.query(sql_data,(err,result)=>{
                if(err) throw err
                console.log(" order Table has created!!")
            })
        
        
    

module.exports=connection