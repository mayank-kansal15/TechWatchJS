import {Component} from 'angular2/core';

@Component({
    selector: 'form-select',
    template: `
        <div class="form-group">
        <select class="form-control">
        <option *ngFor="#option of optionList">{{option}}</option>
        </select>
        </div>
    `,
})
export class FormSelectComponent {
	 optionList = [1, 2 , 3, 4, 5, 6, 7 ,8 ,9];
}
