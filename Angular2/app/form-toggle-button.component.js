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
                FormToggleButton.prototype.toggleImages = function (event) {
                    var value = event.target.getAttribute('data-image') === 'true';
                    //console.log( event.target.getAttribute('data-image'));
                    this.performSearch.toggleImage(value);
                };
                FormToggleButton = __decorate([
                    core_1.Component({
                        selector: 'form-toggle-button',
                        inputs: ['buttonModel'],
                        template: "\n    <div class=\"btn-group\" data-toggle=\"buttons\">\n        <label *ngFor=\"#button of buttonModel\" class=\"btn btn-primary  {{button.activeClass}}\" id=\"{{button.uid}}\">\n                    <input type=\"radio\" name=\"{{button.buttonName}}\"  autoComplete=\"off\" id=\"{{button.labelName}}\" (click)=\"changeView($event)\" />\n                    {{button.labelName}}\n                </label>\n    </div>\n    <div class=\"btn-group toggle-images\" data-toggle=\"buttons\">\n        <label  class=\"btn btn-primary\">\n            <input type=\"radio\" data-image=\"true\" name=\"image-visibility\" id=\"option3\" autocomplete=\"off\" checked (click)=\"toggleImages($event)\">\n            Show Images\n        </label>\n        <label  class=\"btn btn-primary active\">\n            <input type=\"radio\" data-image=\"false\" name=\"image-visibility\" id=\"option4\" autocomplete=\"off\" (click)=\"toggleImages($event)\"> \n            Hide Images\n        </label>\n    </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [perform_search_service_1.PerformSearchService, router_1.Router])
                ], FormToggleButton);
                return FormToggleButton;
            })();
            exports_1("FormToggleButton", FormToggleButton);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiRm9ybVRvZ2dsZUJ1dHRvbiIsIkZvcm1Ub2dnbGVCdXR0b24uY29uc3RydWN0b3IiLCJGb3JtVG9nZ2xlQnV0dG9uLmNoYW5nZVZpZXciLCJGb3JtVG9nZ2xlQnV0dG9uLnRvZ2dsZUltYWdlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBdUJDQSwwQkFDUUEsYUFBa0NBLEVBQzNCQSxPQUFlQTtvQkFEdEJDLGtCQUFhQSxHQUFiQSxhQUFhQSxDQUFxQkE7b0JBQzNCQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFRQTtnQkFDNUJBLENBQUNBO2dCQUNIRCxxQ0FBVUEsR0FBVkEsVUFBV0EsS0FBS0E7b0JBQ2ZFLElBQUlBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBO29CQUM1QkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsV0FBV0EsS0FBR0EsTUFBTUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ3JCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFFQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBO29CQUNqREEsQ0FBQ0E7b0JBQUFBLElBQUlBLENBQUNBLEVBQUVBLENBQUFBLENBQUNBLFdBQVdBLEtBQUtBLE1BQU1BLENBQUNBLENBQUFBLENBQUNBO3dCQUM3QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBRUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDakRBLENBQUNBO2dCQUVSQSxDQUFDQTtnQkFDRUYsdUNBQVlBLEdBQVpBLFVBQWFBLEtBQUtBO29CQUNkRyxJQUFJQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQSxZQUFZQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxNQUFNQSxDQUFDQTtvQkFDL0RBLHdEQUF3REE7b0JBQ3hEQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxXQUFXQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQXhDTEg7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsb0JBQW9CQTt3QkFDOUJBLE1BQU1BLEVBQUVBLENBQUNBLGFBQWFBLENBQUNBO3dCQUN2QkEsUUFBUUEsRUFBRUEscytCQWlCVEE7cUJBQ0pBLENBQUNBOztxQ0FvQkRBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0F6Q0EsQUF5Q0NBLElBQUE7WUF6Q0QsK0NBeUNDLENBQUEiLCJmaWxlIjoiZm9ybS10b2dnbGUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2VhcmNoTW9kZWwsIFBlcmZvcm1TZWFyY2hTZXJ2aWNlfSBmcm9tICcuL3BlcmZvcm0tc2VhcmNoLnNlcnZpY2UnXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmb3JtLXRvZ2dsZS1idXR0b24nLFxuICAgIGlucHV0cyA6WydidXR0b25Nb2RlbCddLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxuICAgICAgICA8bGFiZWwgKm5nRm9yPVwiI2J1dHRvbiBvZiBidXR0b25Nb2RlbFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5ICB7e2J1dHRvbi5hY3RpdmVDbGFzc319XCIgaWQ9XCJ7e2J1dHRvbi51aWR9fVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInt7YnV0dG9uLmJ1dHRvbk5hbWV9fVwiICBhdXRvQ29tcGxldGU9XCJvZmZcIiBpZD1cInt7YnV0dG9uLmxhYmVsTmFtZX19XCIgKGNsaWNrKT1cImNoYW5nZVZpZXcoJGV2ZW50KVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHt7YnV0dG9uLmxhYmVsTmFtZX19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIHRvZ2dsZS1pbWFnZXNcIiBkYXRhLXRvZ2dsZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgPGxhYmVsICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGRhdGEtaW1hZ2U9XCJ0cnVlXCIgbmFtZT1cImltYWdlLXZpc2liaWxpdHlcIiBpZD1cIm9wdGlvbjNcIiBhdXRvY29tcGxldGU9XCJvZmZcIiBjaGVja2VkIChjbGljayk9XCJ0b2dnbGVJbWFnZXMoJGV2ZW50KVwiPlxuICAgICAgICAgICAgU2hvdyBJbWFnZXNcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBhY3RpdmVcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBkYXRhLWltYWdlPVwiZmFsc2VcIiBuYW1lPVwiaW1hZ2UtdmlzaWJpbGl0eVwiIGlkPVwib3B0aW9uNFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIChjbGljayk9XCJ0b2dnbGVJbWFnZXMoJGV2ZW50KVwiPiBcbiAgICAgICAgICAgIEhpZGUgSW1hZ2VzXG4gICAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVRvZ2dsZUJ1dHRvbiB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBwZXJmb3JtU2VhcmNoOlBlcmZvcm1TZWFyY2hTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlclxuXHQpe31cblx0Y2hhbmdlVmlldyhldmVudCl7XG5cdFx0bGV0IGN1cnJlbnRFbGVtID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgICAgICBpZihjdXJyZW50RWxlbT09PSdncmlkJyl7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoIFsnLi9HcmlkU2VhcmNoVmlldyddKTsgICAgXG4gICAgICAgIH1lbHNlIGlmKGN1cnJlbnRFbGVtID09PSAnbGlzdCcpe1xuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKCBbJy4vTGlzdFNlYXJjaFZpZXcnXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG5cdH1cbiAgICB0b2dnbGVJbWFnZXMoZXZlbnQpe1xuICAgICAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlJykgPT09ICd0cnVlJztcbiAgICAgICAgLy9jb25zb2xlLmxvZyggZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZScpKTtcbiAgICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoLnRvZ2dsZUltYWdlKHZhbHVlKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
