(function() {
    function HomeCtrl(Room, $uibModal) {
        this.chatRooms = Room.all;
        
        this.openModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: function ($scope, $modalInstance) {
                    
                },
            });                
        };
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})(); 