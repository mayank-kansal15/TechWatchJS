Ext.define("TechWatchExtApp.store.ListDataStore", {
  extend: 'Ext.data.Store',  
  fields:[ 'id', 'email', 'details','imgSrc'],
  autoLoad:true,
  proxy: {
        type: 'ajax',
        url : 'resources/data_CompleteData.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    listeners:{
        // load:function(store, records, successful, operation, eOpts){
        //     debugger
        // var temp = Ext.create('Ext.data.Store', {
        //              fields:[ 'id', 'email', 'details','imgSrc'],
        //              storeId: 'tempStore'
        // });

        // TechWatchExtApp.listViewStore.filterBy(function(record){
        //             var recordIndex =  TechWatchExtApp.listViewStore.indexOf(record);
        //             return TechWatchExtApp.noOfLoadedRecords < recordIndex ? false : true;
        // });
        // Ext.data.StoreManager.lookup('tempStore').loadData(TechWatchExtApp.listViewStore.data.items,false);
        // TechWatchExtApp.listViewStore.clearFilter();
        // }
    }
});

TechWatchExtApp.listViewStore = Ext.create("TechWatchExtApp.store.ListDataStore", {
    storeId: 'listViewStore'
});  


var numberOfEntries = Ext.create('Ext.data.Store', {
    fields: ['value'],
    data : [
        {"value":10},
        {"value":50},
        {"value":100},
        {"value":200},
        {"value":500},
        {"value":1000},
        {"value":2500}
    ]
});
