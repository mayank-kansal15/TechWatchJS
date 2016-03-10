import {Component} from 'angular2/core';
import {NavbarForm} from './navbar-form.component';
import {GridSearchDesc} from './grid-search-desc';
import {GridSearchImage} from './grid-search-image.component';
import {SearchModel, PerformSearchService} from './perform-search.service'
@Component({
    selector: 'grid-search-view',
    directives:[GridSearchDesc, GridSearchImage],
    template: `
    	<div *ngFor="#dataObj of searchService.SearchModelObject.searchDataUpdated" class="col-sm-12 col-md-8">
			<div class="thumbnail">
				<grid-search-image></grid-search-image>
				<grid-search-desc [details]="dataObj"></grid-search-desc>
			</div>
		</div>
    `,
})
export class GridSearchView {
    constructor(
        public searchService:PerformSearchService
    ){}
}