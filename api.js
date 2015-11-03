var express = require('express');
var router = express.Router();

var User = require('./models/User.js').User;

router.post('/user', function (req, res) {

  var name = req.body.name;
  
  if (!name) {
    res.status(400).json({error: "Attribuutti 'name' puuttuu."});
  }
  else {
    var user = new User();
    user.name = name;
    user.save(function (err) {
      if (err) {
        res.status(500).json({error: "Palvelinvirhe."});
      }
      else {
        res.status(201).json(user);
      }
    });
  }
});

router.get('/user', function (req, res) {
  
  User.find({}, function(err, users) {
    console.log(users);
    //var s  = users.map(function(u) { return u.name; });
    res.json(users);
  });

});

module.exports = router;