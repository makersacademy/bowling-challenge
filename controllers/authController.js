const jwt = require('jsonwebtoken'),
      url = require('url'),
      bcrypt = require('bcryptjs'),
      User = require('../models/user');

exports.signup = (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  User.create({username: req.body.username, password: hashedPassword}, (err, user) => {
    if(err){
    return res.status(500).send("There was a problem registering the user.");
    }
    const token = jwt.sign({ id: user._id}, process.env.SECRET, {
      expiresIn: 86400}
    ); // expires in 24 hours
    res.status(200).send({ auth: true, token: token });
  });
};

exports.getName = (req, res) => {
  const token = req.headers['x-access-token'];
  if(!token) return res.status(401).send({ auth: false, message: 'No token provided' });
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if(err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token' });
    User.findById(decoded.id, { password: 0 }, ( err, user) => {
      if(err) res.status(500).send("There was a problem finding the user");
      res.status(200).send(user);
    });
  });
};

exports.login = (req, res) => {
  User.findOne({ username: req.body.username}, (err, user) => {
    if(err) res.status(500).send('Error on the server');
    if(!user) res.status(404).send('No user found');
    
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
    if(!isPasswordValid) return res.status(401).send({auth: false, token: null});
    
    const token = jwt.sign({ id: user._id}, process.env.SECRET, { expiresIn: 86400 });

    res.status(200).send({ auth: true, token: token });
  });
};
