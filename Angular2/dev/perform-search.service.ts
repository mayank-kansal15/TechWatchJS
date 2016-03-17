export class SearchModel{
		dataQuantity:number = 200;
		searchData:Array;
        searchDataComplete:Array = searchDummyData;
        searchDataUpdated:Array =searchDummyData.slice(0, 199);
        gridView:boolean = true;
        listView:boolean = false;
        imageVisibility:boolean = false;
        toggleView(value){
        	console.log(value);
        	if(value === 'grid'){
        		this.gridView = true;
        		this.listView = false;
        	}else if(value === 'list'){
        		this.gridView = false;
        		this.listView = true;
        	}
		}
}
export class PerformSearchService{
	constructor(){
		searchQuery:string = '';
	}
	SearchModelObject = new SearchModel();
	filterData(query){
		newSearchData = [];
		this.SearchModelObject.searchDataComplete.map(obj => {
			if(obj.email.indexOf(query) > -1){
				newSearchData.push(obj);
			}
		})
		this.SearchModelObject.searchDataUpdated = newSearchData;
	}
	changeDataQuantity(value){
		value = parseInt(value);
		this.SearchModelObject.searchDataUpdated = this.SearchModelObject.searchDataComplete.slice(0, value -1);
	}
	toggleImage(value){
		this.SearchModelObject.imageVisibility = value;
	}

}