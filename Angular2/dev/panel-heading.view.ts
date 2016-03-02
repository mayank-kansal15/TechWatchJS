import {Component} from 'angular2/core';
import {NavbarForm} from './navbar-form.component';

@Component({
    selector: 'panel-heading',
    directives:[NavbarForm],
    inputs:['buttonModel'],
    template: `
    	<div class="panel-heading">
            <ul class="list-inline clearfix">
            <li>
            <navbar-form [buttonModel]="buttonModel"></navbar-form>
            </li>
            </ul>
        </div>
    `,
})
export class PanelHeadingView {
}