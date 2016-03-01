@media only screen and (min-width: 769px) {/*Desktop*/
  #page_welcome {
    background: url('../images/welcome_desktop.jpg') no-repeat center center;
    background-size: cover;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {/*Tablet*/
  #page_welcome {
    background: url('../images/welcome_tablet.jpg') no-repeat center;
    background-size: cover;
  }
}

@media only screen and (max-width: 480px) {/*mobile*/
  #page_welcome {
    background: url('../images/welcome_mobile.jpg') no-repeat center;
    background-size: cover;
  }
}


  // setup an abstract state for the tabs directive
  // .state('tab', {
  //   url: '/tab',
  //   abstract: true,
  //   templateUrl: 'templates/tabs.html'
  // })


  

      /* call server with id as data 
         to get event details */
         //$scope.$apply(function(){

               // myHttpService.getEventDetails($scope.vars.eventId)
              // .then(function(res){
              //   //$rootScope.currentEvent = res.data;
              //   if(localStorageService.isSupported) {
              //     localStorageService.set('searchedEvent', res);
              //     $location.path("/participateEvent");
              //   }
              // }, function(err){
              //   console.dir(err)
              //   if(!!err.data){
              //     alert('Error: ' + err.data.description);
              //   }else{
              //     alert('Error: ' , err);
              //   }
              // })
          // myHttpService.getEventDetails($scope.vars.eventId)
          // .success(function(res) {
          //   console.log(res)
          //   if(localStorageService.isSupported) {
          //     localStorageService.set('currentEvent', res.data);
          //     $location.path("/participateEvent");
          //   }else{
          //     alert('Sorry, localStorageService is not Supported')
          //   }
          // })
          // .error(function(err){
          //   alert(err);
          // });

         //});