# Appstore

##Installing Dependencies
```
npm i or npm install
```
##.env File
add a .env file.(sample data)
```
DB_NAME=databaseName
DB_USER=databaseUsername
DB_PASS=databasePassword
DB_HOST=localhost
DB_SCHEMA=mysql
DB_PORT=3306
```

##Server
How to start and stop your MySQL Server in command line.
```
mysql.server start

mysql.server stop
```
How to run the sever in command line.
```
nodemon src/server.js or npm start

```

##Usage
Start without DEBUG.
```
nodemon src/server.js

node src/server.js

[nodemon] 1.9.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node src/server.js`

```
Start with DEBUG.
```
DEBUG=true nodemon src/server.js

DEBUG=true node src/server.js

[nodemon] 1.9.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node src/server.js`

=================================================
Server Active On Port
=================================================
 3000

```
###Unit Testing
How to start unit testing in command line.
```
mocha
```

##Deployment

Heroku looks at the npm start script to kick things off.

Git commit and push to Github

Manually Deploy to Heroku

##Endpoints
- /api/apps - Read All Apps Info
```
[
  {
    "id": 1,
    "title": "T.A.R.D.I.S. App",
    "description": "Timey Wimey Wibbly Wobbly",
    "releaseDate": "Nov 12, 2016",
    "srcTitle": "Splash Screen",
    "srcLink": "http://i.imgur.com/QQ3O6PO.jpg",
    "createdAt": "2016-06-10T04:05:43.000Z",
    "updatedAt": "2016-06-10T04:05:43.000Z",
    "userID": 1
  },
  {
    "id": 2,
    "title": "Emerald Archer of Star City",
    "description": "A fast paced archery hero game",
    "releaseDate": "Nov 16, 2016",
    "srcTitle": "Splash Screen",
    "srcLink": "http://i.imgur.com/QQ3O6PO.jpg",
    "createdAt": "2016-06-10T04:06:28.000Z",
    "updatedAt": "2016-06-10T04:06:28.000Z",
    "userID": 2
  },
  {
    "id": 3,
    "title": "Puzzle Runner",
    "description": "Run through crazy puzzles",
    "releaseDate": "Nov 16, 2016",
    "srcTitle": "Splash Screen",
    "srcLink": "https://gifsound.com/?gif=i.imgur.com/cQDLUM5.gif&v=Q-vU152-XAE&s=23",
    "createdAt": "2016-06-10T04:06:32.000Z",
    "updatedAt": "2016-06-10T04:06:32.000Z",
    "userID": 3
  },
  {
    "id": 4,
    "title": "Dark Knight",
    "description": "Defend the city at night",
    "releaseDate": "Nov 16, 2016",
    "srcTitle": "Splash Screen",
    "srcLink": "http://i.imgur.com/QQ3O6PO.jpg",
    "createdAt": "2016-06-10T04:06:35.000Z",
    "updatedAt": "2016-06-10T04:06:35.000Z",
    "userID": 4
  }
]

```

- /api/users - Read All Users Info
```
[
  {
    "id": 1,
    "username": "The Doctor",
    "firstName": "John",
    "lastName": "Smith",
    "createdAt": "2016-06-10T04:08:11.000Z",
    "updatedAt": "2016-06-10T04:08:11.000Z"
  },
  {
    "id": 2,
    "username": "Green Arrow",
    "firstName": "Oliver",
    "lastName": "Queen",
    "createdAt": "2016-06-10T04:08:29.000Z",
    "updatedAt": "2016-06-10T04:08:29.000Z"
  },
  {
    "id": 3,
    "username": "The Flash",
    "firstName": "Barry",
    "lastName": "Allen",
    "createdAt": "2016-06-10T04:08:44.000Z",
    "updatedAt": "2016-06-10T04:08:44.000Z"
  },
  {
    "id": 4,
    "username": "Batman",
    "firstName": "Bruce",
    "lastName": "Wayne",
    "createdAt": "2016-06-10T04:08:58.000Z",
    "updatedAt": "2016-06-10T04:08:58.000Z"
  }
]

```

- /api/apps/:id - Read Single App Info
```
{
  "id": 3,
  "title": "Puzzle Runner",
  "description": "Run through crazy puzzles",
  "releaseDate": "Nov 16, 2016",
  "srcTitle": "Splash Screen",
  "srcLink": "https://gifsound.com/?gif=i.imgur.com/cQDLUM5.gif&v=Q-vU152-XAE&s=23",
  "createdAt": "2016-06-10T04:06:32.000Z",
  "updatedAt": "2016-06-10T04:06:32.000Z",
  "userID": 3
}

```

- /api/users/:id - Read Single User Info
```
{
  "id": 3,
  "username": "The Flash",
  "firstName": "Barry",
  "lastName": "Allen",
  "createdAt": "2016-06-10T04:08:44.000Z",
  "updatedAt": "2016-06-10T04:08:44.000Z",
  "apps": [
    {
      "id": 3,
      "title": "Puzzle Runner",
      "description": "Run through crazy puzzles",
      "releaseDate": "Nov 16, 2016",
      "srcTitle": "Splash Screen",
      "srcLink": "https://gifsound.com/?gif=i.imgur.com/cQDLUM5.gif&v=Q-vU152-XAE&s=23",
      "createdAt": "2016-06-10T04:06:32.000Z",
      "updatedAt": "2016-06-10T04:06:32.000Z",
      "userID": 3
    }
  ]
}
```

- /api/users/:id/apps - Read Single User Apps Info
```
[
  {
    "id": 3,
    "title": "Puzzle Runner",
    "description": "Run through crazy puzzles",
    "releaseDate": "Nov 16, 2016",
    "srcTitle": "Splash Screen",
    "srcLink": "https://gifsound.com/?gif=i.imgur.com/cQDLUM5.gif&v=Q-vU152-XAE&s=23",
    "createdAt": "2016-06-10T04:06:32.000Z",
    "updatedAt": "2016-06-10T04:06:32.000Z",
    "userID": 3
  }
]
```
