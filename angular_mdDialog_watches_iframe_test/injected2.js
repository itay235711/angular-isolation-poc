angular
   .module('demoApp', ['ngMaterial'])
   .controller('DialogsService', DialogsService);

  function DialogsService($scope, $mdDialog) {
    var alert;
    $scope.showAlert = showAlert;
    $scope.showDialog = window.showDialog = showDialog;
    $scope.items = [1, 2, 3];

    // $scope.num_service = window.parent.document.getElementById("template1Iframe").contentWindow.number_service;    

    // Internal method
    function showAlert() {
      alert = $mdDialog.alert({
        title: 'Attention',
        textContent: 'This is an example of how easy dialogs can be!',
        ok: 'Close'
      });

      $mdDialog
        .show( alert )
        .finally(function() {
          alert = undefined;
        });
    }

    function showDialog($event) {
      // $(window.parent.document.getElementById("iframe2Container")).draggable({iframeFix: true});
      // window.document.body.style.backgroundColor = "blue";
      // return;
       // var parentEl = angular.element(document.body);
       var dialogsContainer = window.parent.document.getElementById("iframe2Container");
       var parentEl = angular.element(dialogsContainer);
       $mdDialog.show({
         // parent: parentEl,
         targetEvent: $event,
         template:
           '<md-dialog class="fullscreen-dialog" aria-label="List dialog" style="background-color:87cefa;">' +
           '  <md-dialog-content>' +
           '  $scope.num = {{copyedNum}}' +
           '    <md-list>' +
           '      <md-list-item ng-repeat="item in items">' +
           '       <p>Number {{item}}</p>' +
           '      ' +
           '    </md-list-item></md-list>' +
           '  </md-dialog-content>' +
           '<md-input-container>' +
           '  <md-select ng-model="someModel" placeholder="">' +
           '    <md-option ng-value="1">1</md-option>' +
           '    <md-option ng-value="2">2</md-option>' +
           '  </md-select>' +           
           '</md-input-container>' +

            '<md-menu>' +
           '<md-button ng-click="$mdMenu.open($event)" class="md-primary" aria-label="Open sample menu">' +
             'aaaa</md-icon>' +
           '</md-button>' +
           '<md-menu-content>' +
             '<md-menu-item><md-button ng-click="doSomething()">Button in menu</md-button></md-menu-item>' +
           '</md-menu-content>' +
          '</md-menu>' +

           '  <md-dialog-actions>' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Close Dialog' +
           '    </md-button>' +
           '  </md-dialog-actions>' +
           '</md-dialog>',
         locals: {
           items: $scope.items,
         },
         controller: DialogController
      });

      function DialogController($scope, $mdDialog, items) {
        $scope.items = items;
        
        $scope.closeDialog = function() {
          $mdDialog.hide();
          var dialogsIframeContainer = window.parent.document.getElementById("iframe2Container");
          dialogsIframeContainer.style.zIndex = "-1";
        }      

        // watch 'num' changes
        var firstIframeWindow = window.parent.document.getElementById("template1Iframe").contentWindow;
        var iframe1RootScope = firstIframeWindow.angularRef.element(firstIframeWindow.document.getElementById("demoAppContainer")).scope();
        $scope.copyedNum = firstIframeWindow.number_service.num;
        
        iframe1RootScope.$watch(
          function valueFunc() {
              return firstIframeWindow.number_service.num;
          },
          function listenerFunc() {
            $scope.$apply(function() {
              $scope.copyedNum = firstIframeWindow.number_service.num;
            });
          },
          false);
      }
    }
  }

// debugger;
// window.DialogsService = angular.injector(['demoApp']).get("DialogsService");
