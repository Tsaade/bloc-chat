(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        
        return {
            getByRoomId: function(roomId) {
                // Filter the messages by their room ID.
                return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();