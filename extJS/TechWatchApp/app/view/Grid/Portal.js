Ext.define("TechWatchExtApp.view.Grid.Portal",{
    extend: "Ext.view.View",
 
    requires: [
    ],
    
    xtype:'gridView',
    autoDestroy: true,
    store:Ext.data.StoreManager.lookup('listViewStore'),
    itemSelector: 'div.thumb-wrap',
    itemId: 'gridViewInstance',
    itemId:'infoGrid',
    //width: 400,
    //height: 800,
    scrollable:true,
    layout:{
        type:'hbox'
    },                                     
    tpl:new Ext.XTemplate(                                                   
        '<tpl for=".">',
            '<tpl if="xindex % 3 === 1">',
                '<div class="{["rowDiv" + xindex]}">',    
                    '<div class="containerDiv">',  
                    '<div class="thumb-wrap {[TechWatchExtApp.bShowImages ? "showThumb" : "noThumb"]}">',                                
                        '<div class="thumb">',
                            '<tpl if="TechWatchExtApp.bShowImages">',
                                '<img src="{imgSrc}'+'?random{[xindex  ? xindex : Math.random()]}"/>',
                            '</tpl>',                            
                        '</div>',
                       '<div class="detailsDiv">',
                            '<h3>{email}</h3>',
                            '<div>',
                                '<p><a href="#">More</a></p>',
                                '<div class="descriptionDiv hideElement"><p>{details}</p></div>',
                            '</div>',
                            '<div class="buttonDiv">',
                                '<input type="button" value="button" class="btnCls">',
                                '<input type="button" value="button" class="btnCls">',
                            '</div>',
                        '</div>',
                    '</div>',                                          
            '<tpl else>',                
                    '<div class="thumb-wrap {[TechWatchExtApp.bShowImages ? "showThumb" : "noThumb"]}">', 
                        '<div class="thumb">',                               
                            '<tpl if="TechWatchExtApp.bShowImages">',
                                    '<img src="{imgSrc}'+'?random{[xindex  ? xindex : Math.random()]}"/>',
                            '</tpl>',
                        '</div>',
                        '<div class="detailsDiv">',
                            '<h3>{email}</h3>',
                            '<div>',
                                '<p><a href="#">More</a></p>',
                                '<div class="descriptionDiv hideElement"><p>{details}</p></div>',
                            '</div>',
                            '<div class="buttonDiv">',
                                '<input type="button" value="button" class="btnCls">',
                                '<input type="button" value="button" class="btnCls">',
                            '</div>',
                        '</div>',
                    '</div>',                
                '<tpl if="xindex % 3 === 0">',
                        '</div>', 
                    '</div>', 
                '</tpl>',
            '</tpl>',
        '</tpl>',

        {
            getImageSrc:function(imgSrc){
                return imgSrc + "?random" + Math.random();
            }
        }
    ),                                        

    initComponent: function() {                
        this.items = [                                  
        ];        
        this.callParent();
    },
    listeners:{
        activate:function( portal, eOpts ){
            console.log('gridView inside activate' );
        },
        deactivate:function( portal, eOpts ){
            portal.destroy();
           console.log('gridView inside activate' ); 
        }
    }
});