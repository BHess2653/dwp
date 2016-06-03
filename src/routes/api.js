module.exports = function (express) {
  var router = express.Router();

  router.get('/', function(req, res){
    res.json({ nav: [{
              "users": "http://localhost:3000/api/users",
              "apps": "http://localhost:3000/api/apps",
              "single user": "http://localhost:3000/api/users/:id",
              "single app": "http://localhost:3000/api/apps/:id"
              }]
            })
  });

  router.get('/users', function(req, res){
    res.json({ users:
      [{
        "id": "A00",
        "username": "The Doctor",
        "firstname": "John",
        "lastname": "Smith"
      },
      {
        "id": "A01",
        "username": "Green Arrow",
        "firstname": "Oliver",
        "lastname": "Queen"
      },
      {
        "id": "A02",
        "username": "The Flash",
        "firstname": "Barry",
        "lastname": "Allen"
      }]
    });
  });

  router.get('/apps', function(req, res){
    res.json({ apps:[{
  "id": "B00",
  "title": "T.A.R.D.I.S. App",
  "description": "Timey Wimey Wibbly Wobbly",
  "artAssets": [
    { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
    { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
  ],
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-05-15T22:29:20.000Z",
  "updatedAt": "2016-05-15T22:29:20.000Z",
  "user": {
    "id": "A00",
    "name": "The Doctor"
  }
},
{
  "id": "B01",
  "title": "Best Archer Shooter",
  "description": "A fast paced side scrolling archery shooter",
  "artAssets": [
    { "title": "Splash Screen", "srcLink": "http://i.imgur.com/5e5Ihb6.jpg" },
    { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
  ],
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-05-15T22:29:20.000Z",
  "updatedAt": "2016-05-15T22:29:20.000Z",
  "user": {
    "id": "A01",
    "name": "Green Arrow"
  }
},
{
  "id": "B02",
  "title": "The Fastest Puzzle App",
  "description": "Fastest puzzle app out there",
  "artAssets": [
    { "title": "Splash Screen", "srcLink": "https://gifsound.com/?gif=i.imgur.com/cQDLUM5.gif&v=Q-vU152-XAE&s=23" },
    { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
  ],
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-05-15T22:29:20.000Z",
  "updatedAt": "2016-05-15T22:29:20.000Z",
  "user": {
    "id": "A02",
    "name": "The Flash"
  }
}]
    });
  });

  router.get('/users/:id', function(req, res){
    res.json({ users:
      [{
        "id": "A02",
        "username": "The Flash",
        "firstname": "Barry",
        "lastname": "Allen"
      }]
    });
  });

  router.get('/apps/:id', function(req, res){
    res.json({ apps:[{
  "id": "B02",
  "title": "The Fastest Puzzle App",
  "description": "Fastest puzzle app out there",
  "artAssets": [
    { "title": "Splash Screen", "srcLink": "https://gifsound.com/?gif=i.imgur.com/cQDLUM5.gif&v=Q-vU152-XAE&s=23" },
    { "title": "Cut Scene", "srcLink": "http://i.imgur.com/QQ3O6PO.jpg" }
  ],
  "releaseDate": "2016-06-15T22:29:20.000Z",
  "createdAt": "2016-05-15T22:29:20.000Z",
  "updatedAt": "2016-05-15T22:29:20.000Z",
  "user": {
    "id": "A02",
    "name": "The Flash"
  }
}]
    });
  });


  return router;
}
