System.register(['angular2/core', './perform-search.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, perform_search_service_1, router_1;
    var FormToggleButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FormToggleButton = (function () {
                function FormToggleButton(performSearch, _router) {
                    this.performSearch = performSearch;
                    this._router = _router;
                }
                FormToggleButton.prototype.changeView = function (event) {
                    var currentElem = event.target.id;
                    if (currentElem === 'grid') {
                        this._router.navigate(['./GridSearchView']);
                    }
                    else if (currentElem === 'list') {
                        this._router.navigate(['./ListSearchView']);
                    }
                };
                FormToggleButton = __decorate([
                    core_1.Component({
                        selector: 'form-toggle-button',
                        inputs: ['buttonModel'],
                        template: "\n        <label *ngFor=\"#button of buttonModel\" class=\"btn btn-primary  {{button.activeClass}}\" id=\"{{button.uid}}\">\n                    <input type=\"radio\" name=\"{{button.buttonName}}\"  autoComplete=\"off\" id=\"{{button.labelName}}\" (click)=\"changeView($event)\" />\n                    {{button.labelName}}\n                </label>\n    ",
                    }), 
                    __metadata('design:paramtypes', [perform_search_service_1.PerformSearchService, router_1.Router])
                ], FormToggleButton);
                return FormToggleButton;
            })();
            exports_1("FormToggleButton", FormToggleButton);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiRm9ybVRvZ2dsZUJ1dHRvbiIsIkZvcm1Ub2dnbGVCdXR0b24uY29uc3RydWN0b3IiLCJGb3JtVG9nZ2xlQnV0dG9uLmNoYW5nZVZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQVdDQSwwQkFDUUEsYUFBa0NBLEVBQzNCQSxPQUFlQTtvQkFEdEJDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFxQkE7b0JBQzNCQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtnQkFDNUJBLENBQUNBO2dCQUNIRCxxQ0FBVUEsR0FBVkEsVUFBV0EsS0FBS0E7b0JBQ2ZFLElBQUlBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBO29CQUM1QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsV0FBV0EsS0FBR0EsTUFBTUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ3JCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFFQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBO29CQUNqREEsQ0FBQ0E7b0JBQUFBLElBQUlBLENBQUNBLEVBQUVBLENBQUFBLENBQUNBLFdBQVdBLEtBQUtBLE1BQU1BLENBQUNBLENBQUFBLENBQUNBO3dCQUM3QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBRUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDakRBLENBQUNBO2dCQUVSQSxDQUFDQTtnQkF2QkZGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLG9CQUFvQkE7d0JBQzlCQSxNQUFNQSxFQUFFQSxDQUFDQSxhQUFhQSxDQUFDQTt3QkFDdkJBLFFBQVFBLEVBQUVBLHFXQUtUQTtxQkFDSkEsQ0FBQ0E7O3FDQWVEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBeEJBLEFBd0JDQSxJQUFBO1lBeEJELCtDQXdCQyxDQUFBIiwiZmlsZSI6ImZvcm0tdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1NlYXJjaE1vZGVsLCBQZXJmb3JtU2VhcmNoU2VydmljZX0gZnJvbSAnLi9wZXJmb3JtLXNlYXJjaC5zZXJ2aWNlJ1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9ybS10b2dnbGUtYnV0dG9uJyxcbiAgICBpbnB1dHMgOlsnYnV0dG9uTW9kZWwnXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bGFiZWwgKm5nRm9yPVwiI2J1dHRvbiBvZiBidXR0b25Nb2RlbFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5ICB7e2J1dHRvbi5hY3RpdmVDbGFzc319XCIgaWQ9XCJ7e2J1dHRvbi51aWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInt7YnV0dG9uLmJ1dHRvbk5hbWV9fVwiICBhdXRvQ29tcGxldGU9XCJvZmZcIiBpZD1cInt7YnV0dG9uLmxhYmVsTmFtZX19XCIgKGNsaWNrKT1cImNoYW5nZVZpZXcoJGV2ZW50KVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHt7YnV0dG9uLmxhYmVsTmFtZX19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtVG9nZ2xlQnV0dG9uIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIHBlcmZvcm1TZWFyY2g6UGVyZm9ybVNlYXJjaFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG5cdCl7fVxuXHRjaGFuZ2VWaWV3KGV2ZW50KXtcblx0XHRsZXQgY3VycmVudEVsZW0gPSBldmVudC50YXJnZXQuaWQ7XG4gICAgICAgIGlmKGN1cnJlbnRFbGVtPT09J2dyaWQnKXtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZSggWycuL0dyaWRTZWFyY2hWaWV3J10pOyAgICBcbiAgICAgICAgfWVsc2UgaWYoY3VycmVudEVsZW0gPT09ICdsaXN0Jyl7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoIFsnLi9MaXN0U2VhcmNoVmlldyddKTtcbiAgICAgICAgfVxuICAgICAgICBcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
