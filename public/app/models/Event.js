App.models.Event = (function() {
	return Ext.regModel('Event', {
    	fields: [
	        {
	            name: 'datetime',
	            type: 'date'
	        }, {
	            name: 'lat',
	            type: 'string'
	        }, {
	            name: 'lon',
	            type: 'string'
	        }
	    ]
	});
})();