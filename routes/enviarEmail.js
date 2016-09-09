var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var envioDeEmail = require('../application/envioDeEmail');

router.post('/enviar', function(req, res, next) {
	var smtp = req.body.options.smtp;
	var mailOptions = req.body.options.mailOptions;
	var email = new EnvioDeEmail(smtp,mailOptions);
	email.enviar();
});

module.exports = router;