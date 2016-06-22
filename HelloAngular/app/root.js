(function() {

var app = angular.module('root', []);
app.controller("index", ["$scope", function ($scope) {
        $scope.message = "Welcome to Angular JS!";
    }]);
 
app.controller('StoreController', function() {
	this.product=gem;	
});

var gem = {
	name: "Diamond",
	price :1278.67,
	description : "Made in India"
}

})(); 

