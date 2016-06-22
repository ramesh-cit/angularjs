(function() {

var app = angular.module('root', []);
app.controller("index", ["$scope", function ($scope) {
        $scope.message = "Welcome to Angular JS!";
    }]);
 
app.controller('StoreController', function() {
	this.products=gems;	
});

 app.controller('TabController', function() {
    this.tab = 1;
    this.setTab = function(selTab) {
	  	this.tab  = selTab;
   	};

  	this.isSet = function(selTab) {
	  	return this.tab == selTab;
	  };
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
   });
var gems = [ {
	name: "Diamond",
	price :9278.67,
	shine : 100.9,
	description : "Kohinoor Diamond",
	canPurchase : true,
	soldOut: false,
	 images: [
      "images/gem01.png",
      "images/gem02.png",
      "images/gem03.png"
    ],
     reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
},
{
name: "Pearl",
	price :3678.67,
	description : "Tuticorin Pearl",
	canPurchase : true,
	soldOut: false,
	shine : 10,
	 images: [
	  "images/pearl01.jpg"
	 ],
	 reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
},
{
name: "Gold",
	price :1678.67,
	description : "Gold Jewelary",
	canPurchase : true,
	soldOut: false,
	shine: 50,
	 images: [
	  "images/gold01.jpg"
	 ],
	  reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
},
{
	name: "Silver",
	price :88.67,
	description : "Silver Coin",
	canPurchase : true,
	soldOut: false,
	shine : 60,
	 images: [
	  "images/silver01.jpg"
	 ],
	   reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
}

]

})(); 

