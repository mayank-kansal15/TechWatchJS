Ext.define("TechWatchExtApp.view.List.List",{
    extend: "Ext.grid.Panel",
    requires: [        
    ],
    xtype:'listView',
    itemId:'infoList',
    autoDestroy:true,
    store: 'listViewStore',
    // selModel: {
    //       selType: 'checkboxmodel'
    // },

    initComponent: function() {        
        
        this.columns = [
            {xtype: 'rownumberer', width:100},
            { text: 'Id', dataIndex: 'id', hidden:true },
            { 
                text: 'Thumbnail', 
                dataIndex: 'imgSrc',                          
                renderer: function(value){                     
                    if(TechWatchExtApp.bShowImages){             
                        return '<img height="30" width="30" src="' + value + "?random" + Math.random() + '"/>';
                    }
                    else{
                        return '';   
                    }
                }
            },
            { text: 'Title', dataIndex: 'email', width:200},
            { 
                text: 'Description', 
                dataIndex: 'details', 
                flex: 1,
                renderer: function(value){               
                    return '<div style="white-space:normal !important;">'+ value +'</div>';
                }       
            }
        ];
        this.callParent();
    },
    listeners:{
        activate:function( list, eOpts ){
            console.log('ListView inside activate' );
        },
        deactivate:function( list, eOpts ){
            list.destroy();
            console.log('ListView inside deactivate' );
        }
    }
    
});
