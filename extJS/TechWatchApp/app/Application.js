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
        var me = this;
        TechWatchExtApp.bShowImages = false;
        TechWatchExtApp.noOfLoadedRecords = 10;
        TechWatchExtApp.dataArray = [];
        
        TechWatchExtApp.listViewStore = Ext.create("TechWatchExtApp.store.ListDataStore", {
            storeId: 'listViewStore'
        });
        me.readFromJSON(TechWatchExtApp.noOfLoadedRecords, true);
    },

    readFromJSON:function(noOfRequiredRecords, bRenderGrid){
        var me = this;
        //Ext.getCmp('centerPanel').mask();
        Ext.ComponentQuery.query('panel[id=centerPanel]')[0].body.mask('Loading...');
        Ext.Ajax.request({            
            url : 'resources/data_CompleteData.json',
            success: function(response){
                var rootData = JSON.parse(response.responseText);                                
                me.loadDataInStore(noOfRequiredRecords,rootData.data);        
                if(bRenderGrid)                         
                    me.renderGrid(); 
                //Ext.getCmp('centerPanel').unmask('Loading...');
                Ext.ComponentQuery.query('panel[id=centerPanel]')[0].body.unmask('Loading...');
                // process server response here
            },
            timeout: 60000
        });
    },

    loadDataInStore:function(noOfRequiredRecords, responseDataArray){
        var subsetData = Ext.Array.slice(responseDataArray, 0 , noOfRequiredRecords);
        TechWatchExtApp.listViewStore.loadData(subsetData,false);
    },

    renderGrid:function(){
        var parentPanel = Ext.getCmp('centerPanel');                                                               
        parentPanel.insert({xtype:'gridView'});
        parentPanel.getLayout().setActiveItem('infoGrid');
    }
});
