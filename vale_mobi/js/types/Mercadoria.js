    angular.module('ValeMobi', []).controller('MercadoriaController', function(){ 
    //Código da Mercadoria, Tipo da Mercadoria, Nome da Mercadoria, Quantidade, Preço, Tipo do Negócio
    var Mercadoria = {
        codigoMercadoria:0,
        tipoMercadoria:0,
        nomeMercadoria:"",
        quantidadeMercadoria:0,
        precoMercadoria:0.0,
        tipoNegocio:""
    };
    Mercadoria.atualizarMercadoria = function(mercadoria){
        Mercadoria.nomeMercadoria = mercadoria.nomeMercadoria;
        Mercadoria.quantidadeMercadoria = mercadoria.quantidadeMercadoria;
        Mercadoria.tipoMercadoria = mercadoria.tipoMercadoria;
        Mercadoria.precoMercadoria = mercadoria.precoMercadoria;
        Mercadoria.tipoNegocio = mercadoria.tipoNegocio;
    }
    
})

    
    
    
    
    

