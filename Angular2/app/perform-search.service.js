System.register([], function(exports_1) {
    var SearchModel, PerformSearchService;
    return {
        setters:[],
        execute: function() {
            SearchModel = (function () {
                function SearchModel() {
                    this.dataQuantity = 200;
                    this.searchDataComplete = searchDummyData;
                    this.searchDataUpdated = searchDummyData.slice(0, 199);
                    this.gridView = true;
                    this.listView = false;
                    this.imageVisibility = false;
                }
                SearchModel.prototype.toggleView = function (value) {
                    console.log(value);
                    if (value === 'grid') {
                        this.gridView = true;
                        this.listView = false;
                    }
                    else if (value === 'list') {
                        this.gridView = false;
                        this.listView = true;
                    }
                };
                return SearchModel;
            })();
            exports_1("SearchModel", SearchModel);
            PerformSearchService = (function () {
                function PerformSearchService() {
                    this.SearchModelObject = new SearchModel();
                    searchQuery: string = '';
                }
                PerformSearchService.prototype.filterData = function (query) {
                    newSearchData = [];
                    this.SearchModelObject.searchDataComplete.map(function (obj) {
                        if (obj.email.indexOf(query) > -1) {
                            newSearchData.push(obj);
                        }
                    });
                    this.SearchModelObject.searchDataUpdated = newSearchData;
                };
                PerformSearchService.prototype.changeDataQuantity = function (value) {
                    value = parseInt(value);
                    this.SearchModelObject.searchDataUpdated = this.SearchModelObject.searchDataComplete.slice(0, value - 1);
                };
                PerformSearchService.prototype.toggleImage = function (value) {
                    this.SearchModelObject.imageVisibility = value;
                };
                return PerformSearchService;
            })();
            exports_1("PerformSearchService", PerformSearchService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZvcm0tc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiU2VhcmNoTW9kZWwiLCJTZWFyY2hNb2RlbC5jb25zdHJ1Y3RvciIsIlNlYXJjaE1vZGVsLnRvZ2dsZVZpZXciLCJQZXJmb3JtU2VhcmNoU2VydmljZSIsIlBlcmZvcm1TZWFyY2hTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiUGVyZm9ybVNlYXJjaFNlcnZpY2UuZmlsdGVyRGF0YSIsIlBlcmZvcm1TZWFyY2hTZXJ2aWNlLmNoYW5nZURhdGFRdWFudGl0eSIsIlBlcmZvcm1TZWFyY2hTZXJ2aWNlLnRvZ2dsZUltYWdlIl0sIm1hcHBpbmdzIjoiOzs7OztZQUFBO2dCQUFBQTtvQkFDRUMsaUJBQVlBLEdBQVVBLEdBQUdBLENBQUNBO29CQUVwQkEsdUJBQWtCQSxHQUFTQSxlQUFlQSxDQUFDQTtvQkFDM0NBLHNCQUFpQkEsR0FBUUEsZUFBZUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3ZEQSxhQUFRQSxHQUFXQSxJQUFJQSxDQUFDQTtvQkFDeEJBLGFBQVFBLEdBQVdBLEtBQUtBLENBQUNBO29CQUN6QkEsb0JBQWVBLEdBQVdBLEtBQUtBLENBQUNBO2dCQVd4Q0EsQ0FBQ0E7Z0JBVk9ELGdDQUFVQSxHQUFWQSxVQUFXQSxLQUFLQTtvQkFDZkUsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7b0JBQ25CQSxFQUFFQSxDQUFBQSxDQUFDQSxLQUFLQSxLQUFLQSxNQUFNQSxDQUFDQSxDQUFBQSxDQUFDQTt3QkFDcEJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO3dCQUNyQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ3ZCQSxDQUFDQTtvQkFBQUEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQUEsQ0FBQ0EsS0FBS0EsS0FBS0EsTUFBTUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQzFCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxLQUFLQSxDQUFDQTt3QkFDdEJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO29CQUN0QkEsQ0FBQ0E7Z0JBQ1JBLENBQUNBO2dCQUNIRixrQkFBQ0E7WUFBREEsQ0FsQkEsQUFrQkNBLElBQUE7WUFsQkQscUNBa0JDLENBQUE7WUFDRDtnQkFDQ0c7b0JBR0FDLHNCQUFpQkEsR0FBR0EsSUFBSUEsV0FBV0EsRUFBRUEsQ0FBQ0E7b0JBRnJDQSxXQUFXQSxFQUFDQSxNQUFNQSxHQUFHQSxFQUFFQSxDQUFDQTtnQkFDekJBLENBQUNBO2dCQUVERCx5Q0FBVUEsR0FBVkEsVUFBV0EsS0FBS0E7b0JBQ2ZFLGFBQWFBLEdBQUdBLEVBQUVBLENBQUNBO29CQUNuQkEsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxrQkFBa0JBLENBQUNBLEdBQUdBLENBQUNBLFVBQUFBLEdBQUdBO3dCQUNoREEsRUFBRUEsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7NEJBQ2pDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTt3QkFDekJBLENBQUNBO29CQUNGQSxDQUFDQSxDQUFDQSxDQUFBQTtvQkFDRkEsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxpQkFBaUJBLEdBQUdBLGFBQWFBLENBQUNBO2dCQUMxREEsQ0FBQ0E7Z0JBQ0RGLGlEQUFrQkEsR0FBbEJBLFVBQW1CQSxLQUFLQTtvQkFDdkJHLEtBQUtBLEdBQUdBLFFBQVFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUN4QkEsSUFBSUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxpQkFBaUJBLEdBQUdBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxFQUFFQSxLQUFLQSxHQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDekdBLENBQUNBO2dCQUNESCwwQ0FBV0EsR0FBWEEsVUFBWUEsS0FBS0E7b0JBQ2hCSSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLGVBQWVBLEdBQUdBLEtBQUtBLENBQUNBO2dCQUNoREEsQ0FBQ0E7Z0JBRUZKLDJCQUFDQTtZQUFEQSxDQXRCQSxBQXNCQ0EsSUFBQTtZQXRCRCx1REFzQkMsQ0FBQSIsImZpbGUiOiJwZXJmb3JtLXNlYXJjaC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNlYXJjaE1vZGVse1xuXHRcdGRhdGFRdWFudGl0eTpudW1iZXIgPSAyMDA7XG5cdFx0c2VhcmNoRGF0YTpBcnJheTtcbiAgICAgICAgc2VhcmNoRGF0YUNvbXBsZXRlOkFycmF5ID0gc2VhcmNoRHVtbXlEYXRhO1xuICAgICAgICBzZWFyY2hEYXRhVXBkYXRlZDpBcnJheSA9c2VhcmNoRHVtbXlEYXRhLnNsaWNlKDAsIDE5OSk7XG4gICAgICAgIGdyaWRWaWV3OmJvb2xlYW4gPSB0cnVlO1xuICAgICAgICBsaXN0Vmlldzpib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGltYWdlVmlzaWJpbGl0eTpib29sZWFuID0gZmFsc2U7XG4gICAgICAgIHRvZ2dsZVZpZXcodmFsdWUpe1xuICAgICAgICBcdGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgXHRpZih2YWx1ZSA9PT0gJ2dyaWQnKXtcbiAgICAgICAgXHRcdHRoaXMuZ3JpZFZpZXcgPSB0cnVlO1xuICAgICAgICBcdFx0dGhpcy5saXN0VmlldyA9IGZhbHNlO1xuICAgICAgICBcdH1lbHNlIGlmKHZhbHVlID09PSAnbGlzdCcpe1xuICAgICAgICBcdFx0dGhpcy5ncmlkVmlldyA9IGZhbHNlO1xuICAgICAgICBcdFx0dGhpcy5saXN0VmlldyA9IHRydWU7XG4gICAgICAgIFx0fVxuXHRcdH1cbn1cbmV4cG9ydCBjbGFzcyBQZXJmb3JtU2VhcmNoU2VydmljZXtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzZWFyY2hRdWVyeTpzdHJpbmcgPSAnJztcblx0fVxuXHRTZWFyY2hNb2RlbE9iamVjdCA9IG5ldyBTZWFyY2hNb2RlbCgpO1xuXHRmaWx0ZXJEYXRhKHF1ZXJ5KXtcblx0XHRuZXdTZWFyY2hEYXRhID0gW107XG5cdFx0dGhpcy5TZWFyY2hNb2RlbE9iamVjdC5zZWFyY2hEYXRhQ29tcGxldGUubWFwKG9iaiA9PiB7XG5cdFx0XHRpZihvYmouZW1haWwuaW5kZXhPZihxdWVyeSkgPiAtMSl7XG5cdFx0XHRcdG5ld1NlYXJjaERhdGEucHVzaChvYmopO1xuXHRcdFx0fVxuXHRcdH0pXG5cdFx0dGhpcy5TZWFyY2hNb2RlbE9iamVjdC5zZWFyY2hEYXRhVXBkYXRlZCA9IG5ld1NlYXJjaERhdGE7XG5cdH1cblx0Y2hhbmdlRGF0YVF1YW50aXR5KHZhbHVlKXtcblx0XHR2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcblx0XHR0aGlzLlNlYXJjaE1vZGVsT2JqZWN0LnNlYXJjaERhdGFVcGRhdGVkID0gdGhpcy5TZWFyY2hNb2RlbE9iamVjdC5zZWFyY2hEYXRhQ29tcGxldGUuc2xpY2UoMCwgdmFsdWUgLTEpO1xuXHR9XG5cdHRvZ2dsZUltYWdlKHZhbHVlKXtcblx0XHR0aGlzLlNlYXJjaE1vZGVsT2JqZWN0LmltYWdlVmlzaWJpbGl0eSA9IHZhbHVlO1xuXHR9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
