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

function contacto(){
    var sapo = document.getElementById("nombre");
    var sapa = document.getElementById("mensaje");
    //nobody is going to read the this!!!
    sapo.value="";
    sapa.value="";
    alert("enviado")
}




var titulox=[];
var cuerpox=[];

let contador=0;
function vida(){
contador++;
var conta= "cantidad de articulos: "+contador;
var pepi = document.getElementById("titulo").value;
var pepo = document.getElementById("articuloo").value;
var grid = document.getElementById("gridepica");
var elemento = document.createElement("div");
var elemento2 = document.createElement("div");
var elemento3 = document.createElement("p");
var nuevo = document.createElement("p");

//clase epica
elemento.className="grid-item-2";

//variables para borrar
nuevo.id ="nuevo";
nuevo.className="nuevo";
elemento3.className="nuevo";
elemento3.id="nueva";
elemento2.className="cuerpo";


elemento2.style.gridRow = 2;
//if para borrar
var deletee= document.getElementById("nuevo");
var deleteee= document.getElementById("nueva");
if (contador>1){
    deletee.parentNode.removeChild(deletee);
    deleteee.parentNode.removeChild(deleteee);

}

elemento.textContent="Titulo: "+pepi;
elemento2.textContent="Cuerpo: "+pepo;
//para peticion de articulos



elemento3.textContent="ARTICULO MAS RECIENTE";
nuevo.textContent="ARTICULO MAS RECIENTE";
elemento.style.gridRow = "1";
elemento2.style.gridRow = "2";
elemento3.style.gridRow = "3";

grid.appendChild(nuevo);
grid.appendChild(elemento);
grid.appendChild(elemento2);
grid.appendChild(elemento3);

document.getElementById("perron").innerHTML = conta;
document.getElementById("titulo").value="";
document.getElementById("articuloo").value="";

titulox.push(pepi);
cuerpox.push(pepo);
}



//mini articulo
function miniarti(){
    var numbere= document.getElementById("papitas").value;
    var josuke= titulox[parseInt(numbere)];
    var joline= cuerpox[parseInt(numbere)];
    var jotaro= "Titulo: "+josuke+" <br> Cuerpo: "+joline;
    document.getElementById("old-article").innerHTML =jotaro;
    console.log("papitas: " + jotaro);
}








