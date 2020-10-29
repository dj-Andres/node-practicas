const express=require('express');

const router=express.Router();

const paciente=require('../models/paciente');

const doctor=require('../models/especialista');

//router.get('/',paciente.listar);

//router.get('/paciente',(req,res)=>{
 //   res.render("servicios");
//})

router.get('/',(req,res)=>{
    res.render("index");
});

router.get('/',(req,res)=>{
    res.render("servicios");
});

router.get('/paciente',paciente.listar);
router.post('/paciente/add',paciente.insert);
//praaemtros en la ruta//
router.get('/paciente/eliminar/:id',paciente.eliminar);
router.get('/paciente/update/:id',paciente.update);
router.post('/paciente/editar/:id',paciente.editar);

router.get('/especialista',doctor.listar);
router.get('/especialista',doctor.buscar);


module.exports=router;