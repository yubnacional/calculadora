function suma  () {
	
}

function resta  () {
	// body...
}

function multiplicacion  () {
	// body...
}

function division  () {
	// body...
}

function operaciones(num) {
	//alert ("Hola");
	var nume1 = document.getElementById('num1').value;
	var nume2 = document.getElementById('num2').value;
	var resultado = 0;
	var op = num;
	nume1 = parseInt(nume1);
	nume2 = parseInt(nume2);
	resultado = parseInt (resultado);
	resultado = nume1 + nume2;

	
	

	switch (op) {
		case 1: 
		resultado = nume1 + nume2;
		break;

		case 2: 
		resultado = nume1 - nume2;
		break;

		case 3: 
		resultado = nume1 * nume2;
		break;

		case 4: 
		resultado = nume1 / nume2;
		break;

		default : 
		alert ('Opcion No Existe');
	}

	resultado = document.getElementById('resultado').value = resultado;
	limpiar();
	return false;

}

function limpiar () {
		//alert ('Su resultado es');
		var result = ""; 
		result = document.getElementById('num1').value = result;
		result = document.getElementById('num2').value = result;
		
		
	}

