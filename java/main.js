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








let contador=0;
function vida(){
contador++;
var conta= "cantidad de articulos: "+contador;
var pepi = document.getElementById("titulo").value;
var pepo = document.getElementById("articuloo").value;
var grid = document.getElementById("gridepica");
var elemento = document.createElement("div");
var elemento2 = document.createElement("div");
var elemento3 = document.createElement("div");
elemento2.style.gridRow = 2;

elemento.textContent="Titulo: "+pepi;
elemento2.textContent="Cuerpo: "+pepo;
elemento3.textContent="<!--  -->";
elemento.style.gridRow = "1";
elemento2.style.gridRow = "2";
elemento3.style.gridRow = "3";
grid.appendChild(elemento);
grid.appendChild(elemento2);
grid.appendChild(elemento3);
document.getElementById("perron").innerHTML = conta;
document.getElementById("titulo").value="";
document.getElementById("articuloo").value="";

}



let caja=[];

var listado = document.getElementById('listado');
var item = document.createElement('li');
item.appendChild(document.createTextNode(pepi));
listado.appendChild(item);
















function contacto(){
    var sapo = document.getElementById("nombre");
    var sapa = document.getElementById("mensaje");
    //nobody is going to read the this!!!
    sapo.value="";
    sapa.value="";
    alert("enviado")
}