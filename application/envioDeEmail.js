var nodemailer = require('nodemailer');
var MailOptions = require('../domain/mailOptions');

function EnvioDeEmail(smtp, options){
	var self = {};
	
	var transporter = nodemailer.createTransport(smtp);
 
	var mailProperties = new MailOptions(options);

	self.enviar = function(){
		console.log(smtp);
		transporter.sendMail(mailProperties, function(error, info){
			if(error){
				return console.log(error);
			}
			console.log('Message sent: ' + info.response);
		});
	};
 
	return self;
}

module.exports = EnvioDeEmail;