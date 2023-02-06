function conversionbinaire() {
	var inputBinaire = document.getElementById('binaryValue');
	var span = document.getElementById('base invalide');
	var inputDecimale = document.getElementById('decimalValue');
	var inputHexa = document.getElementById('hexadecimalValue');

	
	inputDecimale.value = parseInt(inputBinaire.value,2);
	inputHexa.value = (parseInt(inputBinaire.value,2)).toString(16);

}

function conversiondecimale() {
	var inputDecimale = document.getElementById('decimalValue');
	var span = document.getElementById('base invalide');
	var inputBinaire = document.getElementById('binaryValue');
	var inputHexa = document.getElementById('hexadecimalValue');
		
	
	inputBinaire.value = parseInt(inputDecimale.value).toString(2);
	inputHexa.value = (parseInt(inputDecimale.value)).toString(16);

}

function conversionhexadecimal() {
	var inputHexa = document.getElementById('hexadecimalValue');
	var span = document.getElementById('base invalide');
	var inputDecimale = document.getElementById('decimalValue');
	var inputBinaire = document.getElementById('binaryValue');
		
	
	inputDecimale.value = parseInt(inputHexa.value,16);
	inputBinaire.value = (parseInt(inputHexa.value,16)).toString(2);

}