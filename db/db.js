/****************************************************************/
/****************** CONECCION A MONGO DB ************************/
/****************************************************************/


const  mongoose   =  require ('mongoose') ;

mongoose.connect('mongodb://127.0.0.1/Prueba_01')//Si no funciona el ip podemos utilizar localhost
.then( ()=> console.log('CONECTADO A MONGO'))
.catch( (e)=> console.log('El error de coneccion es: '+ e))



/***************ESQUEMA Y MODELO DEL USUARIO *******************/



//ESQUEMA USUARIO(hacemos el esquema de nuestra tabla)
const  esquemaUsuario  =  mongoose.Schema({ 
    _id:String,
    correo: String,
    password: String,
    rol:String,
    name:String,
    lastname: String,
    telefono: Number

  }, {versionKey: false});//(evitamos que esta propiedad salga en la base de datos)
  
  
  
  //MODELO USUARIO (creamos un modelo para poder manipular datos)
  const  ModeloUsuario  =  mongoose.model('usuarios', esquemaUsuario ) ;//usuarios hace referencia a la tabla de la bd



/***************ESQUEMA Y MODELO DEL AUTO *******************/



//ESQUEMA DEL AUTO(hacemos el esquema de nuestra tabla)
const  esquemaAuto  =  mongoose.Schema({ 
    _id:String,
    name: String,
    descripcion: String,
    sector:String

  }, {versionKey: false});//(evitamos que esta propiedad salga en la base de datos)
  
  
  
  //MODELO AUTO (creamos un modelo para poder manipular datos)
  const  modeloAuto  =  mongoose.model('autos', esquemaAuto ) ;//usuarios hace referencia a la tabla de la bd





/********************ESQUEMA Y MODELO DEL DISPOSITIVO ************************/


//ESQUEMA DEL DISPOSITIVO(hacemos el esquema de nuestra tabla)
const  esquemaDispositivo  =  mongoose.Schema({ 

    name: String,
    idAuto: String,
    estado: String,
    instalacion:String


  }, {versionKey: false});//(evitamos que esta propiedad salga en la base de datos)
  
  
  
  //MODELO USUARIO (creamos un modelo para poder manipular datos)
  const  modeloDispositivo  =  mongoose.model('dispositivos', esquemaDispositivo ) ;//usuarios hace referencia a la tabla de la bd




/****************************************************************/
/****************** Metodos para interactuar*********************/
/****************************************************************/



/*************METODOS PARA OBTENER USUSARIO****************/


//__________________________________________________________________________
//MOSTRAR POR NOMBRE
const mostrar = async (nombre)=>{
    const name =nombre.trim();
    const usuarios = await ModeloUsuario.find({name: nombre});
    console.log(usuarios);
    return usuarios;
}


//__________________________________________________________________________
//Mostrar por correo

const mostrarPorCorreo = async(correo) => {
    const usuario =  await ModeloUsuario.find({correo: correo.trim()});
    console.log(usuario);
    return usuario;
}


//__________________________________________________________________________
//Mostrar por ID

const mostrarPorId = async(id) => {
    const usuario =  await ModeloUsuario.find({id: id.trim()});
    console.log(usuario);
    return usuario;
}



//__________________________________________________________________________
//Mostrar por rol

const mostrarPorRol = async(rol) => {
    const usuario =  await ModeloUsuario.find({rol: rol.trim()});
    console.log(usuario);
    return usuario;
}



//__________________________________________________________________________
//Mostrar todos

const mostrarUsuarios = async() => {
    const usuario =  await ModeloUsuario.find({});
    console.log(usuario);
    return usuario;
}


/*************METODOS PARA OBTENER DISOPOSITIVOS****************/

//Mostrar todos

const mostrarDispositivos = async() => {
    const dispositivos =  await ModeloDispositivo.find({});
    console.log(dispositivos);
    return dispositivos;
}


/*************METODOS PARA OBTENER AUTOS****************/

//Mostrar todos

const mostrarAutos = async() => {
    const autos =  await ModeloDispositivo.find({});
    console.log(autos);
    return autos;
}



/********************METODOS PARA CREAR*******************/



//__________________________________________________________________________
//crear usuario

const crear= async (correo, password, rol, name, lastname, telefono)=>{


    let idUnico= rol.substring(0,1) +  telefono.substring(6,10);
    const persona= new ModeloUsuario({
        id: idUnico.trim(),
        name:name.trim(),
        lastname: lastname.trim(),
        correo: correo.trim(),
        password: password.trim(),
        rol: rol.trim(),
        telefono: telefono.trim()

    })

    const resultado =persona.save();
    console.log(resultado);
    console.log(idUnico);
}


//__________________________________________________________________________

//CREAR DISPOSITIVO

const crearDispositivo= async (nombre, idAuto)=>{

    
     
// crea un nuevo objeto `Date`
var today = new Date();
 
// `getDate()` devuelve el día del mes (del 1 al 31)
var day = today.getDate();
 
// `getMonth()` devuelve el mes (de 0 a 11)
var month = today.getMonth() + 1;
 
// `getFullYear()` devuelve el año completo
var year = today.getFullYear();
 
// muestra la fecha de hoy en formato `MM/DD/YYYY`
console.log(`${day}/${month}/${year}`);
 var date= `${day}/${month}/${year}`;
console.log(date);

    const dispositivo= new modeloDispositivo({
        
        name: nombre.trim(),
        idAuto: idAuto.trim(),
        estado: "Activo",
        instalacion: date


    })

    const resultado =dispositivo.save();
    console.log(resultado);
}


//__________________________________________________________________________
//CREAR AUTO

const crearAuto= async (nombre, descripcion, sector, placas)=>{

    const auto= new modeloAuto({
        _id: placas,
        name: nombre.trim(),
        descripcion: descripcion.trim(),
        sector:sector.trim()
        

    })

    const resultado =auto.save();
    console.log(resultado);
    
}




mostrarUsuarios();