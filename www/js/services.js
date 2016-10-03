angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Title of your notes',
    lastText: 'sample note',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }, {
    id: 5,
    name: 'Juan Miguel',
    lastText: 'Lets help change the Philippines.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    update: function(updatetUser) {
      for (var i = 0; i < chats.length; i++) {
        if  ($chats[i].id === updatetUser.id) {
            $chats[i] = updatetUser;
        }
      }
    }
  };
})

.factory('Docs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var docs = [{
    id: 0,
    name: 'death',
    proc: 3,
    tprog: 33.33333
  }, {
    id: 1,
    name: 'birth',
    proc: 3,
    tprog: 100
  }];

  return {
    all: function() {
      return docs;
    },
    remove: function(doc) {
      docs.splice(docs.indexOf(doc), 1);
    }
  };
})

.factory('Notes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var notes = [{
    id: 0,
    name: 'Title of your notes2',
    lastText: 'sample note',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }, {
    id: 5,
    name: 'Juan Miguel',
    lastText: 'Lets help change the Philippines.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return notes;
    },
    remove: function(note) {
      notes.splice(notes.indexOf(note), 1);
    },
    get: function(noteId) {
      for (var i = 0; i < notes.length; i++) {
        if (notes[i].id === parseInt(noteId)) {
          return notes[i];
        }
      }
      return null;
    }
  };
});
