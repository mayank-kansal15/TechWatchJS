System.register(['angular2/core', './form-toggle-button.component', './form-search.component', './form-select.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, form_toggle_button_component_1, form_search_component_1, form_select_component_1;
    var NavbarForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (form_toggle_button_component_1_1) {
                form_toggle_button_component_1 = form_toggle_button_component_1_1;
            },
            function (form_search_component_1_1) {
                form_search_component_1 = form_search_component_1_1;
            },
            function (form_select_component_1_1) {
                form_select_component_1 = form_select_component_1_1;
            }],
        execute: function() {
            NavbarForm = (function () {
                function NavbarForm() {
                }
                NavbarForm = __decorate([
                    core_1.Component({
                        selector: 'navbar-form',
                        directives: [form_toggle_button_component_1.FormToggleButton, form_search_component_1.FormSearchComponent, form_select_component_1.FormSelectComponent],
                        inputs: ['buttonModel'],
                        template: "\n    \t<div class=\"navbar-form\">\n\t\t\t<form-select></form-select>\n        \t<form-search placeholderText=\"search\"></form-search>\n\t\t\t<div class=\"btn-group\" data-toggle=\"buttons\">\n\t\t    \t<form-toggle-button [buttonModel]=\"buttonModel\"></form-toggle-button>\t\n\t\t\t</div>\n\t\t</div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavbarForm);
                return NavbarForm;
            })();
            exports_1("NavbarForm", NavbarForm);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJOYXZiYXJGb3JtIiwiTmF2YmFyRm9ybS5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS0E7Z0JBQUFBO2dCQWVBQyxDQUFDQTtnQkFmREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsYUFBYUE7d0JBQ3ZCQSxVQUFVQSxFQUFDQSxDQUFDQSwrQ0FBZ0JBLEVBQUVBLDJDQUFtQkEsRUFBRUEsMkNBQW1CQSxDQUFDQTt3QkFDdkVBLE1BQU1BLEVBQUNBLENBQUNBLGFBQWFBLENBQUNBO3dCQUN0QkEsUUFBUUEsRUFBRUEsd1RBUVRBO3FCQUNKQSxDQUFDQTs7K0JBRURBO2dCQUFEQSxpQkFBQ0E7WUFBREEsQ0FmQSxBQWVDQSxJQUFBO1lBZkQsbUNBZUMsQ0FBQSIsImZpbGUiOiJuYXZiYXItZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0Zvcm1Ub2dnbGVCdXR0b259IGZyb20gJy4vZm9ybS10b2dnbGUtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1TZWFyY2hDb21wb25lbnR9IGZyb20gJy4vZm9ybS1zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7Rm9ybVNlbGVjdENvbXBvbmVudH0gZnJvbSAnLi9mb3JtLXNlbGVjdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdmJhci1mb3JtJyxcbiAgICBkaXJlY3RpdmVzOltGb3JtVG9nZ2xlQnV0dG9uLCBGb3JtU2VhcmNoQ29tcG9uZW50LCBGb3JtU2VsZWN0Q29tcG9uZW50XSxcbiAgICBpbnB1dHM6WydidXR0b25Nb2RlbCddLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8ZGl2IGNsYXNzPVwibmF2YmFyLWZvcm1cIj5cblx0XHRcdDxmb3JtLXNlbGVjdD48L2Zvcm0tc2VsZWN0PlxuICAgICAgICBcdDxmb3JtLXNlYXJjaCBwbGFjZWhvbGRlclRleHQ9XCJzZWFyY2hcIj48L2Zvcm0tc2VhcmNoPlxuXHRcdFx0PGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxuXHRcdCAgICBcdDxmb3JtLXRvZ2dsZS1idXR0b24gW2J1dHRvbk1vZGVsXT1cImJ1dHRvbk1vZGVsXCI+PC9mb3JtLXRvZ2dsZS1idXR0b24+XHRcblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckZvcm0ge1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
