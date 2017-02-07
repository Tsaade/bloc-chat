(function() {
    function Room($firebaseArray) {
        var database = new Firebase('https://bloc-chat-bf55d.firebaseio.com')		
        var rooms = $firebaseArray(database.child('rooms'));

        var roomRef = {getRooms: getRooms, addRoom: addRoom};
        
        
        function addRoom(value) {
            console.log(value);
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