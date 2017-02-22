<?php
// Including database connections
require_once 'database_connections.php';
// Fetching the updated data & storin in new variables
$data = json_decode(file_get_contents("php://input"));
// Escaping special characters from updated data

//"id":info.id,"nome":info.nome,"tipo_mercadoria":info.tipo_mercadoria,"quantidade":info.quantidade,"preco":info.preco, "tipo_negocio": info.tipo_negocio}

$id = mysqli_real_escape_string($con, $data->id);
$nome = mysqli_real_escape_string($con, $data->nome);
$tipo_mercadoria = mysqli_real_escape_string($con, $data->tipo_mercadoria);
$quantidade = mysqli_real_escape_string($con, $data->quantidade);
$preco = mysqli_real_escape_string($con, $data->preco);
$tipo_negocio = mysqli_real_escape_string($con, $data->tipo_negocio);
// mysqli query to insert the updated data
$query = "UPDATE mercadoria SET nome='$nome',tipo_mercadoria='$tipo_mercadoria',quantidade='$quantidade',preco='$preco', tipo_negocio='$tipo_negocio' WHERE id=$id";
mysqli_query($con, $query);
echo true;
?>