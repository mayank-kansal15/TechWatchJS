
Ext.define("TechWatchExtApp.view.Grid.Portlet",{
    extend: "Ext.panel.Panel",
 
    requires: [
        "TechWatchExtApp.view.Grid.PortletController",
        "TechWatchExtApp.view.Grid.PortletModel"
    ],
    
    controller: "grid-portlet",
    viewModel: {
        type: "grid-portlet"
    },
    xtype:'portlet',    
    layout:{
        type:'vbox'
    },
    items: Ext.create('Ext.view.View', {
                    store: Ext.data.StoreManager.lookup('listViewStore'),
                    tpl: [
                        
                        '<tpl for=".">',
                            '<div class="thumb-wrap">',                                
                                '<div class="thumb"><img src="{imgSrc}" title="{name:htmlEncode}"></div>',
                                '<div>{email}</div>',
                            '</div>',
                        '</tpl>',
                        '<div class="x-clear"></div>'
                    ],                    
                    height: 310,
                    trackOver: true,
                    overItemCls: 'x-item-over',
                    itemSelector: 'div.thumb-wrap',
                    emptyText: 'No images to display',                    
                    prepareData: function(data) {
                        Ext.apply(data, {
                            id:data.id,
                            email: data.email,
                            imgSrc:data.imgSrc,      
                            details:data.details                      
                        });
                        return data;
                    }                    
    }),
    // initComponent: function() {        
        
    //     this.items = [            
    //         // {
    //         //     xtype: 'panel',               
    //         //     items:[
    //         //         {
    //         //             xtype:'panel',
    //         //             title:'code',
    //         //             html:'Hi Vrushali',
    //         //             columnIndex:1,
    //         //             height:200,
    //         //             width:300
    //         //         },
    //         //         {
    //         //             xtype: 'component',
    //         //             width: 200,
    //         //             itemId: 'thumbnailImg',
    //         //             tpl: '<img src=""/>'
    //         //         }
    //         //     ]                    
    //         // }  
    //         {
    //                 Ext.create('Ext.view.View', {
    //                 store: Ext.data.StoreManager.lookup('listViewStore'),
    //                 tpl: [
    //                     '<tpl for=".">',
    //                         '<div class="thumb-wrap">',
    //                             '{email}',
    //                         '</div>',
    //                     '</tpl>',
    //                     '<div class="x-clear"></div>'
    //                 ],                    
    //                 height: 310,
    //                 trackOver: true,
    //                 overItemCls: 'x-item-over',
    //                 itemSelector: 'div.thumb-wrap',
    //                 emptyText: 'No images to display',                    
    //                 prepareData: function(data) {
    //                     Ext.apply(data, {
    //                         email: data.email                            
    //                     });
    //                     return data;
    //                 }                    
    //             })     
    //         }   
    //     ];        
    //     this.callParent();
    //}
});
