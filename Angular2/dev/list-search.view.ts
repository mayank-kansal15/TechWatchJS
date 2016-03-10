import {Component} from 'angular2/core';
import {NavbarForm} from './navbar-form.component';
import {ListSearchDesc} from './list-search-desc.component';
import {ListSearchHead} from './list-search-head.component';
import {SearchModel, PerformSearchService} from './perform-search.service'
@Component({
    selector: 'list-search-view',
    directives:[ListSearchDesc, ListSearchHead],
    template: `
    	<div *ngFor="#dataObj of searchService.SearchModelObject.searchDataUpdated" class="panel-body list-view">
            <div class="row">
                <div class="col-sm-24">
                    <table class="table table-striped">
                    <list-search-head></list-search-head>
                    <tbody>
                		<list-search-desc [dataModel]="dataObj"></list-search-desc>
                    </tbody>
            		</table>
            	</div>
            </div>
        </div>
    `,
})
export class ListSearchView {
    constructor(
        public searchService:PerformSearchService
    ){}
}