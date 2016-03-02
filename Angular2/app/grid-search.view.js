System.register(['angular2/core', './grid-search-desc', './grid-search-image.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, grid_search_desc_1, grid_search_image_component_1;
    var GridSearchView;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grid_search_desc_1_1) {
                grid_search_desc_1 = grid_search_desc_1_1;
            },
            function (grid_search_image_component_1_1) {
                grid_search_image_component_1 = grid_search_image_component_1_1;
            }],
        execute: function() {
            GridSearchView = (function () {
                function GridSearchView() {
                }
                GridSearchView = __decorate([
                    core_1.Component({
                        selector: 'grid-search-view',
                        inputs: ['dataModel', 'viewModel'],
                        directives: [grid_search_desc_1.GridSearchDesc, grid_search_image_component_1.GridSearchImage],
                        template: "\n    \t<div class=\"col-sm-12 col-md-8\">\n\t\t\t<div class=\"thumbnail\">\n\t\t\t\t<grid-search-image></grid-search-image>\n\t\t\t\t<grid-search-desc [details]=\"dataModel\"></grid-search-desc>\n\t\t\t</div>\n\t\t</div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], GridSearchView);
                return GridSearchView;
            })();
            exports_1("GridSearchView", GridSearchView);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtc2VhcmNoLnZpZXcudHMiXSwibmFtZXMiOlsiR3JpZFNlYXJjaFZpZXciLCJHcmlkU2VhcmNoVmlldy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBQUFBO2dCQWNBQyxDQUFDQTtnQkFkREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsa0JBQWtCQTt3QkFDNUJBLE1BQU1BLEVBQUdBLENBQUNBLFdBQVdBLEVBQUVBLFdBQVdBLENBQUNBO3dCQUNuQ0EsVUFBVUEsRUFBQ0EsQ0FBQ0EsaUNBQWNBLEVBQUVBLDZDQUFlQSxDQUFDQTt3QkFDNUNBLFFBQVFBLEVBQUVBLHFPQU9UQTtxQkFDSkEsQ0FBQ0E7O21DQUVEQTtnQkFBREEscUJBQUNBO1lBQURBLENBZEEsQUFjQ0EsSUFBQTtZQWRELDJDQWNDLENBQUEiLCJmaWxlIjoiZ3JpZC1zZWFyY2gudmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7TmF2YmFyRm9ybX0gZnJvbSAnLi9uYXZiYXItZm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHtHcmlkU2VhcmNoRGVzY30gZnJvbSAnLi9ncmlkLXNlYXJjaC1kZXNjJztcbmltcG9ydCB7R3JpZFNlYXJjaEltYWdlfSBmcm9tICcuL2dyaWQtc2VhcmNoLWltYWdlLmNvbXBvbmVudCc7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dyaWQtc2VhcmNoLXZpZXcnLFxuICAgIGlucHV0cyA6IFsnZGF0YU1vZGVsJywgJ3ZpZXdNb2RlbCddLFxuICAgIGRpcmVjdGl2ZXM6W0dyaWRTZWFyY2hEZXNjLCBHcmlkU2VhcmNoSW1hZ2VdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGNvbC1tZC04XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGh1bWJuYWlsXCI+XG5cdFx0XHRcdDxncmlkLXNlYXJjaC1pbWFnZT48L2dyaWQtc2VhcmNoLWltYWdlPlxuXHRcdFx0XHQ8Z3JpZC1zZWFyY2gtZGVzYyBbZGV0YWlsc109XCJkYXRhTW9kZWxcIj48L2dyaWQtc2VhcmNoLWRlc2M+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkU2VhcmNoVmlldyB7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
