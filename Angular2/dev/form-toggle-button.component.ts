import {Component} from 'angular2/core';
import {SearchModel, PerformSearchService} from './perform-search.service'
import {Router} from 'angular2/router';

@Component({
    selector: 'form-toggle-button',
    inputs :['buttonModel'],
    template: `
        <label *ngFor="#button of buttonModel" class="btn btn-primary  {{button.activeClass}}" id="{{button.uid}}">
                    <input type="radio" name="{{button.buttonName}}"  autoComplete="off" id="{{button.labelName}}" (click)="changeView($event)" />
                    {{button.labelName}}
                </label>
    `,
})
export class FormToggleButton {
	constructor(
		public performSearch:PerformSearchService,
        private _router: Router
	){}
	changeView(event){
		let currentElem = event.target.id;
        if(currentElem==='grid'){
            this._router.navigate( ['./GridSearchView']);    
        }else if(currentElem === 'list'){
            this._router.navigate( ['./ListSearchView']);
        }
        
	}
}
