angular.module('starter.controllers', [])

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
	$scope.progress = 0;

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

.controller('ProgCtrl',function($scope) {
	$scope.progress = 0;
	$scope.check = false;
	$scope.check2 = false;
	$scope.check3 = false;


	$scope.UpdateProgress = function(){
		if($scope.check){
			$scope.progress = ($scope.progress + 25);
		}
		else if($scope.check&&$scope.check2){
			$scope.progress = ($scope.progress + 25);
		}
		else if($scope.check&&$scope.check2&&$scope.check3){
			$scope.progress = ($scope.progress + 25);
		}
		else{
			$scope.progress = ($scope.progress + 25);
		}
	};
})

.controller('TabCtrl',function($scope) {
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