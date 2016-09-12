(function ($) {
	$.fn.serializeFormJSON = function () {

		var o = {};
		var a = this.serializeArray();
		$.each(a, function () {
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [o[this.name]];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
})(jQuery);

$(document).ready(function(){
	$('#formulario').on('submit', submitDoForm);
});

function submitDoForm(evento){
	evento.preventDefault();
	var json = $('#formulario').serializeFormJSON();
	
	var data = {};
	data.options = {};
	data.options.smtp = json.smtp;
	data.options.mailOptions = {};
	data.options.mailOptions.from = json.from;
	data.options.mailOptions.to = json.to;
	data.options.mailOptions.subject = json.subject;
	data.options.mailOptions.html = json.html;
	
	console.log(JSON.stringify(data));
	
	$.post('/enviar', data)
	.done(function(){
		$('#mensagemDeErro').text('');
	})
	.fail(function(){
		$('#mensagemDeErro').text('Erro no POST');
	});
}