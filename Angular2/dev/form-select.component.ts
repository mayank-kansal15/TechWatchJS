import {Component} from 'angular2/core';
import {PerformSearchService} from './perform-search.service'
@Component({
    selector: 'form-select',
    template: `
        <div class="form-group">
        <select class="form-control" (change)="handleQuantityChange($event)">
        <option *ngFor="#option of optionList">{{option}}</option>
        </select>
        </div>
    `,
})
export class FormSelectComponent {
	constructor(
		public performSearch:PerformSearchService;
	){}
	 optionList = [200,10, 50 , 100, 200, 500, 1000, 2500];
	 handleQuantityChange(event){
	 	currentValue = event.target.value;
	 	this.performSearch.changeDataQuantity(currentValue);
	 }
}
