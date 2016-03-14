var UtilityFunctions = {
	searchDataComplete : [],
	searchData : [],
	view : 'grid',
	query: '',
	bindEvents: function(){
		console.log('bindEvents called');
		var self = this;
		$('.search').keyup(function(){self.performSearch($(this).val())});
		$('.toggle-button label').click(function(){self.toggleView($(this).data('output'))});
		$('.quantity-control').change(function(){self.handleChangeQuantity($(this).val())})
	},
	generateDataGrid : function(){
		console.log('generateData called');
		var data = this.searchData;
		var gridBlock = $('.grid-view .grid-block.dummy-block-element');
		$('.grid-view .grid-block').not('.grid-view .grid-block.dummy-block-element').remove();
		$.each(data, function(i, obj){
			gridBlockElement = gridBlock.clone();
			gridBlockElement.removeClass('dummy-block-element');
			gridBlockElement.attr('id', obj.id);
			gridBlockElement.find('img').attr('src', 'http://lorempixel.com/300/200/?random' + Math.random());
			gridBlockElement.find('.expand-button').attr('href', '#text' + obj.id);
			gridBlockElement.find('.expand-text').attr('id', 'text' + obj.id);
			gridBlockElement.find('h3').text(obj.email);
			gridBlockElement.find('.description').text(obj.details);
			$('.grid-view .row').append(gridBlockElement);
		});
		console.log('done');
	},
	generateDataList : function(){
		console.log('generateDataList called');
		var data = this.searchData;
		var listBlock = $('.list-view table tbody tr:first-child');
		$('.list-view table tbody tr').not('.list-view table tbody tr:first-child').remove();
		$.each(data, function(i, obj){
			listBlockElement = listBlock.clone();
			listBlockElement.find('.expand-button').attr('href', '#textList' + obj.id);
			listBlockElement.find('.expand-text').attr('id', 'textList' + obj.id);
			listBlockElement.find('p.title').text(obj.email);
			listBlockElement.find('.description').text(obj.details);
			$('.list-view table tbody').append(listBlockElement);
		});
		console.log('done');
	},
	performSearch : function(query){
		this.query = query;
		var filterData = this.searchDataComplete.filter(function(obj) {
		    return obj.email.indexOf(query) != -1;
		});
		this.searchData = filterData;
		this.view === 'grid' ? this.generateDataGrid() : this.generateDataList();
	},
	toggleView : function(view){
		if(view === 'grid'){
			this.view = 'grid';
			$('.grid-view').show();
			$('.list-view').hide();
			this.generateDataGrid();
		}else{
			this.view = 'list';
			$('.grid-view').hide();
			$('.list-view').show();
			this.generateDataList();
		}
	},
	handleChangeQuantity : function(quantity){
		this.searchDataComplete = searchDummyData.slice(0, $('.quantity-control').val() -1 );
		this.performSearch(this.query);
	}
}
$(document).ready(function(){
	UtilityFunctions.bindEvents();
	$('.quantity-control').val('200');
	var data = searchDummyData.slice(0, 199);
	UtilityFunctions.searchData = data;
	UtilityFunctions.searchDataComplete = data;
	UtilityFunctions.generateDataGrid();
})