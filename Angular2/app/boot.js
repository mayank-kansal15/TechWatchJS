System.register(['angular2/platform/browser', "./app.component", "./perform-search.service"], function(exports_1) {
    var browser_1, app_component_1, perform_search_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (perform_search_service_1_1) {
                perform_search_service_1 = perform_search_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [perform_search_service_1.PerformSearchService]);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7WUFJQSxtQkFBUyxDQUFDLDRCQUFZLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiYm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge1BlcmZvcm1TZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi9wZXJmb3JtLXNlYXJjaC5zZXJ2aWNlXCJcblxuYm9vdHN0cmFwKEFwcENvbXBvbmVudCwgW1BlcmZvcm1TZWFyY2hTZXJ2aWNlXSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
