/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('TechWatchExtApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'TechWatchExtApp',

    stores: [
        // TODO: add global / shared stores here
        'TechWatchExtApp.store.ListDataStore'
    ],
    
    launch: function () {
        TechWatchExtApp.bShowImages = false;
        TechWatchExtApp.noOfLoadedRecords = 10;
        
        // TODO - Launch the application        
     //    TechWatchExtApp.listViewStore = Ext.create("TechWatchExtApp.store.ListDataStore", {
     //    	storeId: 'listViewStore'
    	// });
		//Ext.getCmp().add();
    }
});
