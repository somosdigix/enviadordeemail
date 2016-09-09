var nodemailer = require('nodemailer');
var MailOptions = require('../domain/mailOptions');

function EnvioDeEmail(smtp, options){
	var self = {};
	
	var transporter = nodemailer.createTransport(smtp);
 
	var mailOptions = new MailOptions(options);

	self.enviar = function(callback){
		transporter.sendMail(mailOptions.options, function(error, info){
			if(error){
				callback('Failure');
				return console.log(error);
			}
			callback('Sent');
			return console.log('Message sent: ' + info);
		});
	};
 
	return self;
}

module.exports = EnvioDeEmail;