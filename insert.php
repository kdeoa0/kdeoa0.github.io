<?php
include("conection.php");

if (isset($_POST["submit"])){
    if (strlen($_POST["name"]) >= 1 && strlen($_POST["password"]) >= 1){
        $name = trim($_POST["name"]);
        $password = trim($_POST["password"]);
        $consulta = "CALL InsertData('$name', '$password');";
        $resultado = mysqli_query($connx->conn,$consulta);

    }
}   

$leer = "CALL SelectData();";
$presentacion= $connx->conn->query($leer);

?>

