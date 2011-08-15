App.controllers.Events = (function() {

  return  Ext.regController('Events', {
		store: App.stores.events,
	
    	       newEvent: function() {
                 this.store.create({ datetime: new Date(), lat: 0, lon:0 } );
               },
               clearEvents: function() {
                 this.store.removeAll();
               }

	});
})();
