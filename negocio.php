<!DOCTYPE html>
<html>
<head>
    <script src="Controlador/java/main.js"></script>
    <link rel="stylesheet" href="Vista/css/rainbow.css" >
    <img src="Vista/images/dogecoinx.png" class="loop" width="max" height="500">
    <title>Negocios</title>
    
    
</head>
<body>
    
    <header>
        <h1>Negocios</h1>
        <div id="clock">00:00:00</div>
        <br>
        <div id="perron">cantidad de articulos: 0</div>
    </header>
    
    <div style = "position:absolute; right:0px; top:0px;">
    <img src="Vista/images/MainLogo.png" width="100" >
    </div>
     
    <hr>
    <h2>
        Avisos: !!!!!! Follow this channel : <a href="https://www.twitch.tv/nihmune">https://www.twitch.tv/nihmune</a> 
    </h2>
    <hr>

    <h2>    
            <a href="index.php">Inicio</a> 
        <br><a href="sport.php">Deporte</a>
    </h2>
    <hr>
    <h1 id="noticiass">NOTICIAS</h1>
    
    </div>
    <!--noticias 3-->
    <div class="grid-item grid-item-3" id="gridepica">

    </div>

    


        <!--formulario1-->
    <h1 id="formu">Formulario articulo</h1>

    <label for="titulo">Titulo</label>
    <input type="text" id="titulo"> <br>
    <label for="articuloo">Cuerpo</label>
    <input type="text" id="articuloo">
    <br>
    <input type="button" id="boton4" onclick="vida()"  value="Press"> 
    <!--formulario2-->
    <br>
    <h1 id="formus">Formulario contacto</h1>
    <label for="nombre">Nombre</label>
    

    <input type="text" id="nombre"> <br>
    <label for="mensaje">Mensaje</label>
    <input type="text" id="mensaje">

    <input type="button" id="boton2" value="Press" onclick="contacto()"> 
    <a href="sport.php">click para recargar la pagina</a>
    <!--articulo anterior-->
    <div id="old-article"> </div>
    <input type="number" id="papitas" min="0" >
    <input type="button" id="miniarti" onclick="miniarti()" value="press me">
    <br><br><br>
    <video height="540" autoplay controls>
        <source src="video/rickroll.mp4" type="video/mp4">
    </video>
    <br>
    <a href="negocio.php">haz click aqui para encontrar una sorpresa</a> <br>
    <audio controls>
        <source src="music/FIgaro.mp3" type="audio/mpeg ">
    </audio>
    <br>
    
</body>
<footer>
    <h1 class="footer">Footer</h1>
    
</footer>
<img src="Vista/images/matrix.jpg" class="loop">  
</html>