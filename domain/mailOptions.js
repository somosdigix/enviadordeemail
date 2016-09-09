function MailOptions(mailOptions) {
	"use strict";

	var self = {};

	self.options = (function() {

		if(mailOptions.from == null) {
			throw new Error('Paramater from not found.');
		}

		if(mailOptions.to == null) {
			throw new Error('Paramater to not found.');
		}

		if(mailOptions.subject == null) {
			throw new Error('Paramater subject not found.');
		}

		if(mailOptions.text == null && mailOptions.html) {
			throw new Error('Paramater text or html not found.');
		}

		return mailOptions;
	})();
}

module.exports = MailOptions;