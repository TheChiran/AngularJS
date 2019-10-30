mainApp.controller("teacherController", function($scope) {
    $scope.teacher = {
       firstName: "",
       lastName: "",
       fullName: function() {
          var teacherObject;
          teacherObject = $scope.teacher;
          return teacherObject.firstName + " " + teacherObject.lastName;
       }
    };
 });
