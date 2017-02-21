(function() {
    function HomeCtrl(Room, Message, $uibModal, $scope) {        
        this.chatRooms = Room.getRooms().all;
        
        this.selectRoom = function(room) {
            this.selectedRoom = room;
            this.messages = Message.getByRoomId(room.$id);
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
        
        this.sendMessage = function(msg) {
            if ( this.selectedRoom == null ) return;
            
            Message.send(msg, this.selectedRoom.$id);
            this.message = "";
        };
	};
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$scope', HomeCtrl]);
})();