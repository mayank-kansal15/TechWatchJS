import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {PerformSearchService} from "./perform-search.service"

bootstrap(AppComponent, [PerformSearchService]);
