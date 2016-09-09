var assert = require('assert');
var MailOptions = require('../domain/mailOptions');

describe('MailOptions', function(){
	'use strict';

	it('não deve criar sem o campo from', function(){
		var json = {
			"to": "diegopaniago1@gmail.com, enviadordigitho@gmail.com", 
			"subject": "Aooooo", 
			"html": "<span style='color: red;'>Teste maldito</span>",
			"attachments": [
			{
				"filename": "anexoDeTeste.txt",
				"content": "hello world!"
			}]
		};

		function criarUmMailOptionInvalido(){
			new MailOptions(json);
		}

		assert.throws(criarUmMailOptionInvalido, Error);
	});

	it('não deve criar sem o campo to', function(){
		var json = {
			"from": "enviadordigitho@gmail.com", 
			"subject": "Aooooo", 
			"html": "<span style='color: red;'>Teste maldito</span>",
			"attachments": [
			{
				"filename": "anexoDeTeste.txt",
				"content": "hello world!"
			}]
		};

		function criarUmMailOptionInvalido(){
			new MailOptions(json);
		}

		assert.throws(criarUmMailOptionInvalido, Error);
	});

	it('não deve criar sem o campo subject', function(){
		var json = {
			"from": "enviadordigitho@gmail.com", 
			"to": "diegopaniago1@gmail.com, enviadordigitho@gmail.com",  
			"html": "<span style='color: red;'>Teste maldito</span>",
			"attachments": [
			{
				"filename": "anexoDeTeste.txt",
				"content": "hello world!"
			}]
		};

		function criarUmMailOptionInvalido(){
			new MailOptions(json);
		}

		assert.throws(criarUmMailOptionInvalido, Error);
	});

	it('não deve criar sem o campo text ou sem o campo html', function(){
		var json = {
			"from": "enviadordigitho@gmail.com", 
			"to": "diegopaniago1@gmail.com, enviadordigitho@gmail.com",  
			"subject": "Aooooo", 
			"attachments": [
			{
				"filename": "anexoDeTeste.txt",
				"content": "hello world!"
			}]
		};

		function criarUmMailOptionInvalido(){
			new MailOptions(json);
		}

		assert.throws(criarUmMailOptionInvalido, Error);
	});
});