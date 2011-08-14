App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    
    initComponent: function() {
		var addButton, titlebar, list;

        addButton = {
            itemId: 'addButton',
            iconCls: 'add',
            iconMask: true,
            ui: 'plain',
            handler: this.onAddAction,
            scope: this
        };

        titlebar = {
            dock: 'top',
            xtype: 'toolbar',
            title: 'Events',
            items: [ { xtype: 'spacer' }, addButton ]
        };

        list = {
            xtype: 'list',
            itemTpl: '{datetime}',
            store: App.stores.events
        };

        Ext.apply(this, {
            html: 'placeholder',
            layout: 'fit',
            dockedItems: [titlebar],
            items: [list]
        });

        App.views.Viewport.superclass.initComponent.apply(this, arguments);
	},

	 onAddAction: function() {
      Ext.dispatch({
          controller: 'Events',
          action: 'newEvent'
      });
  }

});
