//Se referencian las etiquetas a controlar
let boton=document.getElementById("botonEnvio");
let nombre=document.getElementById("nombreUsuario");
let correo=document.getElementById("correoUsuario");
let password1=document.getElementById("passwordUsuario");


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
          
          }         

}