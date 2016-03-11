var UtilityFunctions = {

	bindEvents: function(){
		console.log('bindEvents called');
		var self = this;
		$('.search').keyup(function(){self.performSearch($(this).val())});
		$('.toggle-button label').click(function(){self.toggleView($(this).data('output'))});
	},
	generateData : function(data){
		console.log('generateData called');
		var gridBlock = $('.grid-view .grid-block.dummy-block-element');
		var listBlock = $('.list-view table tbody tr');
		$('.grid-view .grid-block').not('.grid-view .grid-block.dummy-block-element').remove();
		$.each(data, function(i, obj){
			gridBlockElement = gridBlock.clone();
			listBlockElement = listBlock.clone();
			gridBlockElement.removeClass('dummy-block-element');
			gridBlockElement.attr('id', obj.id);
			gridBlockElement.find('img').attr('src', 'http://lorempixel.com/300/200/?random' + Math.random());
			gridBlockElement.find('.expand-button').attr('href', '#text' + obj.id);
			gridBlockElement.find('.expand-text').attr('id', 'text' + obj.id);
			listBlockElement.find('.expand-button').attr('href', '#textList' + obj.id);
			listBlockElement.find('.expand-text').attr('id', 'textList' + obj.id);
			gridBlockElement.find('h3').text(obj.email);
			listBlockElement.find('p.title').text(obj.email);
			gridBlockElement.find('.description').text(obj.details);
			listBlockElement.find('.description').text(obj.details);
			$('.grid-view .row').append(gridBlockElement);
		});

		console.log('done');

	},
	performSearch : function(query){
		var filterData = searchDummyData.filter(function(obj) {
		    return obj.email.indexOf(query) != -1;
		});
		this.generateData(filterData);
	},
	toggleView : function(view){
		if(view === 'grid'){
			$('.grid-view').show();
			$('.list-view').hide();
		}else{
			$('.grid-view').hide();
			$('.list-view').show();
		}
	}
}
$(document).ready(function(){
	UtilityFunctions.bindEvents();
	var data = searchDummyData.slice(0, 99);
	UtilityFunctions.generateData(data);
})