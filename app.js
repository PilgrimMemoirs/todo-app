angular.module('myTodos', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
  $scope.todos = [
	{title: "todo 1", priority: 2},
	{title: "todo 2", priority: 1},
	{title: "todo 3", priority: 6},
	{title: "todo 4", priority: 5},
	{title: "todo 5", priority: 1}
];
}]);