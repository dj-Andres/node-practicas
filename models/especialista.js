const doctor={};
doctor.listar=async(req,res)=>{
    req.getConnection((err,conn)=>{
        await = conn.query('SELECT * FROM odontologo',(err,rows)=>{
            if(err){
                res.json(err);
            }
            res.render("doctor",
                {
                    datos:rows
                }
            );
        });
    });
}
doctor.buscar=async(req,res)=>{
    //const cedula=req.query.paciente;
    if(req.body.buscar){
        console.log('buscar');
        //req.getConnection((err,conn)=>{
          //  await=conn.query('SELECT * FROM paciente WHERE cedula= ?',[req.query.paciente],(err,rows)=>{
            //    if(!err){
              //      console.log(rows);
                //}else{
                  //res.json(err);
                  //console.log(err);
                //}            
            //})
        //});   
    }
}
module.exports=doctor;