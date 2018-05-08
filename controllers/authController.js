const jwt = require('jsonwebtoken'),
      bcrypt = require('bcryptjs'),
      User = require('../models/user');

exports.signup = (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);

  User.create({...req.body, password: hashedPassword}, (err, user) => {
    if(err) return res.status(500).send("There was a problem registering the user.");
    
    const token = jwt.sign({ id: user._id}, process.env.SECRET, {
      expiresIn: 86400}
    ); // expires in 24 hours
    res.render('index', { auth: true, token: token });
    //res.redirect('/', { auth: true, token: token });
  });
};
