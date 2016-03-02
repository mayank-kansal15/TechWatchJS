import {Component} from 'angular2/core';

@Component({
    selector: 'list-search-desc',
    inputs:['dataModel'],
    template: `
    	<tr>
			<td>
			    <input type="checkbox" id="blankCheckboxx" value="option1" aria-label="..." />
			</td>
			<td>
			    {{dataModel.email}}
			</td>
			<td>
			    <p>
			        <a data-toggle="collapse" href="#collapseExample3" (click)="toggleShowFilter()">
			            More
			        </a>
			    </p>
			    <div class="{{showFilter}}">
			        <p>
			            {{dataModel.details}}
			        </p>
			    </div>
			</td>
			</tr>
    `,
})
export class ListSearchDesc {
	showFilter = 'hidden';
	toggleShowFilter(){
		this.showFilter === 'hidden' ? this.showFilter = 'show' : this.showFilter = 'hidden';
	}
}