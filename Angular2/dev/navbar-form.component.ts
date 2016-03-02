import {Component} from 'angular2/core';
import {FormToggleButton} from './form-toggle-button.component';
import {FormSearchComponent} from './form-search.component';
import {FormSelectComponent} from './form-select.component';

@Component({
    selector: 'navbar-form',
    directives:[FormToggleButton, FormSearchComponent, FormSelectComponent],
    inputs:['buttonModel'],
    template: `
    	<div class="navbar-form">
			<form-select></form-select>
        	<form-search placeholderText="search"></form-search>
			<div class="btn-group" data-toggle="buttons">
		    	<form-toggle-button [buttonModel]="buttonModel"></form-toggle-button>	
			</div>
		</div>
    `,
})
export class NavbarForm {
}