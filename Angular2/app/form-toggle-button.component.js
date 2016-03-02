System.register(['angular2/core', './perform-search.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, perform_search_service_1;
    var FormToggleButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            }],
        execute: function() {
            FormToggleButton = (function () {
                function FormToggleButton(performSearch) {
                    this.performSearch = performSearch;
                }
                FormToggleButton.prototype.changeView = function (event) {
                    var currentElem = event.target.id;
                    this.performSearch.SearchModelObject.toggleView(currentElem);
                };
                FormToggleButton = __decorate([
                    core_1.Component({
                        selector: 'form-toggle-button',
                        inputs: ['buttonModel'],
                        template: "\n        <label *ngFor=\"#button of buttonModel\" class=\"btn btn-primary  {{button.activeClass}}\" id=\"{{button.uid}}\">\n                    <input type=\"radio\" name=\"{{button.buttonName}}\"  autoComplete=\"off\" id=\"{{button.labelName}}\" (click)=\"changeView($event)\" />\n                    {{button.labelName}}\n                </label>\n    ",
                    }), 
                    __metadata('design:paramtypes', [perform_search_service_1.PerformSearchService])
                ], FormToggleButton);
                return FormToggleButton;
            })();
            exports_1("FormToggleButton", FormToggleButton);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiRm9ybVRvZ2dsZUJ1dHRvbiIsIkZvcm1Ub2dnbGVCdXR0b24uY29uc3RydWN0b3IiLCJGb3JtVG9nZ2xlQnV0dG9uLmNoYW5nZVZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQVdDQSwwQkFDUUEsYUFBa0NBO29CQUFsQ0Msa0JBQWFBLEdBQWJBLGFBQWFBLENBQXFCQTtnQkFDeENBLENBQUNBO2dCQUNIRCxxQ0FBVUEsR0FBVkEsVUFBV0EsS0FBS0E7b0JBQ2ZFLElBQUlBLFdBQVdBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLENBQUNBO29CQUNsQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxVQUFVQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtnQkFDOURBLENBQUNBO2dCQWpCRkY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsb0JBQW9CQTt3QkFDOUJBLE1BQU1BLEVBQUVBLENBQUNBLGFBQWFBLENBQUNBO3dCQUN2QkEsUUFBUUEsRUFBRUEscVdBS1RBO3FCQUNKQSxDQUFDQTs7cUNBU0RBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0FsQkEsQUFrQkNBLElBQUE7WUFsQkQsK0NBa0JDLENBQUEiLCJmaWxlIjoiZm9ybS10b2dnbGUtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2VhcmNoTW9kZWwsIFBlcmZvcm1TZWFyY2hTZXJ2aWNlfSBmcm9tICcuL3BlcmZvcm0tc2VhcmNoLnNlcnZpY2UnXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmb3JtLXRvZ2dsZS1idXR0b24nLFxuICAgIGlucHV0cyA6WydidXR0b25Nb2RlbCddXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGxhYmVsICpuZ0Zvcj1cIiNidXR0b24gb2YgYnV0dG9uTW9kZWxcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSAge3tidXR0b24uYWN0aXZlQ2xhc3N9fVwiIGlkPVwie3tidXR0b24udWlkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ7e2J1dHRvbi5idXR0b25OYW1lfX1cIiAgYXV0b0NvbXBsZXRlPVwib2ZmXCIgaWQ9XCJ7e2J1dHRvbi5sYWJlbE5hbWV9fVwiIChjbGljayk9XCJjaGFuZ2VWaWV3KCRldmVudClcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7e2J1dHRvbi5sYWJlbE5hbWV9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVRvZ2dsZUJ1dHRvbiB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBwZXJmb3JtU2VhcmNoOlBlcmZvcm1TZWFyY2hTZXJ2aWNlO1xuXHQpe31cblx0Y2hhbmdlVmlldyhldmVudCl7XG5cdFx0bGV0IGN1cnJlbnRFbGVtID0gZXZlbnQudGFyZ2V0LmlkO1xuXHRcdHRoaXMucGVyZm9ybVNlYXJjaC5TZWFyY2hNb2RlbE9iamVjdC50b2dnbGVWaWV3KGN1cnJlbnRFbGVtKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
