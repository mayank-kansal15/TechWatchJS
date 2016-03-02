import {Component} from 'angular2/core';
import {PanelHeadingView} from './panel-heading.view';
import {GridSearchView} from './grid-search.view';
import {ListSearchView} from './list-search.view';
import {SearchModel, PerformSearchService} from './perform-search.service'

@Component({
    selector: 'my-app',
    directives:[PanelHeadingView, GridSearchView, ListSearchView],
    template: `
		    <div class="myApp">
		    <nav class="navbar navbar-inverse">
			    <div class="container">
			        <div class="navbar-header">
			        <div id="navbar" class="navbar-collapse collapse">
			            <ul class="nav navbar-nav">
						    <li class="active"><a href=#>Home</a></li>
			            </ul>
			        </div>
			        </div>
			    </div>
			</nav>
				<div class="container">
				<div class="dashboard">
				    <div class="row">
				        <div class="col-sm-24">
						<div class="panel panel-default">
							<panel-heading [buttonModel]="toggleButtonModel"></panel-heading>
							<div *ngIf="searchService.SearchModelObject.gridView">
								<grid-search-view *ngFor="#dataObj of searchService.SearchModelObject.searchDataUpdated" [dataModel]="dataObj"></grid-search-view>
							</div>
		        			<div *ngIf="searchService.SearchModelObject.listView">
		        				<list-search-view *ngFor="#dataObj of searchService.SearchModelObject.searchDataUpdated" [dataModel]="dataObj"></list-search-view>
		        			</div>
						</div>
					</div>
				</div>
				</div>
				</div>
			</div>
    `,
})
export class AppComponent {
	constructor(
        public searchService:PerformSearchService
    ){
		console.log(searchService.SearchModelObject.searchDataUpdated)
    }
	toggleButtonModel = [
		{"activeClass":"active", "buttonName" : "options", "uid" : "option1", "labelName" :"grid"},
		{"activeClass":"", "buttonName" : "options", "uid" : "option2", "labelName" : "list"}
	];
}
