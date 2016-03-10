System.register(['angular2/core', 'angular2/router', './app.component', './home.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_component_1, home_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [app_component_1.AppDataComponent, router_1.ROUTER_DIRECTIVES],
                        template: "\n        <nav class=\"navbar navbar-inverse\">\n    \t    <div class=\"container\">\n    \t        <div class=\"navbar-header\">\n    \t        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n    \t            <ul class=\"nav navbar-nav\">\n    \t\t\t\t    <li class=\"active\">\n    \t\t\t\t    \t<a [routerLink]=\"['HomeComponent']\">Home</a>\n    \t\t\t\t    </li>\n    \t\t\t\t    <li><a [routerLink]=\"['AppDataComponent/GridSearchView']\">Data</a></li>\n    \t            </ul>\n    \t        </div>\n    \t        </div>\n    \t    </div>\n    \t</nav>\n\t\t<router-outlet></router-outlet>  \t \n    ",
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'HomeComponent', component: home_component_1.HomeComponent },
                        { path: '/', name: 'HomeComponent', component: home_component_1.HomeComponent },
                        { path: '/data/...', name: 'AppDataComponent', component: app_component_1.AppDataComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUudmlldy50cyJdLCJuYW1lcyI6WyJBcHBDb21wb25lbnQiLCJBcHBDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtnQkEyQkFDLENBQUNBO2dCQTNCREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxVQUFVQSxFQUFDQSxDQUFDQSxnQ0FBZ0JBLEVBQUVBLDBCQUFpQkEsQ0FBQ0E7d0JBQ2hEQSxRQUFRQSxFQUFFQSwwbUJBZ0JUQTtxQkFDSkEsQ0FBQ0E7b0JBQ0RBLG9CQUFXQSxDQUFDQTt3QkFDWkEsRUFBQ0EsSUFBSUEsRUFBQ0EsT0FBT0EsRUFBRUEsSUFBSUEsRUFBRUEsZUFBZUEsRUFBRUEsU0FBU0EsRUFBRUEsOEJBQWFBLEVBQUNBO3dCQUMvREEsRUFBQ0EsSUFBSUEsRUFBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsZUFBZUEsRUFBRUEsU0FBU0EsRUFBRUEsOEJBQWFBLEVBQUNBO3dCQUMzREEsRUFBQ0EsSUFBSUEsRUFBQ0EsV0FBV0EsRUFBRUEsSUFBSUEsRUFBRUEsa0JBQWtCQSxFQUFFQSxTQUFTQSxFQUFFQSxnQ0FBZ0JBLEVBQUNBO3FCQUN6RUEsQ0FBQ0E7O2lDQUVEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBM0JBLEFBMkJDQSxJQUFBO1lBM0JELHVDQTJCQyxDQUFBIiwiZmlsZSI6ImhvbWUudmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtBcHBEYXRhQ29tcG9uZW50fSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7U2VhcmNoTW9kZWwsIFBlcmZvcm1TZWFyY2hTZXJ2aWNlfSBmcm9tICcuL3BlcmZvcm0tc2VhcmNoLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICBkaXJlY3RpdmVzOltBcHBEYXRhQ29tcG9uZW50LCBST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItaW52ZXJzZVwiPlxuICAgIFx0ICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICBcdCAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzPVwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXCI+XG4gICAgXHQgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgIFx0XHRcdFx0ICAgIDxsaSBjbGFzcz1cImFjdGl2ZVwiPlxuICAgIFx0XHRcdFx0ICAgIFx0PGEgW3JvdXRlckxpbmtdPVwiWydIb21lQ29tcG9uZW50J11cIj5Ib21lPC9hPlxuICAgIFx0XHRcdFx0ICAgIDwvbGk+XG4gICAgXHRcdFx0XHQgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnQXBwRGF0YUNvbXBvbmVudC9HcmlkU2VhcmNoVmlldyddXCI+RGF0YTwvYT48L2xpPlxuICAgIFx0ICAgICAgICAgICAgPC91bD5cbiAgICBcdCAgICAgICAgPC9kaXY+XG4gICAgXHQgICAgICAgIDwvZGl2PlxuICAgIFx0ICAgIDwvZGl2PlxuICAgIFx0PC9uYXY+XG5cdFx0PHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PiAgXHQgXG4gICAgYCxcbn0pXG5AUm91dGVDb25maWcoW1xuXHR7cGF0aDonL2hvbWUnLCBuYW1lOiAnSG9tZUNvbXBvbmVudCcsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudH0sXG5cdHtwYXRoOicvJywgbmFtZTogJ0hvbWVDb21wb25lbnQnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9LFxuXHR7cGF0aDonL2RhdGEvLi4uJywgbmFtZTogJ0FwcERhdGFDb21wb25lbnQnLCBjb21wb25lbnQ6IEFwcERhdGFDb21wb25lbnR9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
