App.views.Viewport = (function() {
	var addButton, titlebar, list;

    addButton = {
        itemId: 'addButton',
        iconCls: 'add',
        iconMask: true,
        ui: 'plain',
        handler: onAddAction,
        scope: this
    };

    titlebar = {
        dock: 'top',
        xtype: 'toolbar',
        title: 'Events',
        items: [ { xtype: 'spacer' }, addButton ]
    };

    footer = {
        dock: 'bottom',
		html: 'Copyright (c) 2011, Kurt Harriger. All Rights Reserved.'
    };


    list = {
        xtype: 'list',
        itemTpl: '{datetime}',
        store: App.stores.events
    };

	function onAddAction() {
      Ext.dispatch({
          controller: 'Events',
          action: 'newEvent'
      });
    };	
	
	return Ext.extend(Ext.Panel, {
	    fullscreen: true,
	    html: 'placeholder',
	    layout: 'fit',
	    dockedItems: [titlebar, footer],
	    items: [list],
		onAddAction: onAddAction
	});
	
})();
