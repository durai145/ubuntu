define([],
function()
{

	return [ '$scope' , 'toaster','loginService','$state',function($scope,toaster,loginService,$state){

		$scope.login=function()
		{
			alert("login control");
		}

		$scope.uss_submit=function()
    	{


    			loginService.tokenSSO({     "grantType"     : "password" 
    			/*loginService.authorizeSSO({     "grantType"     : "password" */
    									,'clientId'    :'CLIENTSP'
    									,'scope'       : 'GSA'
    									,'username'    : $scope.email
    									,'password'    : $scope.password
    									,'redirectURI' : 'http://localhost:5000/'

    									},function  (resp) {
    			// body...
    			//console.log($state);
    			$state.go('dashboard');


    			console.log(resp);
    			toaster.pop('success','this', JSON.stringify(resp));

    			//alert('resp');
    		});

    		//alert("I am in uss_submit");
    	};
    	$scope.uss_auth=function()
    	{
    			loginService.authorizeSSO({     "grantType"     : "password"
    			/*loginService.authorizeSSO({     "grantType"     : "password" */
    									,'clientId'    :'CLIENTSP'
    									,'scope'       : 'GSA'
    									,'username'    : 'durai145@live.in'
    									,'password'    : '1qaz2wsx'
    									,'redirectURI' : 'http://localhost:5000/'

    									},function  (resp) {
    			// body...
    			console.log(resp);
    			toaster.pop('success','this', JSON.stringify(resp));
    			//alert('resp');
    		});

    		//alert("I am in uss_submit");
    	};
	}];
	
});

/*[

 toasterService.pop('success', "title", "text");
      var url = "/authorize"; 
      var config =  { 
          headers: {
            "x-access-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJIZWFlcmllIEdTTCIsImF1ZCI6Ind3dy5teXJvb21leHBlbnNlLmNvbSIsImlhdCI6IjYwbXMifQ.G37Yj8ljUjbOf-kSyc4j3-YAlbseb1KET9CMBgbJfaE"
           ,'Authorization': 'Basic dGVzdDp0ZXN0'
            ,      'Content-Type': 'application/x-www-form-urlencoded'
            ,'Access-Control-Allow-Origin': false

            
        }
      };
      var dataJson = 
      {
        "email" : "durai145@live.in"
        ,"password" : "1qaz2wsx"
        ,"grantType": "password"
            ,"clientId" : "CLIENTSP"
            ,"scope" : "GSA"
            ,"redirectURI" :"http://localhost:5000"
      };

    /*
    $.post(url , dataJson , function (resp,status,xhr){

        alert("resp" + status);

    },dataType);


  $http.post(url,dataJson,config).then(function (response) 
    { 
     // alert("resp");
      console.log(response);
      alert(JSON.stringify(response));
    },function(data){

      if(data.status == 302)
      {

        alert("Invalid request");
      }
     });
    };

]*/