const Swal=require('sweetalert2');
const paciente={};

paciente.listar=(req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM paciente',(err,rows)=>{
            if(err){
                res.json(err);
            }
            res.render("servicios",{
                data:rows     
            });
        });
    });
}
paciente.insert=async(req,res)=>{
    const data=req.body;
    req.getConnection((err,conn)=>{
          conn.query("SELECT * FROM paciente WHERE cedula= ?",[data.cedula],(err,rows,fields)=>{
            if(!err){
                if(rows.length > 0){
                        res.render("servicios",{
                            data:true
                        });
                        //req.flash('success','La cedula ya se encuentra asociada a un paciente. Por favor verificar el numero de cedula');
                        //res.render("servicios");
                }else{
                    await= conn.query('INSERT INTO paciente set ?',[data],(err,rows)=>{
                        if(err){
                            res.json(err);
                        }
                        console.log(rows);
                        res.render("servicios",{
                            data:false
                        });
                    })      
                }
            }else{
                res.json(err);
            }
        })
    })    
}
paciente.eliminar=(req,res)=>{
    //forma de recibir url con parametros//
    //console.log(req.params.id);
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        if(! err){
            conn.query('DELETE FROM paciente WHERE Id_paciente=?',[id],(err,rows)=>{
                res.redirect('/paciente');
            })
        }else{
            res.json(err);
        }
    })
    
}
paciente.update=async(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        if(!err){
            await=conn.query('SELECT * FROM paciente WHERE Id_paciente= ?',[id],(err,rows)=>{
                console.log(rows);
                res.render('paciente_edicion',{
                    data:rows[0]
                })
            })
        }else{
            res.json(err);
        }
    })

}
paciente.editar=(req,res)=>{
    const {id}=req.params;
    const newDatos=req.body;
    req.getConnection((err,conn)=>{
        if(!err){
            conn.query('UPDATE paciente  set ?  WHERE Id_paciente=',[newDatos,id],(err,rows)=>{
                console.log(rows);
                res.redirect('/paciente');
            })
        }else{
            res.json(err);
        }
    })
}
module.exports=paciente;