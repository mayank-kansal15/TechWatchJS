import {Component} from 'angular2/core';
import {NavbarForm} from './navbar-form.component';
import {ListSearchDesc} from './list-search-desc.component';
import {ListSearchHead} from './list-search-head.component';
@Component({
    selector: 'list-search-view',
    inputs:['dataModel'],
    directives:[ListSearchDesc, ListSearchHead],
    template: `
    	<div class="panel-body list-view">
            <div class="row">
                <div class="col-sm-24">
                    <table class="table table-striped">
                    <list-search-head></list-search-head>
                    <tbody>
                		<list-search-desc [dataModel]="dataModel"></list-search-desc>
                    </tbody>
            		</table>
            	</div>
            </div>
        </div>
    `,
})
export class ListSearchView {
}