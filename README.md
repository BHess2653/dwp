# Appstore
This is a Static API demonstration, using fake data.

###Endpoints
- /api/apps
- /api/users
- /api/apps/:id
- /api/users/:id

##Run App
```
nodemon src/server.js

```

##routes
- /api/

```
{ nav: [{
          "users": "http://localhost:3000/api/users",
          "apps": "http://localhost:3000/api/apps",
          "single user": "http://localhost:3000/api/users/:id",
          "single app": "http://localhost:3000/api/apps/:id"
          }]
        }

```
