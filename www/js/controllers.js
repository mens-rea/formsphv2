angular.module('starter.controllers', ['ngCordova'])

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

.controller("ExampleController", function($scope, $cordovaSQLite) {
 
    $scope.insert = function(firstname, lastname) {
        var query = "INSERT INTO people (firstname, lastname) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname]).then(function(res) {
            console.log("INSERT ID -> " + res.insertId);
        }, function (err) {
            console.error(err);
        });
        console.log("hello");
    }
 
    $scope.select = function(lastname) {
        var query = "SELECT firstname, lastname FROM people WHERE lastname = ?";
        $cordovaSQLite.execute(db, query, [lastname]).then(function(res) {
            if(res.rows.length > 0) {
                console.log("SELECTED -> " + res.rows.item(0).firstname + " " + res.rows.item(0).lastname);
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }
 
})

.controller('ProgCtrl',function($scope, Docs) {
	$scope.progress = 0;
	$scope.proc = 1;
	$scope.checkproc = 0;
	$scope.prog = 0;

	$scope.chats = Docs.all();

	$scope.Clean = function(){
		if($scope.progress<10){
			$scope.progress = 0;
		}
	}

	$scope.UpdateToggle = function(val){
		if (val==1){
			if($scope.check){
				$scope.check = false;
				$scope.progress = Math.ceil(($scope.progress - $scope.prog));
				$scope.Clean();
			}
			else{
				$scope.check = true;
				$scope.progress = Math.floor(($scope.progress + $scope.prog));
				alert($scope.progress);
			}
		}
		else if (val==2){
			if($scope.check2){
				$scope.check2 = false;
				$scope.progress = Math.ceil(($scope.progress - $scope.prog));
				$scope.Clean();
			}
			else{
				$scope.check2 = true;
				$scope.progress = Math.floor(($scope.progress + $scope.prog));
			}
		}
		else if (val==3){
			if($scope.check3){
				$scope.check3 = false;
				$scope.progress = Math.ceil(($scope.progress - $scope.prog));
				$scope.Clean();
			}
			else{
				$scope.check3 = true;
				$scope.progress = Math.ceil(($scope.progress + $scope.prog));
			}
		}
	}

	$scope.saveData = function() {
		window.localStorage.setItem("prog", JSON.stringify($scope.chats));
		/*var json = {"test": "hello world"}
		$scope.writeFile(cordova.file.dataDirectory, "hello.json", JSON.stringify(json), true)
		  .then(function (success) {
		    // success
		    alert("success");
		}, function (error) {
		    // error
		    console.log(error); //error mappings are listed in the documentation
		});*/
	}

	$scope.saveSpecData = function(name) {
		alert($scope.progress);
		for (var i = 0; i < $scope.chats.length; i++) {
	        if  ($scope.chats[i].name === name) {
	            $scope.chats[i] = {name : name, proc : $scope.proc, tprog : parseInt($scope.progress)};
	        }
	    }
		window.localStorage.setItem("prog", JSON.stringify($scope.chats));
	}

	$scope.updateData = function(){
		/*$scope.chats.push({name : 'Mhariell Mosqueriola', lastText : 'Hii there!'});*/
		for (var i = 0; i < $scope.chats.length; i++) {
	        if  ($scope.chats[i].name === 'Mhariell Mosqueriola') {
	            $scope.chats[i] = {name : 'Boom Updated!', lastText : 'Rak!'};
	        }
	    }
	}

	$scope.loadData = function() {
		try
		{
		  	$scope.chats = JSON.parse(window.localStorage.getItem("prog"));
		}
		catch(e)
		{
		   	alert(e);
		}
		for (var i = 0; i < $scope.chats.length; i++) {
	        console.log($scope.chats[i].name);
	        console.log($scope.chats[i].lastText);
	        alert($scope.chats[i].name);
	    }
		/*$scope.progress = parseInt(window.localStorage.getItem("prog"));
		$scope.check3 = true;*/
	}

	$scope.loadSpecData = function(name) {
		try
		{
		  	$scope.chats = JSON.parse(window.localStorage.getItem("prog"));
		}
		catch(e)
		{
		   	alert(e);
		}
		for (var i = 0; i < $scope.chats.length; i++) {
	    	if  ($scope.chats[i].name === name) {
	            $scope.progress = $scope.chats[i].tprog;
	            $scope.proc = $scope.chats[i].proc;
	        }
	        console.log($scope.chats[i].name);
	        console.log($scope.chats[i].lastText);
	    }

	    $scope.prog = (100 / $scope.proc);
	    alert($scope.proc);

	    $scope.checkproc = ($scope.progress / $scope.prog);
	    alert($scope.checkproc);

	    for (var x = 0; x < $scope.checkproc; x++) {
	    	if (x==0){
	    		$scope.check = true;
	    	}
	    	if (x==1){
	    		$scope.check2 = true;
	    	}
	    	if (x==2){
	    		$scope.check3 = true;
	    	}
	    }
		/*$scope.progress = parseInt(window.localStorage.getItem("prog"));
		$scope.check3 = true;*/
	}
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

	// exposing Chats services to template
	$scope.Chats = Chats

	$scope.remove = function(chat) {
		Chats.remove(chat);
	}
	// this is how you add data to your services
	$scope.add = function(){
		$scope.chats.push({name : 'a new chat', lastText : 'Hey there!'});
	}

	$scope.update = function(){
		alert("hello");
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