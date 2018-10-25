$("body").on("click", "#btn", function() { 
	var cep = $("#cep").val();
	buscaCep(cep);
});

function mascara(t, mask){
    var i = t.value.length;
    var saida = mask.substring(1,0);
    var texto = mask.substring(i)

    if (texto.substring(0,1) != saida){
        t.value += texto.substring(0,1);
    }
}

function buscaCep(cep) {
	$.get("https://apps.widenet.com.br/busca-cep/api/cep.json", {code: cep}, 
	    function(result) {
	        if(result.status!=1) {
	            alert(result.message || "Houve um erro desconhecido");
	            return false;
	        }
	        var html = `<p>${result.address}</p>
	        			<p>Bairro ${result.district}</p>
	        			<p>${result.city} - ${result.state}</p>`;

	    	$("#result").html(html);
	    }
	);
}