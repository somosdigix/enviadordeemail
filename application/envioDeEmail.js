var nodemailer = require('nodemailer');
var MailOptions = require('../domain/mailOptions');

function EnvioDeEmail(smtp, options){
	var self = {};
	
	var transporter = nodemailer.createTransport(smtp);
 
	var mailOptions = new MailOptions(options);

	self.enviar = function(callback){
		transporter.sendMail(mailOptions.options, function(error, info){
			if(error){
				callback(error.message);
				return console.log(error.message);
			}
			callback('Message sent: ' + info.response);
			return console.log('Message sent: ' + info.response);
		});
	};
 
	return self;
}

module.exports = EnvioDeEmail;