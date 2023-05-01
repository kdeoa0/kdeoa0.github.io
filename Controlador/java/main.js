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


class Article {
    constructor(titulo, cuerpo){
    this.titulo = titulo;
    this.cuerpo = cuerpo;
    }
};
var articlex=[];
var titulox=[];
var cuerpox=[];
let contador=0;
function vida(){
contador++;
var conta= "cantidad de articulos: "+contador;
//values for article
var pepi = document.getElementById("titulo").value;
var pepo = document.getElementById("articuloo").value;

var grid = document.getElementById("gridepica");
var elemento = document.createElement("div");
var elemento2 = document.createElement("div");

//ad
var ad = document.createElement("p");
var ad1 = document.createElement("p");

//clase epica
elemento.className="grid-item-2";

//ad class and id
ad1.id ="nuevo";
ad1.className="nuevo";
ad.className="nuevo";
ad.id="nueva";
//cuerpo class
elemento2.className="cuerpo";

elemento2.style.gridRow = 2;

//if for ad delete
var deletee= document.getElementById("nuevo");
var deletee2= document.getElementById("nueva");
if (contador>1){
    deletee.parentNode.removeChild(deletee);
    deletee2.parentNode.removeChild(deletee2);
};


elemento.textContent="Titulo: "+pepi;
elemento2.textContent="Cuerpo: "+pepo;
//para peticion de articulos



ad.textContent="ARTICULO MAS RECIENTE";
ad1.textContent="ARTICULO MAS RECIENTE";
elemento.style.gridRow = "1";
elemento2.style.gridRow = "2";
ad.style.gridRow = "3";

grid.appendChild(ad1);
grid.appendChild(elemento);
grid.appendChild(elemento2);
grid.appendChild(ad);

document.getElementById("perron").innerHTML = conta;
document.getElementById("titulo").value="";
document.getElementById("articuloo").value="";

//memory article
let pusharticle= new Article(pepi, pepo);
articlex.push(pusharticle)

};



//mini articulo
function miniarti(){
    var numbere= document.getElementById("papitas").value;
    var josuke= articlex[parseInt(numbere)].titulo;
    var joline= articlex[parseInt(numbere)].cuerpo;
    var jotaro= "Titulo: "+josuke+" <br> Cuerpo: "+joline;
    document.getElementById("old-article").innerHTML =jotaro;
    console.log("papitas: " + jotaro);
}



class User {
    constructor(Nombre, Clave){
    this.nombre= Nombre;
    this.clave= Clave;
    }
}
var userx=[];
extracount=0;
function Login(){
    extracount++
    users=document.getElementById("usuario")
    password=document.getElementById("clave")
    let pushuser= new User(users, password);
    userx.push(pushuser);

}


