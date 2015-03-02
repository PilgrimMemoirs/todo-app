angular.module('myTodos', [])
.factory('todos', [function(){
	var o = {
		todos: []
	};
	return o;
}])
.controller('MainCtrl', [
'$scope',
'todos',
function($scope, todos){
  $scope.test = 'Hello world!';
  $scope.todos = todos.todos;
//   $scope.todos = [
// 	{title: "todo 1", priority: 2},
// 	{title: "todo 2", priority: 1},
// 	{title: "todo 3", priority: 6},
// 	{title: "todo 4", priority: 5},
// 	{title: "todo 5", priority: 1}
// ];
	$scope.addTodo = function(){
		if(!$scope.title || $scope.title === '') { return; }
		$scope.todos.push({
			title: $scope.title, 
			link: $scope.link,
			priority: 0
		});
		$scope.title = '';
		$scope.link = '';
	}

	$scope.incrementPriority = function(todo) {
		todo.priority += 1;
	}
}]);