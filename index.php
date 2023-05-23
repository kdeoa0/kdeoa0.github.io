<!DOCTYPE html>
<html>
<head>
    <?php
        include("insert.php");
    ?>
    <script src="Controlador/java/main.js"></script>
    <link rel="stylesheet" href="Vista/css/rainbow.css" >
    <img src="Vista/images/matrix.jpg" class="loop">
    <title>Diario El Faro</title>


    
</head>
<body>

    <header>
        <h1>Diario Faro</h1>
        <div id="clock">00:00:00</div><br>
        <div id="perron">cantidad de articulos: 0</div>
    </header>
    
    <div style = "position:absolute; right:0px; top:0px;">
    <img src="Vista/images/MainLogo.png" width="100" >
    </div>
    <!--Links--> 
    <h2>    
        <a href="index.php">Inicio</a> 
        <br><a href="sport.php">Deporte</a>
        <br><a href="negocio.php">Negocios</a>
    </h2>
    <!--Seccion avisos--> 
    <hr>
    <h1 class="Aviso">Sección de Avisos</h1>
    <div class="Saviso">
    <h2 >Aviso!!!!!!  Follow this channel : 
    <p><a href="https://www.twitch.tv/nihmune">https://www.twitch.tv/nihmune</a></p> 
    </h2>
    </div>
    <hr>
    <h1 id="noticiass">NOTICIAS</h1>

    <!--noticias 3-->
    <div class="grid-item grid-item-3" id="gridepica"></div>

        <!--formulario1-->
    <form class="formulario">
    <h1 id="formu">Formulario articulo</h1>
    <label for="titulo">Titulo:</label><br>
    <input type="text" id="titulo"> <br>
    <label for="articuloo">Cuerpo:</label><br>
    <input type="text" id="articuloo">
    <br>
    <input type="button" id="boton4" onclick="vida()"  value="Press"> 
    </form>

    <!--formulario2-->
    <br><br>
    <form class="formulario">
    <h1 id="formus">Formulario contacto</h1>
    <label for="nombre">Nombre:</label><br>
    <input type="text" id="nombre"> <br>
    <label for="mensaje">Mensaje:</label><br>
    <input type="text" id="mensaje"><br>
    <input type="button" id="boton2" value="Press" onclick="contacto()"> <br>
    </form>
    <a href="sport.php">click para recargar la pagina</a>

    <!--formulario3-->
    <br><br>
    <form method="post" class="formulario">
        <h1 id="formu3">Ingreso usuario</h1>
        <label>Nombre:</label><br>
	    <input type="text" name="name"><br>
	    <label>Contraseña:</label><br>
        <input type="password" name="password"><br>
	    <input type="submit" name="submit" value="Press" onclick="Login()">
    </form>

    <br>
    <!--articulo anterior-->
    
    <h1 id="formu4">Articulo anterior</h1>
    <div id="old-article"> </div>
    <label for="papitas">Elige el numero de tu articulo:</label> <br>
    <input type="number" id="papitas" min="0" >
    <input type="button" id="miniarti" onclick="miniarti()" value="press me">
    
    <br><br><br>
    <video height="540" autoplay controls>
        <source src="Vista/video/rickroll.mp4" type="video/mp4">
    </video>
    <br>
    <!--meme-->
    <a href="negocio.php">haz click aqui para encontrar una sorpresa</a> <br>
    <audio controls>
        <source src="Vista/music/FIgaro.mp3" type="audio/mpeg ">
    </audio>
    <br>
    <!--presentar usuarios-->

    <h1 id="formu4">Usuarios registrados</h1>
    <div class="grid-item grid-item-3">
    <?php
    if ($presentacion->num_rows > 0 ){
    while($row = $presentacion->fetch_assoc()){
        echo "<p>".$row["usersname"]."<p>";
    }
    }
    ?>
    </div>

</body>
<footer>
    <h1 class="footer">Footer</h1>
    
</footer>
<img src="Vista/images/matrix.jpg" class="loop">  
</html>
