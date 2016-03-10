import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {PanelHeadingView} from './panel-heading.view';
import {GridSearchView} from './grid-search.view';
import {ListSearchView} from './list-search.view';
import {SearchModel, PerformSearchService} from './perform-search.service'

@Component({
    selector: 'my-app-data',
    directives:[PanelHeadingView, GridSearchView, ListSearchView, ROUTER_DIRECTIVES],
    template: `
		    <div class="myApp">
				<div class="container">
				<div class="dashboard">
				    <div class="row">
				        <div class="col-sm-24">
						<div class="panel panel-default">
							<panel-heading [buttonModel]="toggleButtonModel"></panel-heading>
							<router-outlet></router-outlet>
						</div>
					</div>
				</div>
				</div>
				</div>
			</div>
    `,
})
@RouteConfig([
  {path:'/grid-search/', as: 'GridSearchView', component: GridSearchView}
  {path:'/list-search/', as: 'ListSearchView', component: ListSearchView}
])
export class AppDataComponent {
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
