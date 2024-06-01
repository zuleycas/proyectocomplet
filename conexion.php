<?php
 
$conexion=mysqli_connect("localhost","root","","registro");
$conexion->set_charset("utf8");

if (!empty($_POST["registrar"])) {
  if (empty($_POST["nombre"]) or empty($_POST["apellido"]) or empty($_POST["usuario"]) or empty($_POST["password"])){
    echo 'uno de los campos esta vacio';
  }
}

  
?>
   
