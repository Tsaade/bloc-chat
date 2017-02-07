(function() {
    function HomeCtrl(Room, $uibModal) {
        this.chatRooms = Room.getRooms().all;
        
        this.openModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: function ($scope, $uibModalInstance) {
					$scope.roomName = ''; 
					$scope.cancel = function() {
						$uibModalInstance.dismiss('cancel');
					};
		
					$scope.create = function() {
						$uibModalInstance.close($scope.roomName);
					};
				},
				size: 'sm',
			});
			
			modalInstance.result.then(function(data) {
				Room.addRoom(data);
			});
		};
	};
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope', HomeCtrl]);
})();