import {Component} from 'angular2/core';

@Component({
    selector: 'grid-search-image',
    template: `
    	<img alt="100%x200" src={{imageURL}} data-holder-rendered="true" style="height: '200px'; width: '100%'; display: 'block'"/>
    `,
})
export class GridSearchImage {
	imageURL = "http://lorempixel.com/300/200/?random" + Math.random();
}
