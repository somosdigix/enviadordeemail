var express = require('express');
var router = express.Router();
var EnvioDeEmail = require('../application/envioDeEmail');

router.post('/enviar', function(req, res, next) {
	var smtp = req.body.options.smtp;
	var mailOptions = req.body.options.mailOptions;
	var email = new EnvioDeEmail(smtp,mailOptions);
	email.enviar(function(message){
		res.send(message);
	});
});

router.get('/index', function(req, res, next) {
	res.render('index', {});
});

module.exports = router;