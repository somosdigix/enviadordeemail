$(document).ready(function(){
	$('#formularioJson').on('submit', submitDoFormJson);
});

function submitDoFormJson(evento){
	evento.preventDefault();
	
	var data = JSON.parse($("#conteudoJson").val());

	$.post('/enviar', data)
	.fail(function(){
		$('#mensagemDeErroJson').text('Erro no POST');
	})
	.always(function( data, textStatus, error){
		$('#mensagemDeErroJson').text(data);
	});
}