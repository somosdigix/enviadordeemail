# Enviador de Email [![Build Status](https://travis-ci.org/DigithoBrasil/enviadordeemail.svg?branch=master)](https://travis-ci.org/DigithoBrasil/enviadordeemail)
Um serviço de envio de email escrito em Nodejs onde você passa o servidor smtp que deseja e ele trata de todo resto. O conteudo pode ser escrito em html ou texto plano.

#Exemplo JSON
O parâmetro smtp pode ser enviado de duas formas:

//Melhor para GMAIL porem é necessario desabilitar as configurações de proteção para apps terceiros na sua conta Google
- <pre><code>"smtp" : "smtps://example@test.com:password@smtp.test.com"</pre></code>

ou

- <pre><code>"smtp" : {
			"host":"email-ssl.com.br",	
			"port":"465",
			"secure": true, //Habilita SSL e TLS
			"auth": {
				"user":"example@example.com.br", 
				"pass": "PASSWORD"
			}
		}</pre></code>

# JSON Completo
<pre><code>{
	"options" : {
		"smtp" : {
			"host":"email-ssl.com.br",	
			"port":"465",
			"secure": true,
			"auth": {
				"user":"example@example.com.br", 
				"pass": "PASSWORD"
			}
		},
		"mailOptions" : {
		    "from": "you@test.com", 
		    "to": "someone@test.com", 
		    "subject": "Test", 
		    "html": "<span style='color: red;'>Test</span>",
		    "attachments": [
		        {
		            "filename": "attachment.txt",
		            "content": "hello world!"
		        }]
		}
	}
}</pre></code>
