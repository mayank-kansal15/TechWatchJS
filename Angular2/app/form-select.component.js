System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FormSelectComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FormSelectComponent = (function () {
                function FormSelectComponent() {
                    this.optionList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                }
                FormSelectComponent = __decorate([
                    core_1.Component({
                        selector: 'form-select',
                        template: "\n        <div class=\"form-group\">\n        <select class=\"form-control\">\n        <option *ngFor=\"#option of optionList\">{{option}}</option>\n        </select>\n        </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormSelectComponent);
                return FormSelectComponent;
            })();
            exports_1("FormSelectComponent", FormSelectComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJGb3JtU2VsZWN0Q29tcG9uZW50IiwiRm9ybVNlbGVjdENvbXBvbmVudC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQUFBO29CQVdFQyxlQUFVQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFHQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDNUNBLENBQUNBO2dCQVpERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxhQUFhQTt3QkFDdkJBLFFBQVFBLEVBQUVBLDhMQU1UQTtxQkFDSkEsQ0FBQ0E7O3dDQUdEQTtnQkFBREEsMEJBQUNBO1lBQURBLENBWkEsQUFZQ0EsSUFBQTtZQVpELHFEQVlDLENBQUEiLCJmaWxlIjoiZm9ybS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zvcm0tc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwiI29wdGlvbiBvZiBvcHRpb25MaXN0XCI+e3tvcHRpb259fTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVNlbGVjdENvbXBvbmVudCB7XG5cdCBvcHRpb25MaXN0ID0gWzEsIDIgLCAzLCA0LCA1LCA2LCA3ICw4ICw5XTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
