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
    var GridSearchDesc;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GridSearchDesc = (function () {
                function GridSearchDesc() {
                    this.showFilter = 'hidden';
                }
                GridSearchDesc.prototype.toggleShowFilter = function () {
                    this.showFilter === 'hidden' ? this.showFilter = 'show' : this.showFilter = 'hidden';
                };
                GridSearchDesc = __decorate([
                    core_1.Component({
                        selector: 'grid-search-desc',
                        inputs: ['details'],
                        template: "\n        <div class=\"caption\">\n\t                <h3>{{details.email}}</h3>\n\t                <div>\n\t                    <p>\n\t                        <a role=\"button\" data-toggle=\"collapse\" (click)=\"toggleShowFilter()\">\n\t                            More\n\t                        </a>\n\t                    </p>\n\t                    <div class=\"{{showFilter}}\" >\n\t                        <p>\n\t                            {{details.details}}\n\t                        </p>\n\t                    </div>\n\t                    <div><a href=\"#\" class=\"btn btn-primary\" role=\"button\">Button</a> <a href=\"#\" class=\"btn btn-default\" role=\"button\">Button</a></div>\n\t                </div>\n\t            </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], GridSearchDesc);
                return GridSearchDesc;
            })();
            exports_1("GridSearchDesc", GridSearchDesc);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtc2VhcmNoLWRlc2MudHMiXSwibmFtZXMiOlsiR3JpZFNlYXJjaERlc2MiLCJHcmlkU2VhcmNoRGVzYy5jb25zdHJ1Y3RvciIsIkdyaWRTZWFyY2hEZXNjLnRvZ2dsZVNob3dGaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBQTtvQkF1QkNDLGVBQVVBLEdBQUdBLFFBQVFBLENBQUNBO2dCQUl2QkEsQ0FBQ0E7Z0JBSEFELHlDQUFnQkEsR0FBaEJBO29CQUNDRSxJQUFJQSxDQUFDQSxVQUFVQSxLQUFLQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxNQUFNQSxHQUFHQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxRQUFRQSxDQUFDQTtnQkFDdEZBLENBQUNBO2dCQTFCRkY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsa0JBQWtCQTt3QkFDNUJBLE1BQU1BLEVBQUNBLENBQUNBLFNBQVNBLENBQUNBO3dCQUNsQkEsUUFBUUEsRUFBRUEsaXZCQWlCVEE7cUJBQ0pBLENBQUNBOzttQ0FNREE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQTNCQSxBQTJCQ0EsSUFBQTtZQTNCRCwyQ0EyQkMsQ0FBQSIsImZpbGUiOiJncmlkLXNlYXJjaC1kZXNjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dyaWQtc2VhcmNoLWRlc2MnLFxuICAgIGlucHV0czpbJ2RldGFpbHMnXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FwdGlvblwiPlxuXHQgICAgICAgICAgICAgICAgPGgzPnt7ZGV0YWlscy5lbWFpbH19PC9oMz5cblx0ICAgICAgICAgICAgICAgIDxkaXY+XG5cdCAgICAgICAgICAgICAgICAgICAgPHA+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxhIHJvbGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgKGNsaWNrKT1cInRvZ2dsZVNob3dGaWx0ZXIoKVwiPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZVxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG5cdCAgICAgICAgICAgICAgICAgICAgPC9wPlxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7e3Nob3dGaWx0ZXJ9fVwiID5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2RldGFpbHMuZGV0YWlsc319XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiByb2xlPVwiYnV0dG9uXCI+QnV0dG9uPC9hPiA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgcm9sZT1cImJ1dHRvblwiPkJ1dHRvbjwvYT48L2Rpdj5cblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxuXHQgICAgICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkU2VhcmNoRGVzYyB7XG5cdHNob3dGaWx0ZXIgPSAnaGlkZGVuJztcblx0dG9nZ2xlU2hvd0ZpbHRlcigpe1xuXHRcdHRoaXMuc2hvd0ZpbHRlciA9PT0gJ2hpZGRlbicgPyB0aGlzLnNob3dGaWx0ZXIgPSAnc2hvdycgOiB0aGlzLnNob3dGaWx0ZXIgPSAnaGlkZGVuJztcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
