
var puntosSquad = document.getElementById("puntos_Squad");
var maxPuntos = document.getElementById("max_Puntos");
var divSalida = document.getElementById("salida");
var porcentaje_Squad = 0;

function calcular()
{
	var  valorpuntosSquad=puntosSquad.value;
	var  valormaxPuntos=maxPuntos.value;

	porcentaje_Squad = (100*(puntosSquad.value) / maxPuntos.value);
	var valorPorcentajeSquad= porcentaje_Squad;

	if(valorpuntosSquad == "" || valormaxPuntos == "" )
	{

		salida.innerHTML = "0";
		document.getElementById("mensajes").innerHTML = '';
	}
	else if( valorPorcentajeSquad > 100  ||  valorPorcentajeSquad < 0)
	{
		salida.innerHTML = "0";
		document.getElementById("mensajes").innerHTML = '';
	}
	else 
	{
		if (valorPorcentajeSquad >= 80 ) 
		{
			salida.innerHTML = valorPorcentajeSquad.toFixed(2)+"%";
			document.getElementById("mensajes").innerHTML = '<div>Muy bien </div>';
		}
		else
		{
			salida.innerHTML = valorPorcentajeSquad.toFixed(2)+"%";
			document.getElementById("mensajes").innerHTML = '<div>Pueden hacerlo mejor</div>';
		}
	}

}
