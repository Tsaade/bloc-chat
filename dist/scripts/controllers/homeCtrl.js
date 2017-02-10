(function() {
    function HomeCtrl(Room, Message, $uibModal, $scope) {        
        this.chatRooms = Room.getRooms().all;
        var that = this;
        
        this.selectRoom = function(room) {
            this.selectedRoom = room;
            this.messages = Message.getByRoomId(room.$id);
//                .$loaded()
//                .then(function(val) {
//                    debugger;
//                });
        };
        
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
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$scope', HomeCtrl]);
})();