define([],function(){

return ['$resource',function  ($resource) {
	// body...
	return $resource('/basicDet/:action', null,
    {
         save    : { method:'POST', params:{"action" : "auth"}      }
        ,edit    : { method:'POST', params:{"action" : "authorize"} }
        ,view     : { method:'POST', params:{"action" : "token"}     }
    });
	
}
];

});