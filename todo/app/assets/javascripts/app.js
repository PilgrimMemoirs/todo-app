angular.module('myTodos', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}])
.factory('todos', [function(){
	var o = {
		todos: [
	{title: "todo 1", priority: 2},
	{title: "todo 2", priority: 1},
	{title: "todo 3", priority: 6},
	{title: "todo 4", priority: 5},
	{title: "todo 5", priority: 1}
]
	};
	return o;
}])
.controller('MainCtrl', [
'$scope',
'todos',
function($scope, todos){
  $scope.todos = todos.todos;
	$scope.addTodo = function(){
		if(!$scope.title || $scope.title === '') { return; }
		$scope.todos.push({
			title: $scope.title, 
			link: $scope.link,
			priority: 0,
			comments: [
				{due: "March 1", body: "Do this", priority: 1},
				{due: "April 1", body: "Do this Again", priority: 2},
				{due: "May 1", body: "Do More of this", priority: 10}
				]
		});
		$scope.title = '';
		$scope.link = '';
	}

	$scope.incrementPriority = function(todo) {
		todo.priority += 1;
	}
}])
.controller('TodosCtrl', [
'$scope',
'$stateParams',
'todos',
function($scope, $stateParams, todos){
	$scope.todo = todos.todos[$stateParams.id];
	$scope.addComment = function(){
		if($scope.body === ''){ return; }
		$scope.todo.comments.push({
			body: $scope.body,
			due:  $scope.due,
			priority: 0
		});
		$scope.body = '';
	};
}]);
