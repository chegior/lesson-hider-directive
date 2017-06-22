angular.module('directivePractice').controller('lessonCtrl',function($scope){
  $scope.arrLessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
  $scope.test = 'Schedule vs Lessons';
  $scope.announceDay = function(lesson,day){
    alert(lesson+' is active on '+day+'.')
  }

});
