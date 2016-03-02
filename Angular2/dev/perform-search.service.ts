export class SearchModel{
		searchData:Array;
        searchDataComplete:Array = searchDummyData;
        searchDataUpdated:Array =searchDummyData.slice(0, 199);
        gridView:boolean = true;
        listView:boolean = false;
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


}