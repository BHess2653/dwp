const user = require('../../models/apps');

module.exports = (express) => {
  const router = express.Router();

  // Read All Apps
  router.get('/apps', (req, res) => {
    user.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Read One App
  router.get('/apps/:id', (req, res) => {
    req.body.id = req.params.id
    user.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Delete App
  router.delete('/apps/:id', (req, res) => {
    req.body.id = req.params.id
    user.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Update App
  router.post('/apps/:id', (req, res) => {
    req.body.id = req.params.id
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // Create App
  router.post('/apps', (req, res) => {
    user.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  return router;
};
