(function() {
    function Room($firebaseArray) {
        var database = firebase.database().ref().child("rooms");		
        var rooms = $firebaseArray(database);

        var roomRef = {getRooms: getRooms, addRoom: addRoom};
        
        
        function addRoom(value) {
            rooms.$add(value);
        }
        
        function getRooms() {
            return {
                all: rooms
            };
        }
        
        return roomRef;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();