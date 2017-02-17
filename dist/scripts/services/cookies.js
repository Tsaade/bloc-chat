(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            // Do something to allow users to set their username
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/username_modal.html',
                controller: function ($scope, $uibModalInstance) {
				    $scope.newUsername = ''; 
                    $scope.create = function() {
                        $uibModalInstance.close($scope.newUsername);
                    };
				},
				size: 'sm',
            });
			
            modalInstance.result.then(function(data) {
				$cookies.put('blocChatCurrentUser', data);
            });
        }
    }

    angular
      .module('blocChat')
      .run(['$cookies', '$uibModal', BlocChatCookies]);
})();