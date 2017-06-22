angular.module('directivePractice').directive('lessonHider',function(){

  return{
    templateUrl: '../lessonHider.html',
    restrict: 'E',
    scope:{
      lesson:'='
    },
    link: function(scope,element, attr){
      // console.log('SCOPE: ' + scope);
      // console.log('ELEMENT: '+element);
      // console.log('ATTRIBUTE: ' + attr);
    }
  }

})
