<?php
$usuario=$_POST['usuario'];
$password=$_POST['password'];
session_start();
$_SESSION['usuario']=$usuario;

$conexion=mysqli_connect("localhost","root","","login");

  


 $consulta="SELECT*FROM usuarios where usuario='$usuario' and password='$password'";
 $resultado=mysqli_query($conexion,$consulta);

 $filas=mysqli_num_rows($resultado);
  if($filas) {
    header("location:home.html");

  }else{
    include("index.html");
      ?>
      <h1 class="bad">ERROR EN LA AUTENTIFICACION</h1>
      <?php 

  }
  mysqli_free_result($resultado);
  mysqli_close($conexion);

  function ingresar($usuario, $password) {
    $url = "http://localhost:3000/login?usuario=" . urlencode($usuario) . "&password=" . urlencode($password);
    $response = file_get_contents($url);

    if ($response !== false) {
        $data = json_decode($response);
        if ($data->ok) {
            // Usuario autenticado correctamente
            // Realizar las acciones necesarias, como establecer una sesión, etc.
            // Por ejemplo:
            // session_start();
            // $_SESSION['usuario'] = $usuario;
            return true;
        } else {
            // Usuario o contraseña incorrectos
            // Manejar este caso según sea necesario
            return false;
        }
    } else {
        // Error al realizar la solicitud
        // Manejar este caso según sea necesario
        return false;
    }
}

// Uso de la función ingresar
$usuario = "usuario";
$password = "password";

if (ingresar($usuario, $password)) {
    echo "Inicio de sesión exitoso";
} else {
    echo "Error al iniciar sesión. Usuario o password incorrectos.";
}
