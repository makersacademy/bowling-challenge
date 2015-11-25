exports.render = function(req, res) {
    res.render('index', {
    	title: 'Makers Academy TakeAway Challenge',
    	user: req.user ? req.user.username : ''
    });
};