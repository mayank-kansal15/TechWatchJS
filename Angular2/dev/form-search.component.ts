import {Component} from 'angular2/core';
import {SearchModel, PerformSearchService} from './perform-search.service'

@Component({
    selector: 'form-search',
    template: `
        <div class="form-group">
		<input type="search" ref="searchField" (keyup)="handleChange($event)" class="search form-control"/>
		</div>
    `,
})
export class FormSearchComponent {
	constructor(
		public performSearch:PerformSearchService;
	){}
	handleChange(event){
		console.log(event.target.value);
		this.performSearch.filterData(event.target.value));
	}
}
