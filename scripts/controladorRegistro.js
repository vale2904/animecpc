//Se referencian las etiquetas a controlar
let boton=document.getElementById("botonEnvio");
let nombre=document.getElementById("nombreUsuario");
let correo=document.getElementById("correoUsuario");
let password1=document.getElementById("passwordUsuario");
let modal=new bootstrap.Modal(document.getElementById("mensaje"));
let formulario=document.getElementById("formulario");

let llave1;
let llave2;
let llave3;

//Recibir el evento de clic en mi boton
boton.addEventListener("click",recibirDatosFormulario);

//Se crea función para recibir información
function recibirDatosFormulario(){

    let nombreValor=nombre.value;
    let correoValor=correo.value;
    let password1Valor=password1.value;

    validarCaminos(nombreValor,correoValor,password1Valor);   
}

function validarCaminos(nombreValor,correoValor,password1Valor){

    if(nombreValor=="" && correoValor=="" && password1Valor==""){
     nombre.classList.add("is-invalid");
     correo.classList.add("is-invalid");
     password1.classList.add("is-invalid");
    
        }else if( correoValor=="" && password1Valor==""){
         correo.classList.add("is-invalid");
         password1.classList.add("is-invalid");
         nombre.classList.remove("is-invalid");

        
         }else if( correoValor=="" && nombreValor==""){
         correo.classList.add("is-invalid");
         nombre.classList.add("is-invalid");
         password1.classList.remove("is-invalid");
   
           
        }else if( nombreValor=="" && password1Valor==""){
            nombre.classList.add("is-invalid");
            password1.classList.add("is-invalid");
            correo.classList.remove("is-invalid");
       
        }    
        else if( password1Valor==""){
           password1.classList.add("is-invalid");
           correo.classList.remove("is-invalid");
           nombre.classList.remove("is-invalid");
        }       
        else if( correoValor=="" ){
            correo.classList.add("is-invalid");
            nombre.classList.remove("is-invalid");
            password1.classList.remove("is-invalid");
        }     
        else if( nombreValor=="" ){
            nombre.classList.add("is-invalid");
            password1.classList.remove("is-invalid");
            correo.classList.remove("is-invalid");
        }  else{
            nombreUsuario.classList.remove("is-invalid")
            correoUsuario.classList.remove("is-invalid")
            password1.classList.remove("is-invalid")
          
            llave1="nombre="+nombreValor;
            llave2="correo="+correoValor;
            llave3="password="+password1Valor;
            
            conectarAPI();
            
          }         

}

function conectarAPI(){

    let url="http://localhost:8080/apicpc/public/usuarios/nuevo";
    
    let parametros={
        method:"POST",
        headers:{"Content-Type": 'application/x-www-form-urlencoded'},
        body:llave1+"&"+llave2+"&"+llave3

    }

    fetch(url,parametros)
    .then(respuesta=>respuesta.json())
    .then(datos=>validarRespuesta(datos));
}
function validarRespuesta(datos){

    if(datos.estado){
      modal.show();
      formulario.reset();

    }




}