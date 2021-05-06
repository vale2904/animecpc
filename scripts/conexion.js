let  busqueda="Love Is War ";

let url=`http://api.giphy.com/v1/gifs/search?api_key=fEAR9TrqgjatwcOtKAPuEkthH7dg1Z9k&q=${busqueda}`;

//2. Definir los elementos del barra de busqueda
let botonBusqueda=document.getElementById("botonBusqueda");
let parametroBusqueda=document.getElementById("busqueda");

//3. Agregar el evento de clic al boton busqueda
botonBusqueda.addEventListener("click",buscarDatos);

//4. LLamar a la función conectarGiphy
conectarGiphy(1);



function buscarDatos(){

    busqueda=parametroBusqueda.value;
    url=`http://api.giphy.com/v1/gifs/search?api_key=fEAR9TrqgjatwcOtKAPuEkthH7dg1Z9k&limit=9&q=${busqueda}`;

    conectarGiphy();

}

function conectarGiphy(condicion){

    if(condicion==1){
        
        fetch(url)
        .then(respuesta=>respuesta.json())
        .then(datos=>organizarDatos(datos));

    }else{
        fetch(url)
        .then(respuesta=>respuesta.json())
        .then(datos=>organizarBusqueda(datos));
    }
}

function organizarDatos(datos){

    let contenedorPadre=document.getElementById("contenedor");
    let arregloDatos=datos.data;

    arregloDatos.map(function(dato){
        
        let imagen=document.createElement("img");

        imagen.src=dato.images.downsized_medium.url;
        imagen.classList.add("p-5");
        contenedorPadre.appendChild(imagen);

    });

}

function organizarBusqueda(datos){
    
    let contenedorPadre=document.getElementById("contenedor");
    
    while(contenedorPadre.firstChild){
        contenedorPadre.removeChild(contenedorPadre.firstChild);
    }

    let arregloDatos=datos.data;

    arregloDatos.map(function(dato){
        
        let imagen=document.createElement("img");

        imagen.src=dato.images.downsized_medium.url;
        imagen.classList.add("p-5");
        contenedorPadre.appendChild(imagen);

    });

}