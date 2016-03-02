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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLWhlYWRpbmcudmlldy50cyJdLCJuYW1lcyI6WyJQYW5lbEhlYWRpbmdWaWV3IiwiUGFuZWxIZWFkaW5nVmlldy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0E7Z0JBQUFBO2dCQWVBQyxDQUFDQTtnQkFmREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsZUFBZUE7d0JBQ3pCQSxVQUFVQSxFQUFDQSxDQUFDQSxrQ0FBVUEsQ0FBQ0E7d0JBQ3ZCQSxNQUFNQSxFQUFDQSxDQUFDQSxhQUFhQSxDQUFDQTt3QkFDdEJBLFFBQVFBLEVBQUVBLDZPQVFUQTtxQkFDSkEsQ0FBQ0E7O3FDQUVEQTtnQkFBREEsdUJBQUNBO1lBQURBLENBZkEsQUFlQ0EsSUFBQTtZQWZELCtDQWVDLENBQUEiLCJmaWxlIjoicGFuZWwtaGVhZGluZy52aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtOYXZiYXJGb3JtfSBmcm9tICcuL25hdmJhci1mb3JtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncGFuZWwtaGVhZGluZycsXG4gICAgZGlyZWN0aXZlczpbTmF2YmFyRm9ybV0sXG4gICAgaW5wdXRzOlsnYnV0dG9uTW9kZWwnXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtaW5saW5lIGNsZWFyZml4XCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8bmF2YmFyLWZvcm0gW2J1dHRvbk1vZGVsXT1cImJ1dHRvbk1vZGVsXCI+PC9uYXZiYXItZm9ybT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQYW5lbEhlYWRpbmdWaWV3IHtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
