App.views.Viewport = (function() {
    var onAddAction = function() {
      Ext.dispatch({
          controller: 'Events',
          action: 'newEvent'
      });
    };

    var onClearAction = function() {
      Ext.dispatch({
        controller: 'Events',
        action: 'clearEvents'
      });
    };

    var addButton = {
        itemId: 'addButton',
        iconCls: 'add',
        iconMask: true,
        ui: 'plain',
        handler: onAddAction,
    };

    var clearButton = { 
      text: 'Clear',
      iconMask: true,
      iconCls: 'trash',
      ui: 'round',
      handler: onClearAction
    };

    var titlebar = {
        dock: 'top',
        xtype: 'toolbar',
        title: 'Events',
        items: [ { xtype: 'spacer' }, addButton ]
    };

    var list = {
       xtype: 'list',
       itemTpl: '{datetime}',
       store: App.stores.events
    };

    var footbar = {
      dock: 'bottom',
      xtype: 'toolbar',
      ui: 'light',
      //layout: { pack: 'center' },
      items: [{xtype: 'spacer'},  clearButton] 
    };

    var footer = {
      dock: 'bottom',
      html: 'Copyright (c) 2011, Kurt Harriger. All Rights Reserved.'
    };

    


	return Ext.extend(Ext.Panel, {
	    fullscreen: true,
	    layout: 'fit',
	    dockedItems: [titlebar, footer, footbar],
	    items: [list],
		onAddAction: onAddAction
	});

})();
