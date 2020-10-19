const express=require('express');

const app=express();

const puerto=process.env.PORT || 3000;

const mysql=require('mysql');

const myConnection=require('express-myconnection');
//credenciales de mysql//
//var mysqlConnnection=mysql.createConnection({
  //  host:'localhost',
  //  user:'root',
  //  password:'1234',
  //  database:'jimenez',
 //   port:'3306',
 //   multipleStatements:true
//});

//establece la cadena de coneccion//
//mysqlConnnection.connect((err)=>{
  //  if(!err){
    //    console.log('Conexion exitosa a mysql');
   // }else{
     //   console.log('Conexion fallida'+ JSON.stringify(err,undefined,2));
    //}
//})

const flash=require('connect-flash');

app.set('view engine','ejs');
app.set('views',__dirname+"/views");
app.use(express.static(__dirname+"/public"));

app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'1234',
    database:'jimenez',
    port:'3306',
},'single'));

app.use(express.urlencoded({extended:false}));

app.use('/',require('./router/rutasWeb'));

app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo:"404",
        descripcion:"No se encontro lo que buscabas no molestar"
    });
})

app.use(flash());

app.use((req,res,next)=>{
    app.locals.success=req.flash('success');
    app.locals.success=req.flash('message');
    next();
});

app.listen(puerto,()=>{
    console.log('Servidor listo: '+puerto);
})
