System.register(['angular2/platform/browser', "./home.view", "./perform-search.service", 'angular2/router'], function(exports_1) {
    var browser_1, home_view_1, perform_search_service_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (home_view_1_1) {
                home_view_1 = home_view_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(home_view_1.AppComponent, [perform_search_service_1.PerformSearchService, router_1.ROUTER_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQSxtQkFBUyxDQUFDLHdCQUFZLEVBQUUsQ0FBQyw2Q0FBb0IsRUFBRSx5QkFBZ0IsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9ob21lLnZpZXdcIjtcbmltcG9ydCB7UGVyZm9ybVNlYXJjaFNlcnZpY2V9IGZyb20gXCIuL3BlcmZvcm0tc2VhcmNoLnNlcnZpY2VcIlxuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1BlcmZvcm1TZWFyY2hTZXJ2aWNlLCBST1VURVJfUFJPVklERVJTXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
