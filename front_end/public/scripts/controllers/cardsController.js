angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController)
  .controller('CardShowController', CardShowController)
  .controller('CardPostController', CardPostController)
  .config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/api', {
      templateUrl: "/templates/card_index.html",
      controller: "CardsController"
    })
    .when('/api/:id', {
      templateUrl: "/templates/card_show.html",
      controller: "CardShowController"
    });
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  });
  CardsController.$inject = ["$http","$scope"];
  CardShowController.$inject = ["$http","$routeParams","$scope"];
  CardPostController.$inject = ["$http","$scope"];


function CardsController($http,$scope){

  var self=this;
  self.getCards = getCards;
  $scope.getCards = getCards;

  function getCards() {
    $http.get('/api')
      .then(function(response) {
        $scope.questionsList=response.data.cards;
      });
  }
  getCards();
}

function CardShowController($http,$routeParams,$scope) {
  console.log('got into cardshow');
  function getOneCard(id) {
    //$http.get('https://shielded-forest-41789.herokuapp.com/api/flashcards/'+id)
    $http.get('/api/'+id)
      .then(function(response) {
        console.log(response.data);
        $scope.showCard = response.data.card;
      });
  }
  getOneCard($routeParams.id);
}

function CardPostController($http,$scope) {
  $scope.newCard={answerHidden:true};
  var postCtrl=this;
  postCtrl.postCard = postCard;
  function postCard() {
    console.log('in the card post controller');
    $http.post('/api',$scope.newCard)
      .then(function(response) {
        window.location.assign('/');
      });
  }
}