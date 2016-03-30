/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TechWatchExtApp.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [       
        'TechWatchExtApp.view.List.List',
        'TechWatchExtApp.view.Grid.Portal'
    ],
    xtype: 'app-main',
    
    scrollable:false,   
    height:Ext.getBody().getHeight(),
    layout: {
        type: 'fit'
    },

    items: [
        {
            xtype: 'panel',
            id:'centerPanel',            
            cls:'centerPanelCls',
            //activeItem:'infoGrid',
            height:Ext.getBody().getHeight(),
            layout:{
                type:'card',
                deferredRender:true
            },            
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    cls:'panelToolbar',                    
                    items: [
                        {
                            xtype:'combobox',          
                            itemId:'noOfRecordsDropdown',  
                            editable:false,
                            selectOnFocus:false,            
                            store: numberOfEntries,
                            queryMode: 'local',
                            displayField: 'value',
                            valueField: 'value',
                            //value:2500,
                            value:10,
                            width:80,
                            listeners:{
                                change:function( dropdown, newValue, oldValue, eOpts ){
                                    var requiredNoOfRecords = newValue;                                    
                                    TechWatchExtApp.noOfLoadedRecords = newValue;
                                    TechWatchExtApp.getApplication().readFromJSON(newValue, false);
                                    
                                }
                            }
                        },
                        {
                            xtype: 'textfield',                                            
                            emptyText:'Search',
                            listeners:{
                                change: function(textfield, newValue, oldValue, eOpts ){                                    
                                    TechWatchExtApp.listViewStore.clearFilter();
                                    TechWatchExtApp.listViewStore.filterBy(function(record){
                                            var bFound = record.get('email').indexOf(newValue);
                                            return bFound != -1 ? true : false;
                                    });                                    
                                }
                            }                        
                        },
                        
                        { 
                            xtype: 'button', 
                            text: 'Grid',
                            handler:function(button, event){     
                                var parentPanel = button.up('#centerPanel');                                
                               var activeItem = parentPanel.getLayout().getActiveItem();
                               if(activeItem.xtype != 'gridView'){
                                    parentPanel.insert({xtype:'gridView'});
                                    parentPanel.getLayout().setActiveItem('infoGrid');
                               }
                                     
                               //parentPanel.down('gridView').refresh();                                                                                             
                            } 
                        },
                        { 
                            xtype: 'button', 
                            text: 'List',
                            handler:function(button, event){
                                var parentPanel = button.up('#centerPanel');                                  
                                var activeItem = parentPanel.getLayout().getActiveItem();
                               if(activeItem.xtype != 'listView'){
                                    parentPanel.add({xtype:'listView'});                        
                                    parentPanel.getLayout().setActiveItem('infoList'); 
                                    parentPanel.doLayout();
                               }                                
                                //parentPanel.down('listView').getView().refresh(); 
                            } 
                        },
                        { 
                            xtype: 'button', 
                            text: 'Show Images',
                            handler:function(button, event){
                                var currentFlagForShowImages = TechWatchExtApp.bShowImages;
                                if(TechWatchExtApp.bShowImages)
                                {
                                    TechWatchExtApp.bShowImages = false;
                                    button.setText('Show Images');
                                }
                                else{
                                    TechWatchExtApp.bShowImages = true;
                                    button.setText('Hide Images');
                                }           
                                var parentPanel = button.up('#centerPanel');     
                                var xtypeOfActiveItem = parentPanel.getLayout().getActiveItem().xtype;
                                if(xtypeOfActiveItem == 'gridView'){
                                    parentPanel.down('gridView').refresh();
                                }   
                                else{
                                    parentPanel.down('listView').getView().refresh();
                                }                                        
                            } 
                        },
                    ]
                }
            ],
            items:[                
                // {                    
                //     xtype: 'listView'            
                // },
                // {                   
                //     xtype:'gridView'                            
                // }
            ]
        }
    ]
});
