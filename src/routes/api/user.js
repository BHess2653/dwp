const user = require('../../models/users');

module.exports = (express) => {
  const router = express.Router();

  // Read All Users
  router.get('/users', (req, res) => {
    user.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read One User
  router.get('/users/:id', (req, res) => {
    req.body.id = req.params.id
    user.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Delete User
  router.delete('/users/:id', (req, res) => {
    req.body.id = req.params.id
    user.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Update User
  router.post('/users/:id', (req, res) => {
    req.body.id = req.params.id
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Create User
  router.post('/users', (req, res) => {
    user.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

// =============================================

  // Read One Users Apps
  router.get('/users/:id/apps', (req, res) => {
    req.body.id = req.params.id
    user.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data.apps);
    });
  });

  return router;
};
