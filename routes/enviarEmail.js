var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.post('/enviar', function(req, res, next) {
	console.log('oi');
	// create reusable transporter object using the default SMTP transport 
	var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');
	 
	// setup e-mail data with unicode symbols 
	var mailOptions = {
	    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address 
	    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers 
	    subject: 'Hello ✔', // Subject line 
	    text: 'Hello world 🐴', // plaintext body 
	    html: '<b>Hello world 🐴</b>' // html body 
	};
	 
	// send mail with defined transport object 
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});
	res.send('ok');	
});

router.get('/enviar', function(req, res, next) {
	console.log('oi');
});

module.exports = router;