app.controller('studentController',function($scope,$http){
    var url="/data.txt";
    $http.get(url).then(function(student){
       $scope.students=student.data;
    })
 })