app.controller('teacherController',function($scope,$http){
    var url="/teachers.txt";
    $http.get(url).then(function(teacher){
       $scope.teachers=teacher.data;
    })
 })