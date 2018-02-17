window.angularRef = angular;

angular.module('demoApp', ['ngMaterial'])
  .controller('AppCtrl', AppController)
  .service('numberService', NumberService);

   function AppController($scope, numberService) {
      $scope.number_service = numberService;
      window.number_service = numberService;
      $scope.openDialog = function($event) {
          var dialogsIframeParent = window.parent.document.getElementById("iframe2Container");
          var dialogsIframe = window.parent.document.getElementById("template2Iframe");
          dialogsIframeParent.style.zIndex = "100";
          dialogsIframe.contentWindow.showDialog();   
      }
   }


  function NumberService() {
    var ret = {
      num: 0,
      num_plus_plus: numPlusPlus
    };

    function numPlusPlus() {
      ret.num++;
    }

    return ret;
}