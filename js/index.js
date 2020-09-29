$(document).ready(function(){
	
	var br = [
			['(', ')'],
			['[', ']'],
			['<', '>'],
		];
	
	// 12.78.76
	
	$('.login-popup .icon').click(function(){
		$('.login-popup').hide();
	});
	
	$('.square .process').click(function(){
		var data = $('.square .data').val();
		
		var divElem = $("<div>");
		divElem.addClass('fun');
		divElem.appemd();
		$('.square .result').append(divElem);
		for (var i=0; i<data[0];i++){
			$('.square .result').append("<span></span>");
			
		}
	});
	
	
	
	$('.minNumbers .process').click(function(){
		var data = $('.minNumbers .data').val();
		
		var userText = calcMinNumbers(data);
		$('.minNumbers .result').text(userText);
	});
	
	function calcMinNumbers(data) {
		var minNumbers = [];
		for (var i =1; i<data.length; i++) {
			
		}
		
	}
	
	//найти одно минимальное число;
	
	function calcMinNumber(data) {
		
		var minNum =data[0];
		
		for (var i =1; i<data.length; i++) {
			
			if (data[i] < minNum) {
				
				minNum = data[i];
			}
			
		}
		
		
		return minNum;
	}
	
	
	
	
	$('.fibonacсi .process').click(function(){
		var data = $('.fibonacсi .data').val();
		
		var userText = calcFibonacсi(data);
		$('.fibonacсi .result').text(userText);
	});
	
	function calcFibonacсi(data) {
		var numbersFibonacсi = [ 1, 1];
		for (var i =2; i<data; i++) {
			var newnumber = numbersFibonacсi[i-1]+numbersFibonacсi[i-2];
			numbersFibonacсi.push(newnumber);
		}
		
		return numbersFibonacсi.join('');
	}
	
	
	
	$('.wordUser .process').click(function(){
		var data = $('.wordUser .data').val();
		
		var userText = calcFirstWord(data);
		$('.wordUser .result').text(userText);
	});
	function calcFirstWord(data) {
		var newdata = [];
		for (var i =2; i<data.length; i++) {
			if (data[i-2]==='.') {
				var a  = data[i].toUpperCase();
				newdata.push(a);
			}
			else {
				newdata.push(data[i]);
			}
		}
		return newdata.join('');
	}
	
	
	
	
	$('.polindrom .process').click(function(){
		var data = $('.polindrom .data').val();
		
		var userText = calcPolindrom(data);
		if (userText) {$('.polindrom .result').text("Полиндром!");}
		else {$('.polindrom .result').text("Не Полиндром!");}
		
	});
	
	
	function calcPolindrom(data){
		for (var i = 0; i<data.length/2; i++) {
			if (data[i]!==data[data.length-1-i]) {
				return false;
			} 
	    }
		return true;
	}
	
	
	$('.textarearCool .process').click(function(){
		var data = $('.textarearCool .data').val();
		
		var userText = data.replaceAll('\n','<br>');
		//var textRich = "line1\r\nline2\r\nline3";
		// "line1<br>nline2<br>line3"
		//var numberCount = calcNumberCount(data);
		$('.textarearCool .result').html(userText);
	});
	
	
	
	
	
	$('.accountNumbers .process').click(function(){
		var data = $('.accountNumbers .data').val();
		
		var userText = calcNumbers(data);
		$('.accountNumbers .result').text(userText);
		
		
	});
	function calcNumbers(data) {
		var amount = 0;
		var point = 0;
		for (var i = 0; i<data.length; i++) {
			
			if  (data[i]!== ' ' && !isNaN(data[i]) && (isNaN(data[i+1]) || data[i+1]=== ' ')) {
				
				amount++;
			}	
			if (data[i]=== '.') {point++}
	    }
	return amount;
	}
	
	function calcNumberCount(line){
		var answer = 0;
		//Идём ли мы уже по начатому числу
		var numberWasStarted = false;
		//Встречали ли точки
		var flagDot = false;
		
		for(var i = 0; i < line.length ; i++){
			var symbol = line[i];
			if ( !isNaN(symbol) ){
				if (!numberWasStarted)
				{
					//Начали число
					answer++;
					numberWasStarted = true;
				}
			}else{
				if (symbol == '.' && !flagDot) {
					//Встретили первую точку
					flagDot = true;
				} else {
					//Законичили число
					numberWasStarted = false;
					flagDot = false;
				}
			}
		}
		
		return answer;
	}
	
	$('.closeSymbol .process').click(function(){
		var data = $('.closeSymbol .data').val();
		
		var userText = calcCloseSymbol(data);
		if (userText) {$('.closeSymbol .result').text("Скобки закрыты!");}
		else {$('.closeSymbol .result').text("Скобки не закрыты!");}
		
		
	});
	
	
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
