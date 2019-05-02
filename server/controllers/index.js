var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, message) => {
        if (err) {
          res.send(err);
        } else {
          res.json(message);
        }
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let args = [req.body.message, req.body.username, req.body.roomname]
      models.messages.post(args, (err, message) => {
        if (err) {
          res.send(err);
        } else {
          res.sendStatus(201);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, username) => {
        if (err) {
          res.send(err);
        } else {
          res.send(username);
        }
      });
    },
    post: function (req, res) {
      let args = [req.body.username]
      models.users.post(args, (err, username) => {
        if (err) {
          res.send(err);
        } else {
          res.sendStatus(201);
        }
      });
    }
  }
};

