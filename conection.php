<?php
class conectado{
    public $ip, $user, $clave, $db, $conn;
    public function __construct($ip, $user, $clave, $db){
        $this->conn = mysqli_connect($ip, $user, $clave, $db);
    }
};
$connx= new conectado("127.0.0.1:3306", "root","","elfaro");

?>