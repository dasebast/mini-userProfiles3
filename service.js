var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {


  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }).then(function(response) {
    	var result = response.data.data;
    	for (var i = 0; i < result.length; i++) {
    		result[i].first_name = 'Ralf';
    	}
    	deferred.resolve(result);
    }, function(err) {
    	deferred.reject(err.statusCode);
    });
    return deferred.promise;
  };
});