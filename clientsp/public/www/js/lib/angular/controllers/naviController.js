define([],
function()
{

	return [ '$scope' , 'toaster','basicDetService','$state',function($scope,toaster,basicDetService,$state){


$scope.entitlement=  [
  {
   'grpOrderId':1
  ,'groupId':1
  ,'grpName':'dashboard'
  ,'grpLink':'#/dashboard/'
  ,'dfltPage' :1
  ,'Pages': [ {
         'pageOrderId' : '1'
    ,'pageName' : 'DashBoard'
    ,'url' :''
    ,'link' :'#Dashboard'}
    ,
    {
         'pageId' : '1'
    ,'pageName' : 'Transaction Activity'
    ,'url' :''
    ,'link' :'#transAct'}
    
    ]
  } 
  ,{'grpOrderId':1
  ,'groupId':1
  ,'grpName':'basicDetUSSAdd'
  ,'grpLink':'#/basicDetUSSAdd/'
  ,'dfltPage' :1
  ,'Pages': [ {
         'pageOrderId' : '1'
    ,'pageName' : 'DashBoard'
    ,'url' :''
    ,'link' :'#Dashboard'}
    ,
    {
         'pageId' : '1'
    ,'pageName' : 'Transaction Activity'
    ,'url' :''
    ,'link' :'#transAct'}
    
    ]
  },{'grpOrderId':1
  ,'groupId':1
  ,'grpName':'SchemaGeneratorView'
  ,'grpLink':'#/SchemaGeneratorView/'
  ,'dfltPage' :1
  ,'Pages': [ {
         'pageOrderId' : '1'
    ,'pageName' : 'DashBoard'
    ,'url' :''
    ,'link' :'#Dashboard'}
    ,
    {
         'pageId' : '1'
    ,'pageName' : 'Transaction Activity'
    ,'url' :''
    ,'link' :'#transAct'}
    
    ]
  }

  ,{'grpOrderId':1
  ,'groupId':1
  ,'grpName':'SchemaGenerator'
  ,'grpLink':'#/SchemaGenerator/'
  ,'dfltPage' :1
  ,'Pages': [ {
         'pageOrderId' : '1'
    ,'pageName' : 'DashBoard'
    ,'url' :''
    ,'link' :'#Dashboard'}
    ,
    {
         'pageId' : '1'
    ,'pageName' : 'Transaction Activity'
    ,'url' :''
    ,'link' :'#transAct'}
    
    ]
  },{'grpOrderId':1
  ,'groupId':1
  ,'grpName':'KeyBoard'
  ,'grpLink':'#/KeyBoard/'
  ,'dfltPage' :1
  ,'Pages': [ {
         'pageOrderId' : '1'
    ,'pageName' : 'DashBoard'
    ,'url' :''
    ,'link' :'#Dashboard'}
    ,
    {
         'pageId' : '1'
    ,'pageName' : 'Transaction Activity'
    ,'url' :''
    ,'link' :'#transAct'}
    
    ]
  }
];

      // alert("basicDetService");
	
		

          //basicDetService.save()
    		

    		//alert("I am in uss_submit");
    
    
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