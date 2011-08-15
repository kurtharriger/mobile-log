App = (function() {
	return new Ext.Application({
    	name: "App",

          clearLocalStorage: function() {
            localStorage.clear();
          },
		
	    launch: function() {
                App.stores.events.on('clear', this.clearLocalStorage);
	        this.views.viewport = new this.views.Viewport();
	    }
	});
})();
