$(document).ready(function(){	
    var currentId=0;
	var goods = [
		{
			id: 1,
			name: 'A-Blond',
			url: 'img/Girl1.jpg'
		},
		{
			id: 2,
			name: 'Z-Blond',
			url: 'img/Girl2.jpg'
		},
		// {
			// name: 'Blond',
			// url: 'img/Girl1.jpg'
		// },
		// {
			// name: 'Red',
			// url: 'img/Girl2.jpg'
		// },
		{
			id: 3,
			name: 'Z-Red',
			url: 'img/Girl3.jpg'
		},
		{
			id: 4,
			name: 'A-Red',
			url: 'img/Girl4.jpg'
		},
	];
	
	refreshGoods();
	
	// $('.login-popup').hide();
	
	$('.login-popup .close').click(function (){
		$('.login-popup').hide();
	});
	
	$('.goods.first .add').click(function(){
		var newName = $('.goods.first .new-image-name').val();
		var newUrl = $('.goods.first .new-image-url').val();
		
		//good => good.Id
		//Тоже самое по старому
		// function (good)
		// {
			// return good.Id;
		// }
		
		var good = {
			id: goods.sort(x => -1 * x.Id)[0].id + 1, 
			name: newName,
			url: newUrl
		};
		goods.push(good);
		refreshGoods();
	});
	
	$('.left-menu .filter').keyup(function (){
		refreshGoods();
	});
	
	$('.refresh').click(function(){
		refreshGoods();
	});
	
	//Обновить все товары
	function refreshGoods(){
		$('.content .goods:not(.first)').remove();
		
		//Отдавли все товары
		//Получили товары подходящие под запрос пользователя
		var filteredGoods = filterGoods(goods);
		
		//Отдали товары подходящие под запрос пользователя
		//Отдали товары подходящие под запрос пользователя в нужном порядке
		var filteredAndSortedGoods = sortGoods(filteredGoods);
		
		//Нарисует товары
		drawGoods(filteredAndSortedGoods);
	}
	
	//Сортируем товары
	function sortGoods(oldGoods){
		
		var userCheckSortDir = $('[name=sortOrder]:checked').val();
		var sortDir = 
			userCheckSortDir == 'Up'
				? 1
				: -1;
				
		var register = $('[name=registerSort]:checked').val();
		//filed = 'name' || field == 'url'
		var field = $('[name=sortField]:checked').val();
		
		var aBiggerThenB = function(a,b){
			var first = a[field];//a.name;
			var second = b[field];
			
			if (register == '2'){
				first = first.toLowerCase();
				second = second.toLowerCase();
			}
			
			if (first > second){
				return 1 * sortDir;
			}
			if (first < second){
				return -1 * sortDir;
			}
			return 0;
		};
		
		var copyGoods = oldGoods.sort(aBiggerThenB);
		
		
		
		return copyGoods;
	}

	//Функция получила какие-то товары
	function filterGoods(someGoods){
		//Нашли строку, которую использовал пользователь
		var textFilter = $('.left-menu .filter').val();
		
		var filed = $('[name=sortField]:checked').val();
		
		//Взяли старый массив, забрали из него только не товары, 
		//в имени которых была строка набранная Пользователем.
		// Получился новый массив.
		var filteredGoods = someGoods.filter(function (good){			
			return good[filed].indexOf(textFilter) > -1;
		});
		
		//Вернули новый массив
		return filteredGoods;
	}

	function drawGoods(someGoods){
		for	(var i = 0; i< someGoods.length; i++){
			var good = someGoods[i];
			var goodsDiv = $('<div>');
		
			goodsDiv.click(fullScreen);
			goodsDiv.attr('data-id', good.id);
			goodsDiv.addClass('goods');
			
			var divName = $('<div>');
			divName.text(good.name);
			
			var divUrl = $('<div>');
			divUrl.text(good.url);
			
			var divImg = $('<div>');
			divImg.addClass('image');
			var img = $('<img>');
			img.attr('src', good.url);
			divImg.append(img);
			
			goodsDiv.append(divName);
			goodsDiv.append(divUrl);
			goodsDiv.append(divImg);
			
			$('.content').append(goodsDiv);
		}
	}
	
	function fullScreen(){
		$('.login-content-empty').empty();
		
		var idNew = $(this).attr('data-id');
		 
		 for (var i = 0; i<goods.length; i++)
		 {
			if (idNew == goods[i].id) {
				
				var url = goods[i].url;
				var img = $('<img>');
				img.attr('src', url);
				$('.login-content-empty').append(img);
				$('.login-popup .login-content').addClass('fullScreen');
			}
		 
		 }
	
		$('.login-popup').show();
	}
	$('.right').click(function(){
		
		currentId++;
		if (currentId >= goods.length) {
			
			currentId = 0;
		}
		
		var good = goods[currentId];
		$('.carousel-image-central').attr('src', good.url);
	});
	
	$('.left').click(function(){
		
		currentId--;
		if (currentId < 0) {
			currentId = goods.length-1;
		}
		
		var good = goods[currentId];
		$('.carousel-image-central').attr('src', good.url);
	});
	
	
});



















