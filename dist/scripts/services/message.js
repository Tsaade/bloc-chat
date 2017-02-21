(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child('messages');
        var allMessages = $firebaseArray(ref);
        
        return {
            getByRoomId: function(roomId) {
                return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            },
            
            send: function(message, roomId) {
                var msg = { 
                    content: message,
                    roomId: roomId,
                    sentAt: (new Date()).toLocaleString(),
                    username: $cookies.get('blocChatCurrentUser')
                }
                allMessages.$add(msg);
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();