angular.module('ValeMobi', []).controller('UsuarioController', function(){
       
        var Usuario = {
            
            login: '',
            senha: '',
            nome: '',
            mercadoriasCompradas: [],
            mercadoriasVendidas: []
        };
        
        Usuario.autenticar = function(login, pass){
            if (login){
                this.Usuario.login = login;
                this.Usuario.senha = pass;
                this.Usuario.nome = login;
                return true;
            }
        };
        
        Usuario.comprarMercadoria = function(mercadoria){
            Usuario.mercadoriasCompradas.push(mercadoria);
        };
        
        Usuario.colocarMercadoriaVenda = function(mercadoria){
            Usuario.mercadoriasVendidas.push(mercadoria);
        };
        
        Usuario.retirarMercadoriaVenda = function(codigoMercadoria){
            for(var i = 0; i < Usuario.mercadoriasVendidas.length; i++){
                var m = Usuario.mercadoriasVendidas[i]
                if (m.codigoMercadoria == codigoMercadoria){
                    Usuario.mercadoriasVendidas.slice(i,1);
                    break;
                }
            }
        }
        

        
        Usuario.listarMercadoriasVendidas = function(){
            return Usuario.mercadoriasVendidas;
        }
        
        Usuario.listaMercadoriasCompradas = function(){
            return Usuario.listaMercadoriasCompradas;
        }
})