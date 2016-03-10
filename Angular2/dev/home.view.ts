import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AppDataComponent} from './app.component';
import {HomeComponent} from './home.component';
import {SearchModel, PerformSearchService} from './perform-search.service'

@Component({
    selector: 'my-app',
    directives:[AppDataComponent, ROUTER_DIRECTIVES],
    template: `
        <nav class="navbar navbar-inverse">
    	    <div class="container">
    	        <div class="navbar-header">
    	        <div id="navbar" class="navbar-collapse collapse">
    	            <ul class="nav navbar-nav">
    				    <li class="active">
    				    	<a [routerLink]="['HomeComponent']">Home</a>
    				    </li>
    				    <li><a [routerLink]="['AppDataComponent/GridSearchView']">Data</a></li>
    	            </ul>
    	        </div>
    	        </div>
    	    </div>
    	</nav>
		<router-outlet></router-outlet>  	 
    `,
})
@RouteConfig([
	{path:'/home', name: 'HomeComponent', component: HomeComponent},
	{path:'/', name: 'HomeComponent', component: HomeComponent},
	{path:'/data/...', name: 'AppDataComponent', component: AppDataComponent}
])
export class AppComponent {
}