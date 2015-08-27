
(function(){
    'use strict';

    var productApp  = angular.module("productApp");

    productApp.controller("ProductController",['$http',ProductController]);

    function ProductController($http){
        var pvm=this;
        pvm.order = 'pname';
        
        $http.get('Data/productdata.json').success(function(pdata){
            pvm.product = pdata;

        });

    }

})();