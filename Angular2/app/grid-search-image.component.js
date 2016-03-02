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
    var GridSearchImage;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GridSearchImage = (function () {
                function GridSearchImage() {
                    this.imageURL = "http://lorempixel.com/300/200/?random" + Math.random();
                }
                GridSearchImage = __decorate([
                    core_1.Component({
                        selector: 'grid-search-image',
                        template: "\n    \t<img alt=\"100%x200\" src={{imageURL}} data-holder-rendered=\"true\" style=\"height: '200px'; width: '100%'; display: 'block'\"/>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], GridSearchImage);
                return GridSearchImage;
            })();
            exports_1("GridSearchImage", GridSearchImage);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtc2VhcmNoLWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJHcmlkU2VhcmNoSW1hZ2UiLCJHcmlkU2VhcmNoSW1hZ2UuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUFBQTtvQkFPQ0MsYUFBUUEsR0FBR0EsdUNBQXVDQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtnQkFDcEVBLENBQUNBO2dCQVJERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFFQSxtQkFBbUJBO3dCQUM3QkEsUUFBUUEsRUFBRUEsaUpBRVRBO3FCQUNKQSxDQUFDQTs7b0NBR0RBO2dCQUFEQSxzQkFBQ0E7WUFBREEsQ0FSQSxBQVFDQSxJQUFBO1lBUkQsNkNBUUMsQ0FBQSIsImZpbGUiOiJncmlkLXNlYXJjaC1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ3JpZC1zZWFyY2gtaW1hZ2UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXHQ8aW1nIGFsdD1cIjEwMCV4MjAwXCIgc3JjPXt7aW1hZ2VVUkx9fSBkYXRhLWhvbGRlci1yZW5kZXJlZD1cInRydWVcIiBzdHlsZT1cImhlaWdodDogJzIwMHB4Jzsgd2lkdGg6ICcxMDAlJzsgZGlzcGxheTogJ2Jsb2NrJ1wiLz5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkU2VhcmNoSW1hZ2Uge1xuXHRpbWFnZVVSTCA9IFwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzMwMC8yMDAvP3JhbmRvbVwiICsgTWF0aC5yYW5kb20oKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
