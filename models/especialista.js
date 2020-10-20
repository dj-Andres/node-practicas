const doctor={};

doctor.listar=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM paciente',(err,rows)=>{
            if(err){
                res.json(err);
            }
            res.render("servicios",
                {
                    data:rows
                }
            );
        });
    });
}

module.exports=doctor;