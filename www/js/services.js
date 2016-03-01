angular.module('boost.services', [])

// .factory('myHttpService', function($http, $q) {
// 	var request = {
// 		preffix : 'http://',
// 		herokuAppLink : 'autophoto-server.herokuapp.com',
// 		serverIp : '192.168.1.104',
// 		delimiter : ':',
// 		port : '3000',
// 		headers : {'Content-Type' : 'application/json'}
// 	}
// 	var debug = false;

// 	function getPrefixUrl(){
// 		if (debug)  return request.preffix + request.serverIp + request.delimiter + request.port;
// 		else 		return request.preffix + request.herokuAppLink;
// 	}

// 	return {
//     	paticipateUserToGroup : function (eventId, userId) {
// 	    	var defer = $q.defer();

// 			var url = getPrefixUrl();
// 			url += '/paticipateUserToGroup';

// 			var data = {
// 			   	eventId : eventId,
// 			   	userId : userId
// 			}
// 			$http.post(url, data).then(function(res){
// 				if (!!res.data && res.data.success>0){
// 	        		defer.resolve(res.data.data);
// 	        	}else{
// 	        		defer.reject(res);
// 	        	}
// 	        }, function(err){
// 	        	defer.reject(err);
// 	        });
// 	        return defer.promise;
// 	    }
// 	}
// });