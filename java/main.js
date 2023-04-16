function reloj() {
    var now= new Date();
    var mes = now.getMonth();
    var dia = now.getDate();
    var hora= now.getHours();
    var minuto= now.getMinutes();
    var segundo= now.getSeconds();
    var tiempo= mes + "/" +dia+ "  "+hora + ':' + minuto + ':' + segundo;
    //var tiempo= now;
    document.getElementById("clock").innerHTML = tiempo;
}
setInterval(reloj, 1000);

var Elboton = document.getElementById("boton1");

function countarticle(){
    
}




function articulo(){
var radione =getElementById("radio1");
var radiotwo =getElementById("radio2");
var radiothree =getElementById("radio3");
if (radione =false){

    var pepe = document.getElementById("titulo");
    var pepa = document.getElementById("articuloo");
    var pepi = document.getElementById("parafo")
    var pepo = document.getElementById("manzana")
    
    pepi.innerHTML = "parafo" + pepe.value;
    pepo.innerHTML = "manzana" + pepa.value;
    pepe.value="";
    pepa.value="";

}else if(radiotwo =false){

    var pepe = document.getElementById("titulo");
    var pepa = document.getElementById("articuloo");
    var pepi = document.getElementById("nego")
    var pepo = document.getElementById("cio")
    
    pepi.innerHTML = "nego" + pepe.value;
    pepo.innerHTML = "cio" + pepa.value;
    pepe.value="";
    pepa.value="";

}else if(radiothree =false){

    var pepe = document.getElementById("titulo");
    var pepa = document.getElementById("articuloo");
    var pepi = document.getElementById("depo")
    var pepo = document.getElementById("rte")
    
    pepi.innerHTML = "depo" + pepe.value;
    pepo.innerHTML = "rte" + pepa.value;
    pepe.value="";
    pepa.value="";

}
}










function contacto(){
    var sapo = document.getElementById("nombre");
    var sapa = document.getElementById("mensaje");
    sapo.value="";
    sapa.value="";
    alert("enviado")
}