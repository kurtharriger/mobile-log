App.stores.events = (function() { 
	return new Ext.data.Store({
    	model: 'Event',
	    autoLoad: true,
	 	proxy: {
	        type: 'localstorage',
	        id: 'event-proxy'
	    }
	});
})();