angular.module('starter.controllers', [])

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
	$scope.showAlert = function(){
		var alertPopup = $ionicPopup.alert({
			title: 'Great job so far!',
			template: 'Your progress has been saved...'
		});
		alertPopup.then(function(res){
			console.log('Thank you for not eating my delicious ice cream cone');
		});
	};
})

.controller('TabCtrl',function($scope, $ionicPopup, $timeout) {
	$scope.activeButton = 'gen';

	$scope.showGen = function(){
		this.activeButton = 'gen';
	}

	$scope.showProcs = function(){
		this.activeButton = 'proc';
	}

	$scope.showReqs = function(){
		this.activeButton = 'req';
	};
})

.controller('AppCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	};
})

.controller('NotesCtrl', function($scope, Notes) {
	$scope.notes = Notes.all();
	$scope.remove = function(note) {
		Notes.remove(note);
	};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});