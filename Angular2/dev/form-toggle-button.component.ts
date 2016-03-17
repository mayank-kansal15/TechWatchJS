import {Component} from 'angular2/core';
import {SearchModel, PerformSearchService} from './perform-search.service'
import {Router} from 'angular2/router';

@Component({
    selector: 'form-toggle-button',
    inputs :['buttonModel'],
    template: `
    <div class="btn-group" data-toggle="buttons">
        <label *ngFor="#button of buttonModel" class="btn btn-primary  {{button.activeClass}}" id="{{button.uid}}">
                    <input type="radio" name="{{button.buttonName}}"  autoComplete="off" id="{{button.labelName}}" (click)="changeView($event)" />
                    {{button.labelName}}
                </label>
    </div>
    <div class="btn-group toggle-images" data-toggle="buttons">
        <label  class="btn btn-primary">
            <input type="radio" data-image="true" name="image-visibility" id="option3" autocomplete="off" checked (click)="toggleImages($event)">
            Show Images
        </label>
        <label  class="btn btn-primary active">
            <input type="radio" data-image="false" name="image-visibility" id="option4" autocomplete="off" (click)="toggleImages($event)"> 
            Hide Images
        </label>
    </div>
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
    toggleImages(event){
        let value = event.target.getAttribute('data-image') === 'true';
        //console.log( event.target.getAttribute('data-image'));
        this.performSearch.toggleImage(value);
    }
}
