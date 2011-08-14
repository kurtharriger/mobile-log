App.views.Viewport = (function() {
	var addButton, titlebar, list, onAddAction;

    onAddAction = function() {
      Ext.dispatch({
          controller: 'Events',
          action: 'newEvent'
      });
    };

    addButton = {
        itemId: 'addButton',
        iconCls: 'add',
        iconMask: true,
        ui: 'plain',
        handler: onAddAction,
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

	return Ext.extend(Ext.Panel, {
	    fullscreen: true,
	    layout: 'fit',
	    dockedItems: [titlebar, footer],
	    items: [list],
		onAddAction: onAddAction
	});

})();