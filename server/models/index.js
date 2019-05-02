var db = require('../db');

module.exports = {
  messages: {
    get: function (callBackMessages) {
      var queryStr = 'select messages.id, messages.text, messages.roomname, users.username \
                      from messages left outer join users on (messages.userid = users.id) \
                      order by messages.id desc';
      db.query(queryStr, (err, res) => {
        if (err) {
          callBackMessages(err, null);
        } else {
          callBackMessages(null, res);
        }
      })
    }, // a function which produces all the messages
    post: function (newMessage, msgCallBack) {
      var queryStr = 'insert into messages(text, userid, roomname) \
      value (?, (select id from users where username = ? limit 1), ?)';


      db.query(queryStr, newMessage, (err, res) => {
        if (err) {
          msgCallBack(err, null);
        } else {
          msgCallBack(null, res.insertId);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callBackUsers) {
      db.query('SELECT * FROM users', (err, res) => {
        if (err) {
          callBackUsers(err, null);
        } else {
          callBackUsers(null, res);
        }
      })
    },
    post: function (username, userCallBack) {
      db.query('INSERT INTO users set ?', username, (err, res) => {
        if (err) {
          userCallBack(err, null);
        } else {
          userCallBack(null, res.insertId);
        }
      });
    }
  }
};

