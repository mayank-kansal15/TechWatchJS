Ext.define("TechWatchExtApp.store.ListDataStore", {
  extend: 'Ext.data.Store',  
  fields:[ 'id', 'email', 'details','imgSrc']
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
