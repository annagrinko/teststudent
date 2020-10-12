$(document).ready(function(){
	
	var goods = [
		{
			name: 'Blond',
			url: 'http...'
		},
		{
			name: 'Red',
			url: 'http..2'
		},
	];
	
	$('.login-popup').hide();
	
	$('.login-popup .close').click(function(){
		$('.login-popup').hide();
	});
	
	
	
	$('.goods.first .add').click(function(){
		var newName = $('.goods.first .new-image-name').val();
		var newUrl = $('.goods.first .new-image-url').val();
		
		var good = {
			name: newName,
			url: newUrl
		};
		goods.push(good);
		drawGoods();
	});
	
	
	$('.left-menu .filter').keyup(function (){
		drawGoods();
	});
	
	
	function drawGoods(){
		$('.content .goods:not(.first)').remove();
	    //filtr goods
		var copyGoods = filterGoods(goods);
		//sort goods
	    copyGoods = sortGoods(copyGoods);
		
			
		for	(var i = 0; i< copyGoods.length; i++){
			var good = copyGoods[i];
			var goodsDiv = $('<div>');
		
			goodsDiv.addClass('goods');
			
			var divName = $('<div>');
			divName.text(good.name);
			
			var divImg = $('<div>');
			divImg.addClass('image');
			var img = $('<img>');
			img.attr('src', good.url);
			divImg.append(img);
			
			goodsDiv.append(divName);
			goodsDiv.append(divImg);
			
			$('.content').append(goodsDiv);
		}
		
	
	}
	
	function sortGoods(oldGoods){
		var copyGoods = oldGoods.sort(function(a,b){
			if (a.name > b.name){
				return 1;
			}
			if (a.name < b.name){
				return -1;
			}
			return 0;
		});
		
		return copyGoods;
	}
	
	
	function filterGoods(oldGoods){
		var Filter = $('.left-menu .filter').val();
		
		var newGoods = oldGoods.filter(function (good){
			if (good.name.indexOf(Filter) > -1){
				return true;
			}
			
			return false;
		});
		
		return newGoods;
	}
	
});

