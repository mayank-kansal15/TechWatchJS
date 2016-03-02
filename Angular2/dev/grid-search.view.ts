import {Component} from 'angular2/core';
import {NavbarForm} from './navbar-form.component';
import {GridSearchDesc} from './grid-search-desc';
import {GridSearchImage} from './grid-search-image.component';
@Component({
    selector: 'grid-search-view',
    inputs : ['dataModel', 'viewModel'],
    directives:[GridSearchDesc, GridSearchImage],
    template: `
    	<div class="col-sm-12 col-md-8">
			<div class="thumbnail">
				<grid-search-image></grid-search-image>
				<grid-search-desc [details]="dataModel"></grid-search-desc>
			</div>
		</div>
    `,
})
export class GridSearchView {
}