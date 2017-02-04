(function() {
    function Room($firebaseArray) {
        var database = new Firebase('https://bloc-chat-bf55d.firebaseio.com')		
        var rooms = $firebaseArray(database.child('rooms'));
        
        function addRoom(name) {
            database.$add(name);
        }
        
        return {
            all: rooms
        };

    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();