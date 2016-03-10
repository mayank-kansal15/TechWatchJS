import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./home.view";
import {PerformSearchService} from "./perform-search.service"
import {ROUTER_PROVIDERS} from 'angular2/router';
bootstrap(AppComponent, [PerformSearchService, ROUTER_PROVIDERS]);
