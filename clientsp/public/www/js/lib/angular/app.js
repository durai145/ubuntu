/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([

    './controllers/index'
    ,'./services/index'
   /* ,'./directives/index'
      ,'./filters/index'
      
    */
], function (controllers,services) {
    'use strict';


console.log(angular);

    var webApp= angular.module('app', [
         'controllers'
        ,'ngRoute'
        ,'toaster'
        ,'services'
        ,'ui.router'
        ,'ngAnimate'
        /*,'app.directives'
        ,'app.filters'
        ,'app.services'
        */
    ]);

     webApp.config(['$routeProvider', '$locationProvider', '$httpProvider' ,'$stateProvider','$urlRouterProvider'
          ,function  ($routeProvider,$locationProvider,$httpProvider,$stateProvider,$urlRouterProvider) {
        // body...

        console.log('$stateProvider');
        console.log($stateProvider);
        console.log($urlRouterProvider);


          $stateProvider.state('login', 
        {
            url         : '/www/'
           ,views:{

             'pageMainContext' :
              {                
               
                templateUrl : 'js/lib/views/loginView.html'
               // templateUrl : 'view/loginView.html'
              }
            }
        });

          $stateProvider.state('dashboard', 
        {
            url         : '/dashboard/'
           ,views:{

             'pageMainContext' :
              {                
               
                templateUrl : 'js/lib/views/loginView.html'
               // templateUrl : 'view/loginView.html'
              }
            }
        });


    $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get('$state');

        $state.go('login', {
            title: "Page not found",
            message: 'Could not find a state associated with url "'+$location.$$url+'"'
        });
    });
        


      

 
    //$httpProvider.defaults.headers.post['XSRF-AUTH'] = "some accessToken to be generated later"; 

        console.log('httpProvider');
        console.log($httpProvider);
      // $httpProvider.defaults.headers.post['x-access-token'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIZWFlcmllIEdTTCIsImF1ZCI6Ind3dy5teXJvb21leHBlbnNlLmNvbSIsImlhdCI6IjYwbXMiLCJleHAiOjE0NDg2ODYwNTR9.-JiMA_sU22ZVbBSxuxTnyQY6khghSjGy7hdmNk11Ysk";
        $httpProvider.interceptors.push(['$q', '$injector','toaster','$window', 
                                function($q, $injector,toaster,$window){  
    var sessionRecoverer = {
        responseError: function(response) {
            // Session has expired

               console.log(response);
            if (response.status == 302){
                //var SessionService = $injector.get('SessionService');
                var $http = $injector.get('$http');
                var deferred = $q.defer();
                toaster.pop('error','this', 'this is alert 302');

                // Create a new session (recover the session)
                // We use login method that logs the user in using the current credentials and
                // returns a promise
                //SessionService.login().then(deferred.resolve, deferred.reject);

                // When the session recovered, make the same backend call again and chain the request
                return deferred.promise.then(function() {
                    return $http(response.config);
                });
            }
            else if(response.status == 404)
            {
                toaster.pop('error','404', 'Request services is not avaliable for You');
            }
            return $q.reject(response);
        }
        ,response: function(response) {
            var deferred = $q.defer();

              console.log('response');
              console.log(response);

            

              var respJSON=JSON.stringify(response);

              // alert("success["+ respJSON + "]" );
              
                //toaster.pop('success','200', 'Success response [' + response.headers('x-access-token') +"]");

                   var accessToken= response.headers('x-access-token');

                  // alert('accessToken:' + accessToken);
                   if (angular.isDefined(accessToken))
                   {
                      if( accessToken != null)
                      {
                        $window.sessionStorage.accessToken=accessToken;
                      }
                  }
                return response;

            }
            ,request: function(request) {
           
                   console.log('request');
              console.log(request);

                //toaster.pop('success','Request', 'Send response session [' +$window.sessionStorage.accessToken +"]");


               request.headers['x-access-token'] = $window.sessionStorage.accessToken || '';
          
            return request;
        }
    };
    return sessionRecoverer;
}]);




        }]);

/*


   */

/*


    webApp.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  alert('alert config');
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

*/


    return webApp;
});
