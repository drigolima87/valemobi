<?php
// Including database connections
require_once 'database_connections.php';
// Fetching and decoding the inserted data
$data = json_decode(file_get_contents("php://input"));
// Escaping special characters from submitting data & storing in new variables.
$nome = mysqli_real_escape_string($con, $data->nome);
$tipo_mercadoria = mysqli_real_escape_string($con, $data->tipo_mercadoria);
$quantidade = mysqli_real_escape_string($con, $data->quantidade);
$preco = mysqli_real_escape_string($con, $data->preco);
$tipo_negocio = mysqli_real_escape_string($con, $data->tipo_negocio);

// mysqli insert query
$query = "INSERT into mercadoria (nome,tipo_mercadoria,quantidade,preco, tipo_negocio) VALUES ('$nome','$tipo_mercadoria','$quantidade','$preco', '$tipo_negocio')";
// Inserting data into database
mysqli_query($con, $query);
echo true;
?>