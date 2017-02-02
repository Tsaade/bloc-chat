(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase('https://blistering-fire-7074.firebaseio.com')		
 		var rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        //var ref = firebase.database().ref().child("rooms");
        //var rooms = $firebaseArray(ref);

        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();