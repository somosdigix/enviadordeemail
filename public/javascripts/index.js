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
	$('.btn').on('click', submitDoForm);
});

function submitDoForm(evento){
	evento.preventDefault();
	var data = JSON.stringify($('#formulario').serializeFormJSON());
    console.log(data);
    $.post('/enviar', data)
}