(function() {
    function HomeCtrl(Room) {
        this.chatRooms = Room;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();