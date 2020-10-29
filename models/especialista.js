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
            console.log(rows);
        });
    });
}

module.exports=doctor;