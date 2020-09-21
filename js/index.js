$(document).ready(function(){
	
	var br = [
			['(', ')'],
			['[', ']'],
			['<', '>'],
		];
	
	$('.login-popup .icon').click(function(){
		$('.login-popup').hide();
	});
	
	$('.closeSymbol .process').click(function(){
		var data = $('.closeSymbol .data').val();
		
		var userText = calcCloseSymbol(data);
		if (userText) {$('.closeSymbol .result').text("Скобки закрыты!");}
		else {$('.closeSymbol .result').text("Скобки не закрыты!");}
		
		
	});
	
	function calcCloseSymbol2(data){
		var checkArr=[];
		for (var i = 0; i<data.length; i++) {
			var symbol = data[i];
				for(var j = 0; j < bra.length ; j++){
					var onePairOfBra  = bra[j];// Example ['<', '>']
					if (onePairOfBra[0] == symbol){
						checkArr.push(symbol);
					}
					if (onePairOfBra[1] == symbol){
						
					}
					
				}	
			}
			
		
		
	}
	
	
	
	function calcCloseSymbol(data) {
		var symbolStart = 0;
		var symbolEnd = 0;
		for (var i = 0; i<data.length; i++) {
			
			if (symbolEnd > symbolStart){
				return false;
			}
			
			for(var k = 0; k< br.length; k++){
				var bePair = br[k];
				if 	(data[i] == bePair[0]) {
					symbolStart++;
				}
				if 	(data[i] == bePair[1]) {
					symbolEnd++;
				}
			}	
		}
		return symbolStart == symbolEnd;
	}
	
	
  $('.numberwords .process').click(function(){
		var data = $('.numberwords .data').val();
		
		var userText = calcWordsText(data);
		
		$('.numberwords .result').text(userText);
	});
	
	function calcWordsText(data) {
		var numberWords =0;
		for (var i = 0; i<data.length; i++) {
			if 	(data[i] == " ") {
				numberWords++;
			}
		}
		return numberWords+1;
		
	}
	
	$('.text .process').click(function(){
		var data = $('.text .data').val();
		
		var userText = calcNewText(data);
		
		$('.text .result').text(userText);
	});
	
	
	function calcNewText(data){
		var newText =[];
	
		for (var i = data.length-1; i>=0; i--) {
			newText.push(data[i]);	
		}
	    return newText.join('');
		
	}
	
	
	
	
	
	var numbers0To10 = ['ноль', 'один', 'два', 'три', 'четыре', 
		'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять'];
	var numbers11To19 = ['одинадцать', 'дведадцать', 'тридацать', 'четырнадцать', 
		'пятнадцать', 'шестьнадцать', 'семьдацать', 'восемьнадцать', 'девятьнадцать'];
	var tens = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 
		'шестьдесять', 'семьдесят', 'восемьдесят', 'девяносто'];
	var hundreds = 	['сто','двести', 'триста', 'четыреста', 'пятьсот', 
		'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
		
		
	$('.coin .process').click(function(){
		var data = $('.coin .data').val() - 0;
		
		var coinText = calcCoinText(data);
		
		$('.coin .result').text(coinText);
	});
	
	function calcCoinText(number){
		if (number < 11){
			return numbers0To10[number];
		}
		if (number < 20){
			return numbers11To19[number - 11];
		}
		
		var array = numberToArray(number);
		
		var hundred = array[2];
		var result = hundreds[hundred-1];
		
		var ten = array[1];
		result += ' ' + tens[ten-2];
		
		var numberOne = array[0];
		if (numberOne > 0){
			result += ' ' + numbers0To10[numberOne];
		}
		
		var hundred = array[2];
		
		
			return result;
	}
	
	
	function numberToArray(fullnumber){
	var array=[];
		while (fullnumber>0) {
			var number = fullnumber%10;
			array.push(number);
			fullnumber = (fullnumber-number)/10;
		}
	return array;
			
	}
	
	
	$('.ecrypt .process').click(function(){
		var data=$('.ecrypt .data').val()-0;
		var encryptdata = encryptNumber(data);
		$('.ecrypt .result').text(encryptdata);
	});
	
	function encryptNumber(data){
		
	    var numbers =['ноль','один','два','три','четыре','пять','шесть','семь','восемь','девять']
		var cryptdata = numbers[data].length;
			return cryptdata;	
		
	}
});
