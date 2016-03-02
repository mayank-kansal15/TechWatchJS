System.register(['angular2/core', './list-search-desc.component', './list-search-head.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, list_search_desc_component_1, list_search_head_component_1;
    var ListSearchView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (list_search_desc_component_1_1) {
                list_search_desc_component_1 = list_search_desc_component_1_1;
            },
            function (list_search_head_component_1_1) {
                list_search_head_component_1 = list_search_head_component_1_1;
            }],
        execute: function() {
            ListSearchView = (function () {
                function ListSearchView() {
                }
                ListSearchView = __decorate([
                    core_1.Component({
                        selector: 'list-search-view',
                        inputs: ['dataModel'],
                        directives: [list_search_desc_component_1.ListSearchDesc, list_search_head_component_1.ListSearchHead],
                        template: "\n    \t<div class=\"panel-body list-view\">\n            <div class=\"row\">\n                <div class=\"col-sm-24\">\n                    <table class=\"table table-striped\">\n                    <list-search-head></list-search-head>\n                    <tbody>\n                \t\t<list-search-desc [dataModel]=\"dataModel\"></list-search-desc>\n                    </tbody>\n            \t\t</table>\n            \t</div>\n            </div>\n        </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListSearchView);
                return ListSearchView;
            })();
            exports_1("ListSearchView", ListSearchView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtc2VhcmNoLnZpZXcudHMiXSwibmFtZXMiOlsiTGlzdFNlYXJjaFZpZXciLCJMaXN0U2VhcmNoVmlldy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUFBO2dCQW9CQUMsQ0FBQ0E7Z0JBcEJERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxrQkFBa0JBO3dCQUM1QkEsTUFBTUEsRUFBQ0EsQ0FBQ0EsV0FBV0EsQ0FBQ0E7d0JBQ3BCQSxVQUFVQSxFQUFDQSxDQUFDQSwyQ0FBY0EsRUFBRUEsMkNBQWNBLENBQUNBO3dCQUMzQ0EsUUFBUUEsRUFBRUEsMGRBYVRBO3FCQUNKQSxDQUFDQTs7bUNBRURBO2dCQUFEQSxxQkFBQ0E7WUFBREEsQ0FwQkEsQUFvQkNBLElBQUE7WUFwQkQsMkNBb0JDLENBQUEiLCJmaWxlIjoibGlzdC1zZWFyY2gudmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TmF2YmFyRm9ybX0gZnJvbSAnLi9uYXZiYXItZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtMaXN0U2VhcmNoRGVzY30gZnJvbSAnLi9saXN0LXNlYXJjaC1kZXNjLmNvbXBvbmVudCc7XG5pbXBvcnQge0xpc3RTZWFyY2hIZWFkfSBmcm9tICcuL2xpc3Qtc2VhcmNoLWhlYWQuY29tcG9uZW50JztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGlzdC1zZWFyY2gtdmlldycsXG4gICAgaW5wdXRzOlsnZGF0YU1vZGVsJ10sXG4gICAgZGlyZWN0aXZlczpbTGlzdFNlYXJjaERlc2MsIExpc3RTZWFyY2hIZWFkXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFx0PGRpdiBjbGFzcz1cInBhbmVsLWJvZHkgbGlzdC12aWV3XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0yNFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaXN0LXNlYXJjaC1oZWFkPjwvbGlzdC1zZWFyY2gtaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIFx0XHQ8bGlzdC1zZWFyY2gtZGVzYyBbZGF0YU1vZGVsXT1cImRhdGFNb2RlbFwiPjwvbGlzdC1zZWFyY2gtZGVzYz5cbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIFx0XHQ8L3RhYmxlPlxuICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2VhcmNoVmlldyB7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
