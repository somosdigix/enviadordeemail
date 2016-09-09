var nodemailer = require('nodemailer');
var mailOptions = require('../domain/mailOptions');

function EnvioDeEmail(smtp, options){
	var self = {};
	
	self.transporter = nodemailer.createTransport(smtp);
 
	var mailProperties = new MailOptions(options);

	self.enviar = function(){
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