var alumnos = [
    [ "Gómez", "Pedro" ],
    [ "Gómez", "Carlos" ],
    [ "García", "Laura" ]
];


function comprobar(){
	var scanner = prompt("Nombre y apellido");
	var scannerArray = scanner.split(' ');
	var esta = false;
	var num;
	
	if (scanner==="") {
		alert("Tienes que meter algo, tio");
	}
	else if(scannerArray.length==2){
		
		for (var i = 0; i < alumnos.length; i++) {

			if(scannerArray[0].toLowerCase()==alumnos[i][1].toLowerCase() && scannerArray[1].toLowerCase()==alumnos[i][0].toLowerCase()){
				esta= true;
				num=i;
			}
		}
		if (esta==true) {
			alert("Está en la posición de la lista: " + num);
		}
		else if(esta==false) {
			alert("No está en la lista");
			comprobar();
		}
	}else{
		alert('Mal formateado');
		comprobar();
	}
}
comprobar();