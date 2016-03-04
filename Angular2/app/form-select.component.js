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
    var FormSelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            }],
        execute: function() {
            FormSelectComponent = (function () {
                function FormSelectComponent(performSearch) {
                    this.performSearch = performSearch;
                    this.optionList = [200, 10, 50, 100, 200, 500, 1000, 2500];
                }
                FormSelectComponent.prototype.handleQuantityChange = function (event) {
                    currentValue = event.target.value;
                    this.performSearch.changeDataQuantity(currentValue);
                };
                FormSelectComponent = __decorate([
                    core_1.Component({
                        selector: 'form-select',
                        template: "\n        <div class=\"form-group\">\n        <select class=\"form-control\" (change)=\"handleQuantityChange($event)\">\n        <option *ngFor=\"#option of optionList\">{{option}}</option>\n        </select>\n        </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [perform_search_service_1.PerformSearchService])
                ], FormSelectComponent);
                return FormSelectComponent;
            })();
            exports_1("FormSelectComponent", FormSelectComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJGb3JtU2VsZWN0Q29tcG9uZW50IiwiRm9ybVNlbGVjdENvbXBvbmVudC5jb25zdHJ1Y3RvciIsIkZvcm1TZWxlY3RDb21wb25lbnQuaGFuZGxlUXVhbnRpdHlDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQVdDQSw2QkFDUUEsYUFBa0NBO29CQUFsQ0Msa0JBQWFBLEdBQWJBLGFBQWFBLENBQXFCQTtvQkFFekNBLGVBQVVBLEdBQUdBLENBQUNBLEdBQUdBLEVBQUNBLEVBQUVBLEVBQUVBLEVBQUVBLEVBQUdBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO2dCQURyREEsQ0FBQ0E7Z0JBRUZELGtEQUFvQkEsR0FBcEJBLFVBQXFCQSxLQUFLQTtvQkFDekJFLFlBQVlBLEdBQUdBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO29CQUNsQ0EsSUFBSUEsQ0FBQ0EsYUFBYUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQTtnQkFDckRBLENBQUNBO2dCQWxCSEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsYUFBYUE7d0JBQ3ZCQSxRQUFRQSxFQUFFQSx3T0FNVEE7cUJBQ0pBLENBQUNBOzt3Q0FVREE7Z0JBQURBLDBCQUFDQTtZQUFEQSxDQW5CQSxBQW1CQ0EsSUFBQTtZQW5CRCxxREFtQkMsQ0FBQSIsImZpbGUiOiJmb3JtLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BlcmZvcm1TZWFyY2hTZXJ2aWNlfSBmcm9tICcuL3BlcmZvcm0tc2VhcmNoLnNlcnZpY2UnXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zvcm0tc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgKGNoYW5nZSk9XCJoYW5kbGVRdWFudGl0eUNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI29wdGlvbiBvZiBvcHRpb25MaXN0XCI+e3tvcHRpb259fTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVNlbGVjdENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBwZXJmb3JtU2VhcmNoOlBlcmZvcm1TZWFyY2hTZXJ2aWNlO1xuXHQpe31cblx0IG9wdGlvbkxpc3QgPSBbMjAwLDEwLCA1MCAsIDEwMCwgMjAwLCA1MDAsIDEwMDAsIDI1MDBdO1xuXHQgaGFuZGxlUXVhbnRpdHlDaGFuZ2UoZXZlbnQpe1xuXHQgXHRjdXJyZW50VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdCBcdHRoaXMucGVyZm9ybVNlYXJjaC5jaGFuZ2VEYXRhUXVhbnRpdHkoY3VycmVudFZhbHVlKTtcblx0IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
