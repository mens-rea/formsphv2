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

/*.controller("ExampleController", function($scope, $ionicPopup, $timeout, $cordovaSQLite) {
 
    $scope.insert = function(firstname, lastname, value) {

    	var alertPopup = $ionicPopup.alert({
					title: 'Great job so far!',
					template: 'Your progress has been saved...'
				});

        var query = "INSERT INTO people (firstname, lastname, value) VALUES (?,?)";
        $cordovaSQLite.execute(db, query, [firstname, lastname, value]).then(function(res) {
            console.log("INSERT ID -> " + res.insertId);
            alert('success!');
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
            
                var alertPopup = $ionicPopup.alert({
					title: 'Great job so far!',
					template: 'Your progress has been saved...' + res.rows.item(0).firstname
				});
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        });
    }

    $scope.showAlert = function(){
		var alertPopup = $ionicPopup.alert({
			title: 'Great job so far!',
			template: 'Your progress has been saved...'
		});
		alertPopup.then(function(res){
			console.log('Thank you for not eating my delicious ice cream cone');
		});
	};
 
})*/

.controller('ProgCtrl',function($scope, Docs, $ionicPopup, $timeout, $cordovaSQLite) {
	$scope.progress = 0;
	$scope.proc = 3;
	$scope.checkproc = 0;
	$scope.prog = 33;
	$scope.required = 0;
	$scope.chats = Docs.all();

	$scope.Clean = function(){
		if($scope.progress<10){
			$scope.progress = 0;
		}
	}

	$scope.insert = function(ided, prog) {

		var query = "UPDATE documents SET prog = ? WHERE id = ?";
        $cordovaSQLite.execute(db, query, [$scope.progress, ided]).then(function(res) {
        	alert("inserted!"+ided + " " + prog);	
        }, function (err) {
			alert("error");
        });

        var s_query = "SELECT * FROM documents";
    	$cordovaSQLite.execute(db, s_query).then(function(res) {
    		if(res.rows.length > 0) {
    			for(var i = 0; i < res.rows.length; i++){
    				/*alert("success!" + res.rows.item(0).docname + " " + res.rows.item(0).prog);*/
    			}

            } else {
                console.log("No results found");
            }
        }, function (err) {
           console.error(err.message);
        });
    }
 
    $scope.select = function(ided) {

        var query = "SELECT docname, prog, proc, checkreq FROM documents WHERE id = ?";
        $cordovaSQLite.execute(db, query, [ided]).then(function(res) {
            if(res.rows.length > 0) {
                console.log("SELECTED -> " + res.rows.item(0).prog + " " + res.rows.item(0).proc);
                alert("SELECTED -> " + res.rows.item(0).docname + " " + res.rows.item(0).proc  + " " + res.rows.item(0).req);

				$scope.progress = res.rows.item(0).prog;
				$scope.proc = res.rows.item(0).proc;
				$scope.required = res.rows.item(0).checkreq;
				$scope.prog = (100 / $scope.proc);
			    $scope.checkproc = Math.ceil($scope.progress / $scope.prog);
			    console.log("SELECTED -> " + res.rows.item(0).docname + " " + $scope.proc + " " + $scope.progress + " " + $scope.checkproc);
            	
			    for (var x = 0; x < $scope.checkproc; x++) {
			    	if (x==0){
			    		$scope.check = true;
			    	}
			    	else if (x==1){
			    		$scope.check2 = true;
			    	}
			    	else if (x==2){
			    		$scope.check3 = true;
			    	}
			    	else if (x==3){
			    		$scope.check4 = true;
			    	}
			    	else if (x==4){
			    		$scope.check5 = true;
			    	}
			    	else if (x==5){
			    		$scope.check6 = true;
			    	}
			    	else if (x==6){
			    		$scope.check7 = true;
			    	}
			    	else if (x==7){
			    		$scope.check8 = true;
			    	}
			    }

			    for (var y = 0; y < $scope.required; y++) {
			    	if (y==0){
			    		$scope.req = true;
			    	}
			    	else if (y==1){
			    		$scope.req2 = true;
			    	}
			    	else if (y==2){
			    		$scope.req3 = true;
			    	}
			    	else if (y==3){
			    		$scope.req4 = true;
			    	}
			    	else if (y==4){
			    		$scope.req5 = true;
			    	}
			    	else if (y==5){
			    		$scope.req6 = true;
			    	}
			    	else if (y==6){
			    		$scope.req7 = true;
			    	}
			    	else if (y==7){
			    		$scope.req8 = true;
			    	}
			    	else if (y==8){
			    		$scope.req9 = true;
			    	}
			    	else if (y==9){
			    		$scope.req10 = true;
			    	}
			    	else if (y==10){
			    		$scope.req11 = true;
			    	}
			    	else if (y==11){
			    		$scope.req12 = true;
			    	}
			    	else if (y==12){
			    		$scope.req13 = true;
			    	}
			    	else if (y==13){
			    		$scope.req14 = true;
			    	}
			    	else if (y==14){
			    		$scope.req15 = true;
			    	}
			    	else if (y==15){
			    		$scope.req16 = true;
			    	}
			    }

            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error("this is the error:" +err.message);
        });
    }

    $scope.showAlert = function(){
		var alertPopup = $ionicPopup.alert({
			title: 'Great job so far!',
			template: 'Your progress has been saved...'
		});
		alertPopup.then(function(res){
			console.log('Thank you for not eating my delicious ice cream cone');
		});
	};

	$scope.UpdateToggle = function(val, ided){
		if (val==1){
			if($scope.check){
				$scope.check = false;
				$scope.progress = Math.ceil(($scope.progress - $scope.prog));
				$scope.Clean();
			}
			else{
				$scope.check = true;
				$scope.progress = Math.floor(($scope.progress + $scope.prog));
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
		else if (val==4){
			if($scope.check4){
				$scope.check5 = false;
				$scope.progress = Math.ceil(($scope.progress - $scope.prog));
				$scope.Clean();
			}
			else{
				$scope.check4 = true;
				$scope.progress = Math.ceil(($scope.progress + $scope.prog));
			}
		}
		else if (val==5){
			if($scope.check5){
				$scope.check5 = false;
				$scope.progress = Math.ceil(($scope.progress - $scope.prog));
				$scope.Clean();
			}
			else{
				$scope.check5 = true;
				$scope.progress = Math.ceil(($scope.progress + $scope.prog));
			}
		}
		else if (val==6){
			if($scope.check6){
				$scope.check6 = false;
				$scope.progress = Math.ceil(($scope.progress - $scope.prog));
				$scope.Clean();
			}
			else{
				$scope.check6 = true;
				$scope.progress = Math.ceil(($scope.progress + $scope.prog));
			}
		}
		else if (val==7){
			if($scope.check7){
				$scope.check7 = false;
				$scope.progress = Math.ceil(($scope.progress - $scope.prog));
				$scope.Clean();
			}
			else{
				$scope.check7 = true;
				$scope.progress = Math.ceil(($scope.progress + $scope.prog));
			}
		}
		else if (val==8){
			if($scope.check8){
				$scope.check8 = false;
				$scope.progress = Math.ceil(($scope.progress - $scope.prog));
				$scope.Clean();
			}
			else{
				$scope.check8 = true;
				$scope.progress = Math.ceil(($scope.progress + $scope.prog));
			}
		}

		// update records
		var query = "UPDATE documents SET prog = ? WHERE id = ?";
        $cordovaSQLite.execute(db, query, [$scope.progress, ided]).then(function(res) {
        	/*alert("inserted!"+ided + " " + prog);*/	
        }, function (err) {
			alert("error");
        });

		/*alert("success");*/

        var s_query = "SELECT * FROM documents";
    	$cordovaSQLite.execute(db, s_query).then(function(res) {
    		if(res.rows.length > 0) {
    			for(var i = 0; i < res.rows.length; i++){
    				/*alert("success!" + res.rows.item(0).docname + " " + res.rows.item(0).prog);*/
    			}

            } else {
                console.log("No results found");
            }
        }, function (err) {
           console.error(err.message);
        });
	}

	$scope.UpdateBox = function(val, ided){
		if (val==1){
			if($scope.req){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.floor(($scope.required - 1));
			}
		}
		else if (val==2){
			if($scope.req2){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.floor(($scope.required - 1));
			}
		}
		else if (val==3){
			if($scope.req3){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==4){
			if($scope.req4){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==5){
			if($scope.req5){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==6){
			if($scope.req6){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==7){
			if($scope.req7){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==8){
			if($scope.req8){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==9){
			if($scope.req9){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==10){
			if($scope.req10){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==11){
			if($scope.req11){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==12){
			if($scope.req12){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==13){
			if($scope.req13){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==14){
			if($scope.req14){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==15){
			if($scope.req15){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}
		else if (val==16){
			if($scope.req16){
				$scope.required = Math.ceil(($scope.required + 1));
				$scope.Clean();
			}
			else{
				$scope.required = Math.ceil(($scope.required - 1));
			}
		}

		// update records
		var query = "UPDATE documents SET checkreq = ? WHERE id = ?";
        $cordovaSQLite.execute(db, query, [$scope.required, ided]).then(function(res) {
        	/*alert("inserted!"+ided + " " + prog);*/	
        }, function (err) {
			alert("error");
        });

		/*alert("success");*/

        var s_query = "SELECT * FROM documents";
    	$cordovaSQLite.execute(db, s_query).then(function(res) {
    		if(res.rows.length > 0) {
    			for(var i = 0; i < res.rows.length; i++){
    				/*alert("success!" + res.rows.item(i).docname + " " + res.rows.item(i).checkreq);*/
    			}

            } else {
                console.log("No results found");
            }
        }, function (err) {
           console.error(err.message);
        });
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