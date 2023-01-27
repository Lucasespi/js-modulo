

  document.getElementById('boton') .onclick= function () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML= "estamos probando nuestro primer documento JS";
  }
 

document.addEventListener('click' , function () {
    console.log("hola mundo desde eventlistener")
    document.getElementById("demo").innerHTML= "estamos probando nuestro primer documento JS";

});




document.getElementById('boton_color').addEventListener ('click' , function () {
    document.body.style.backgroundColor='blue' ;
});

    document.getElementById('boton_default').addEventListener ('click' , function () {
        document.body.style.backgroundColor='yellow' ;
        
}) ; 

document.getElementById('boton_ocultar').addEventListener ('click' , function () {
    document.getElementById("demo").style.display = 'none'
    
}) ; 



