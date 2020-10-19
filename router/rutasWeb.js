const express=require('express');

const router=express.Router();

const paciente=require('../models/paciente');

router.get('/',(req,res)=>{
    res.render("index");
});
//router.get('/',paciente.listar);

//router.get('/paciente',(req,res)=>{
 //   res.render("servicios");
//})
router.get('/paciente',paciente.listar);
router.post('/paciente/add',paciente.insert);
//praaemtros en la ruta//
router.get('/paciente/eliminar/:id',paciente.eliminar);
router.get('/paciente/update/:id',paciente.update);
router.post('/paciente/editar/:id',paciente.editar);


module.exports=router;