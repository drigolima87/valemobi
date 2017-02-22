angular.module('ValeMobi').
    component('cadastrarMercadoria', {
        template: 
        '<div>' 
        + '<p><h1>Cadastrar Mercadoria</h1></p>'
        + '<div><label>Nome: <input ng-model="string">{{mercadoria.nomeMercadoria}}</input></label></div><br/>'
        + '<div><label>Quantidade: <input ng-model="string" type="number">{{mercadoria.quantidadeMercadoria}}</input></label></div><br/>'
        + '<div><label>Tipo: '
        + '<select ng-model="selected"><option value="1">Compra</option><option value="2">Venda</option></select></label></div><br/>'
        + '<div><label>Preço: <input type="number" ng-model="string">{{mercadoria.precoMercadoria}}</input></label></div><br/>'
        + '<div><label>Tipo Negocio: <input type="radio" ng-model="mercadoria.tipoNegocio" value="1">Compra</input>'
        + '<input type="radio" ng-model="mercadoria.tipoNegocio" value="2">Venda</input></div><br/>'
        + '<br/><div><input type="button">OK</input></div>',
        controller: function CadastrarMercadoriaController(){
            
        }
        
    })
    