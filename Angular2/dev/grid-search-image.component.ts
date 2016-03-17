import {Component} from 'angular2/core';
import {SearchModel, PerformSearchService} from './perform-search.service'

@Component({
    selector: 'grid-search-image',
    template: `
    	<img *ngIf="performSearch.SearchModelObject.imageVisibility" alt="100%x200" src={{imageURL}} data-holder-rendered="true" style="height: '200px'; width: '100%'; display: 'block'"/>
    `,
})
export class GridSearchImage {
	constructor(
		public performSearch:PerformSearchService
	){}
	imageURL = "http://lorempixel.com/300/200/?random" + Math.random();
}
