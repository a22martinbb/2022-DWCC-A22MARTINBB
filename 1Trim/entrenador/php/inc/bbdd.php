<?php
$nombre_servidor = "localhost";
$usuario = "entrenador";
$contra = "abc123.";
$basededatos = "entrenador";

$conexion = new mysqli($nombre_servidor, $usuario, $contra, $basededatos);
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}




class deportista
{
    public $idUser;
    public $nombreUser;
    public $categoria;
    public $seccion;

    function __construct($idUser, $nombreUser, $categoria, $seccion)
    {
        $this->idUser = $idUser;
        $this->nombreUser = $nombreUser;
        $this->categoria = $categoria;
        $this->seccion = $seccion;
    }
}



class prueba
{
    public $idPrueba;
    public $nombrePrueba;

    function __construct($idPrueba, $nombrePrueba)
    {
        $this->idPrueba = $idPrueba;
        $this->nombrePrueba = $nombrePrueba;
    }
}

class marca
{
    public $idMarca;
    public $prueba_user;
    public $fecha;
    public $marca;
    

    function __construct($idMarca, $prueba_user, $fecha, $marca)
    {
        $this->idMarca = $idMarca;
        $this->prueba_user = $prueba_user;
        $this->fecha = $fecha;
        $this->marca = $marca;
    }
}

class prueba_user
{
    public $prueba_user;
    public $idPrueba;
    public $idUser;

    function __construct($prueba_user, $idPrueba, $idUser)
    {
        $this->idPrueba = $idPrueba;
        $this->idUser = $idUser;
        $this->prueba_user = $prueba_user;
        
    }
}

class pruebas_por_user
{
    public $prueba_user;
    public $idUser;
    public $idPrueba;
    PUBLIC $nomrePrueba;
    

    function __construct($prueba_user, $idUser, $idPrueba, $nombrePrueba)
    {
        $this->idPrueba = $idPrueba;
        $this->idUser = $idUser;
        $this->prueba_user = $prueba_user;
        $this->nombrePrueba = $nombrePrueba;
        
    }
}
