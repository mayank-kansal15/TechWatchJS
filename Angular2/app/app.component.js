System.register(['angular2/core', 'angular2/router', './panel-heading.view', './grid-search.view', './list-search.view', './perform-search.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, panel_heading_view_1, grid_search_view_1, list_search_view_1, perform_search_service_1;
    var AppDataComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (panel_heading_view_1_1) {
                panel_heading_view_1 = panel_heading_view_1_1;
            },
            function (grid_search_view_1_1) {
                grid_search_view_1 = grid_search_view_1_1;
            },
            function (list_search_view_1_1) {
                list_search_view_1 = list_search_view_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            }],
        execute: function() {
            AppDataComponent = (function () {
                function AppDataComponent(searchService) {
                    this.searchService = searchService;
                    this.toggleButtonModel = [
                        { "activeClass": "active", "buttonName": "options", "uid": "option1", "labelName": "grid" },
                        { "activeClass": "", "buttonName": "options", "uid": "option2", "labelName": "list" }
                    ];
                    console.log(searchService.SearchModelObject.searchDataUpdated);
                }
                AppDataComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app-data',
                        directives: [panel_heading_view_1.PanelHeadingView, grid_search_view_1.GridSearchView, list_search_view_1.ListSearchView, router_1.ROUTER_DIRECTIVES],
                        template: "\n\t\t    <div class=\"myApp\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"dashboard\">\n\t\t\t\t    <div class=\"row\">\n\t\t\t\t        <div class=\"col-sm-24\">\n\t\t\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t\t\t<panel-heading [buttonModel]=\"toggleButtonModel\"></panel-heading>\n\t\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n    ",
                    }),
                    router_1.RouteConfig([
                        { path: '/grid-search/', as: 'GridSearchView', component: grid_search_view_1.GridSearchView },
                        { path: '/list-search/', as: 'ListSearchView', component: list_search_view_1.ListSearchView }
                    ]), 
                    __metadata('design:paramtypes', [perform_search_service_1.PerformSearchService])
                ], AppDataComponent);
                return AppDataComponent;
            })();
            exports_1("AppDataComponent", AppDataComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwRGF0YUNvbXBvbmVudCIsIkFwcERhdGFDb21wb25lbnQuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQXlCQ0EsMEJBQ2NBLGFBQWtDQTtvQkFBbENDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFxQkE7b0JBSWhEQSxzQkFBaUJBLEdBQUdBO3dCQUNuQkEsRUFBQ0EsYUFBYUEsRUFBQ0EsUUFBUUEsRUFBRUEsWUFBWUEsRUFBR0EsU0FBU0EsRUFBRUEsS0FBS0EsRUFBR0EsU0FBU0EsRUFBRUEsV0FBV0EsRUFBRUEsTUFBTUEsRUFBQ0E7d0JBQzFGQSxFQUFDQSxhQUFhQSxFQUFDQSxFQUFFQSxFQUFFQSxZQUFZQSxFQUFHQSxTQUFTQSxFQUFFQSxLQUFLQSxFQUFHQSxTQUFTQSxFQUFFQSxXQUFXQSxFQUFHQSxNQUFNQSxFQUFDQTtxQkFDckZBLENBQUNBO29CQUxEQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxhQUFhQSxDQUFDQSxpQkFBaUJBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQUE7Z0JBQzVEQSxDQUFDQTtnQkE3QkxEO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGFBQWFBO3dCQUN2QkEsVUFBVUEsRUFBQ0EsQ0FBQ0EscUNBQWdCQSxFQUFFQSxpQ0FBY0EsRUFBRUEsaUNBQWNBLEVBQUVBLDBCQUFpQkEsQ0FBQ0E7d0JBQ2hGQSxRQUFRQSxFQUFFQSxnZEFlVEE7cUJBQ0pBLENBQUNBO29CQUNEQSxvQkFBV0EsQ0FBQ0E7d0JBQ1hBLEVBQUNBLElBQUlBLEVBQUNBLGVBQWVBLEVBQUVBLEVBQUVBLEVBQUVBLGdCQUFnQkEsRUFBRUEsU0FBU0EsRUFBRUEsaUNBQWNBLEVBQUNBO3dCQUN2RUEsRUFBQ0EsSUFBSUEsRUFBQ0EsZUFBZUEsRUFBRUEsRUFBRUEsRUFBRUEsZ0JBQWdCQSxFQUFFQSxTQUFTQSxFQUFFQSxpQ0FBY0EsRUFBQ0E7cUJBQ3hFQSxDQUFDQTs7cUNBV0RBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0FsQ0EsQUFrQ0NBLElBQUE7WUFsQ0QsK0NBa0NDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtQYW5lbEhlYWRpbmdWaWV3fSBmcm9tICcuL3BhbmVsLWhlYWRpbmcudmlldyc7XG5pbXBvcnQge0dyaWRTZWFyY2hWaWV3fSBmcm9tICcuL2dyaWQtc2VhcmNoLnZpZXcnO1xuaW1wb3J0IHtMaXN0U2VhcmNoVmlld30gZnJvbSAnLi9saXN0LXNlYXJjaC52aWV3JztcbmltcG9ydCB7U2VhcmNoTW9kZWwsIFBlcmZvcm1TZWFyY2hTZXJ2aWNlfSBmcm9tICcuL3BlcmZvcm0tc2VhcmNoLnNlcnZpY2UnXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwLWRhdGEnLFxuICAgIGRpcmVjdGl2ZXM6W1BhbmVsSGVhZGluZ1ZpZXcsIEdyaWRTZWFyY2hWaWV3LCBMaXN0U2VhcmNoVmlldywgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlOiBgXG5cdFx0ICAgIDxkaXYgY2xhc3M9XCJteUFwcFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJkYXNoYm9hcmRcIj5cblx0XHRcdFx0ICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTI0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuXHRcdFx0XHRcdFx0XHQ8cGFuZWwtaGVhZGluZyBbYnV0dG9uTW9kZWxdPVwidG9nZ2xlQnV0dG9uTW9kZWxcIj48L3BhbmVsLWhlYWRpbmc+XG5cdFx0XHRcdFx0XHRcdDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG4gICAgYCxcbn0pXG5AUm91dGVDb25maWcoW1xuICB7cGF0aDonL2dyaWQtc2VhcmNoLycsIGFzOiAnR3JpZFNlYXJjaFZpZXcnLCBjb21wb25lbnQ6IEdyaWRTZWFyY2hWaWV3fVxuICB7cGF0aDonL2xpc3Qtc2VhcmNoLycsIGFzOiAnTGlzdFNlYXJjaFZpZXcnLCBjb21wb25lbnQ6IExpc3RTZWFyY2hWaWV3fVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBEYXRhQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoXG4gICAgICAgIHB1YmxpYyBzZWFyY2hTZXJ2aWNlOlBlcmZvcm1TZWFyY2hTZXJ2aWNlXG4gICAgKXtcblx0XHRjb25zb2xlLmxvZyhzZWFyY2hTZXJ2aWNlLlNlYXJjaE1vZGVsT2JqZWN0LnNlYXJjaERhdGFVcGRhdGVkKVxuICAgIH1cblx0dG9nZ2xlQnV0dG9uTW9kZWwgPSBbXG5cdFx0e1wiYWN0aXZlQ2xhc3NcIjpcImFjdGl2ZVwiLCBcImJ1dHRvbk5hbWVcIiA6IFwib3B0aW9uc1wiLCBcInVpZFwiIDogXCJvcHRpb24xXCIsIFwibGFiZWxOYW1lXCIgOlwiZ3JpZFwifSxcblx0XHR7XCJhY3RpdmVDbGFzc1wiOlwiXCIsIFwiYnV0dG9uTmFtZVwiIDogXCJvcHRpb25zXCIsIFwidWlkXCIgOiBcIm9wdGlvbjJcIiwgXCJsYWJlbE5hbWVcIiA6IFwibGlzdFwifVxuXHRdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
