import {Component} from 'angular2/core';
import {SearchModel, PerformSearchService} from './perform-search.service'


@Component({
    selector: 'form-toggle-button',
    inputs :['buttonModel']
    template: `
        <label *ngFor="#button of buttonModel" class="btn btn-primary  {{button.activeClass}}" id="{{button.uid}}">
                    <input type="radio" name="{{button.buttonName}}"  autoComplete="off" id="{{button.labelName}}" (click)="changeView($event)" />
                    {{button.labelName}}
                </label>
    `,
})
export class FormToggleButton {
	constructor(
		public performSearch:PerformSearchService;
	){}
	changeView(event){
		let currentElem = event.target.id;
		this.performSearch.SearchModelObject.toggleView(currentElem);
	}
}
