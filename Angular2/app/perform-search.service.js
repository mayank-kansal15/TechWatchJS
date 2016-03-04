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
                return PerformSearchService;
            })();
            exports_1("PerformSearchService", PerformSearchService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZvcm0tc2VhcmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiU2VhcmNoTW9kZWwiLCJTZWFyY2hNb2RlbC5jb25zdHJ1Y3RvciIsIlNlYXJjaE1vZGVsLnRvZ2dsZVZpZXciLCJQZXJmb3JtU2VhcmNoU2VydmljZSIsIlBlcmZvcm1TZWFyY2hTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiUGVyZm9ybVNlYXJjaFNlcnZpY2UuZmlsdGVyRGF0YSIsIlBlcmZvcm1TZWFyY2hTZXJ2aWNlLmNoYW5nZURhdGFRdWFudGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7WUFBQTtnQkFBQUE7b0JBQ0VDLGlCQUFZQSxHQUFVQSxHQUFHQSxDQUFDQTtvQkFFcEJBLHVCQUFrQkEsR0FBU0EsZUFBZUEsQ0FBQ0E7b0JBQzNDQSxzQkFBaUJBLEdBQVFBLGVBQWVBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO29CQUN2REEsYUFBUUEsR0FBV0EsSUFBSUEsQ0FBQ0E7b0JBQ3hCQSxhQUFRQSxHQUFXQSxLQUFLQSxDQUFDQTtnQkFXakNBLENBQUNBO2dCQVZPRCxnQ0FBVUEsR0FBVkEsVUFBV0EsS0FBS0E7b0JBQ2ZFLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO29CQUNuQkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsS0FBS0EsS0FBS0EsTUFBTUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ3BCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTt3QkFDckJBLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLEtBQUtBLENBQUNBO29CQUN2QkEsQ0FBQ0E7b0JBQUFBLElBQUlBLENBQUNBLEVBQUVBLENBQUFBLENBQUNBLEtBQUtBLEtBQUtBLE1BQU1BLENBQUNBLENBQUFBLENBQUNBO3dCQUMxQkEsSUFBSUEsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBS0EsQ0FBQ0E7d0JBQ3RCQSxJQUFJQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQTtvQkFDdEJBLENBQUNBO2dCQUNSQSxDQUFDQTtnQkFDSEYsa0JBQUNBO1lBQURBLENBakJBLEFBaUJDQSxJQUFBO1lBakJELHFDQWlCQyxDQUFBO1lBQ0Q7Z0JBQ0NHO29CQUdBQyxzQkFBaUJBLEdBQUdBLElBQUlBLFdBQVdBLEVBQUVBLENBQUNBO29CQUZyQ0EsV0FBV0EsRUFBQ0EsTUFBTUEsR0FBR0EsRUFBRUEsQ0FBQ0E7Z0JBQ3pCQSxDQUFDQTtnQkFFREQseUNBQVVBLEdBQVZBLFVBQVdBLEtBQUtBO29CQUNmRSxhQUFhQSxHQUFHQSxFQUFFQSxDQUFDQTtvQkFDbkJBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFBQSxHQUFHQTt3QkFDaERBLEVBQUVBLENBQUFBLENBQUNBLEdBQUdBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUFBLENBQUNBOzRCQUNqQ0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3pCQSxDQUFDQTtvQkFDRkEsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7b0JBQ0ZBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxhQUFhQSxDQUFDQTtnQkFDMURBLENBQUNBO2dCQUNERixpREFBa0JBLEdBQWxCQSxVQUFtQkEsS0FBS0E7b0JBQ3ZCRyxLQUFLQSxHQUFHQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDeEJBLElBQUlBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsaUJBQWlCQSxHQUFHQSxJQUFJQSxDQUFDQSxpQkFBaUJBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsR0FBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ3pHQSxDQUFDQTtnQkFHRkgsMkJBQUNBO1lBQURBLENBcEJBLEFBb0JDQSxJQUFBO1lBcEJELHVEQW9CQyxDQUFBIiwiZmlsZSI6InBlcmZvcm0tc2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2VhcmNoTW9kZWx7XG5cdFx0ZGF0YVF1YW50aXR5Om51bWJlciA9IDIwMDtcblx0XHRzZWFyY2hEYXRhOkFycmF5O1xuICAgICAgICBzZWFyY2hEYXRhQ29tcGxldGU6QXJyYXkgPSBzZWFyY2hEdW1teURhdGE7XG4gICAgICAgIHNlYXJjaERhdGFVcGRhdGVkOkFycmF5ID1zZWFyY2hEdW1teURhdGEuc2xpY2UoMCwgMTk5KTtcbiAgICAgICAgZ3JpZFZpZXc6Ym9vbGVhbiA9IHRydWU7XG4gICAgICAgIGxpc3RWaWV3OmJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdG9nZ2xlVmlldyh2YWx1ZSl7XG4gICAgICAgIFx0Y29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICBcdGlmKHZhbHVlID09PSAnZ3JpZCcpe1xuICAgICAgICBcdFx0dGhpcy5ncmlkVmlldyA9IHRydWU7XG4gICAgICAgIFx0XHR0aGlzLmxpc3RWaWV3ID0gZmFsc2U7XG4gICAgICAgIFx0fWVsc2UgaWYodmFsdWUgPT09ICdsaXN0Jyl7XG4gICAgICAgIFx0XHR0aGlzLmdyaWRWaWV3ID0gZmFsc2U7XG4gICAgICAgIFx0XHR0aGlzLmxpc3RWaWV3ID0gdHJ1ZTtcbiAgICAgICAgXHR9XG5cdFx0fVxufVxuZXhwb3J0IGNsYXNzIFBlcmZvcm1TZWFyY2hTZXJ2aWNle1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHNlYXJjaFF1ZXJ5OnN0cmluZyA9ICcnO1xuXHR9XG5cdFNlYXJjaE1vZGVsT2JqZWN0ID0gbmV3IFNlYXJjaE1vZGVsKCk7XG5cdGZpbHRlckRhdGEocXVlcnkpe1xuXHRcdG5ld1NlYXJjaERhdGEgPSBbXTtcblx0XHR0aGlzLlNlYXJjaE1vZGVsT2JqZWN0LnNlYXJjaERhdGFDb21wbGV0ZS5tYXAob2JqID0+IHtcblx0XHRcdGlmKG9iai5lbWFpbC5pbmRleE9mKHF1ZXJ5KSA+IC0xKXtcblx0XHRcdFx0bmV3U2VhcmNoRGF0YS5wdXNoKG9iaik7XG5cdFx0XHR9XG5cdFx0fSlcblx0XHR0aGlzLlNlYXJjaE1vZGVsT2JqZWN0LnNlYXJjaERhdGFVcGRhdGVkID0gbmV3U2VhcmNoRGF0YTtcblx0fVxuXHRjaGFuZ2VEYXRhUXVhbnRpdHkodmFsdWUpe1xuXHRcdHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuXHRcdHRoaXMuU2VhcmNoTW9kZWxPYmplY3Quc2VhcmNoRGF0YVVwZGF0ZWQgPSB0aGlzLlNlYXJjaE1vZGVsT2JqZWN0LnNlYXJjaERhdGFDb21wbGV0ZS5zbGljZSgwLCB2YWx1ZSAtMSk7XG5cdH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
