System.register(['angular2/core', './navbar-form.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, navbar_form_component_1;
    var PanelHeadingView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (navbar_form_component_1_1) {
                navbar_form_component_1 = navbar_form_component_1_1;
            }],
        execute: function() {
            PanelHeadingView = (function () {
                function PanelHeadingView() {
                }
                PanelHeadingView = __decorate([
                    core_1.Component({
                        selector: 'panel-heading',
                        directives: [navbar_form_component_1.NavbarForm],
                        inputs: ['buttonModel'],
                        template: "\n    \t<div class=\"panel-heading\">\n            <ul class=\"list-inline clearfix\">\n            <li>\n            <navbar-form [buttonModel]=\"buttonModel\"></navbar-form>\n            </li>\n            </ul>\n        </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], PanelHeadingView);
                return PanelHeadingView;
            })();
            exports_1("PanelHeadingView", PanelHeadingView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLWhlYWRlaW5nLnZpZXcudHMiXSwibmFtZXMiOlsiUGFuZWxIZWFkaW5nVmlldyIsIlBhbmVsSGVhZGluZ1ZpZXcuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBQTtnQkFlQUMsQ0FBQ0E7Z0JBZkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLGVBQWVBO3dCQUN6QkEsVUFBVUEsRUFBQ0EsQ0FBQ0Esa0NBQVVBLENBQUNBO3dCQUN2QkEsTUFBTUEsRUFBQ0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7d0JBQ3RCQSxRQUFRQSxFQUFFQSw2T0FRVEE7cUJBQ0pBLENBQUNBOztxQ0FFREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQWZBLEFBZUNBLElBQUE7WUFmRCwrQ0FlQyxDQUFBIiwiZmlsZSI6InBhbmVsLWhlYWRlaW5nLnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge05hdmJhckZvcm19IGZyb20gJy4vbmF2YmFyLWZvcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwYW5lbC1oZWFkaW5nJyxcbiAgICBkaXJlY3RpdmVzOltOYXZiYXJGb3JtXSxcbiAgICBpbnB1dHM6WydidXR0b25Nb2RlbCddLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1pbmxpbmUgY2xlYXJmaXhcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxuYXZiYXItZm9ybSBbYnV0dG9uTW9kZWxdPVwiYnV0dG9uTW9kZWxcIj48L25hdmJhci1mb3JtPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsSGVhZGluZ1ZpZXcge1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
