// Application module
var crudApp = angular.module('ValeMobi',[]);
crudApp.controller("DbController",['$scope','$http', function($scope,$http){

// Function to get employee details from the database
getInfo();
function getInfo(){
// Sending request to EmpDetails.php files
$http.post('DataBaseFiles/empDetails.php').then(function(data){
// Stored the returned data into scope
$scope.details = data;
//alert($scope.details);
}, function(error){});
};

$scope.insertInfo = function(info){
$http.post('DataBaseFiles/insertDetails.php',{"nome":info.nome,"tipo_mercadoria":info.tipo_mercadoria,"quantidade":info.quantidade,"preco":info.preco, "tipo_negocio": info.tipo_negocio}).then(function(data){
if (data == true) {
getInfo();
// Hide details insertion form
$('#empForm').css('display', 'none');
}
}, function(error){});
};

$scope.currentMercadoria = {};
$scope.editInfo = function(info){
$scope.currentMercadoria = info;
$('#mercadoriaForm').slideUp();
$('#editForm').slideToggle();
};

$scope.UpdateInfo = function(info){
$http.post('DataBaseFiles/updateDetail.php',{"id":info.id,"nome":info.nome,"tipo_mercadoria":info.tipo_mercadoria,"quantidade":info.quantidade,"preco":info.preco, "tipo_negocio": info.tipo_negocio}).then(function(data){
$scope.show_form = true;
if (data == true) {
getInfo();
}
}, function(){});
};

$scope.deleteInfo = function(info){
$http.post('DataBaseFiles/deleteDetails.php',{"del_id":info.id}).then(function(data){
if (data == true) {
getInfo();
}
}, function(){});
};

}]);

