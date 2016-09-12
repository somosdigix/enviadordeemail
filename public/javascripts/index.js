$(document).ready(function(){
	$('form').on('submit', submitDoForm);
});

function submitDoForm(evento){
 	evento.preventDefault();
	var elemento = evento.currentTarget;
	var json = JSON.parse(JSON.stringify($(elemento).serializeArray()));
	$.post('/enviar', {'oi' : 'oi'}, function(){},'json').fail(function(error){console.log(error)});
}