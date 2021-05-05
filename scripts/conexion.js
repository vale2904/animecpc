let  busqueda="Love Is War ";

let url=`http://api.giphy.com/v1/gifs/search?api_key=fEAR9TrqgjatwcOtKAPuEkthH7dg1Z9k&q=${busqueda}`;

let botonBusqueda=document.getElementById("botonBusqueda");
let parametroBusqueda=document.getElementById("Busqueda");

botonBusqueda=addEventListener("click",buscarDatos);

function buscarDatos(){
    console.log("hola estoy buscando....");
}

fetch(url)
    .then(respuesta=>respuesta.json())
    .then(datos=>organizarDatos(datos));

    function organizarDatos(datos){

      let contenedorPadre=document.getElementById("contenedor");
      let arreglosDatos=datos.data;

      arreglosDatos.map(function(dato){
          let imagen=document.createElement("img");

          imagen.src=dato.images.downsized_medium.url;
          contenedorPadre.appendChild(imagen);
      });
    }
    