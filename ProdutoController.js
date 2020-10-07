App.controller('ProdutoController',["$scope",function($scope){

    $scope.produto={};

    $scope.listaProduto=[];

    $scope.adicionarProduto=function(produto){

        $scope.listaProduto.push(produto);
        $scope.produto={};

    };

    $scope.removerListaProduto=function(indice){

        $scope.listaProduto.splice(indice,1);
        


    }

}])