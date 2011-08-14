App.stores.events = new Ext.data.Store({
    model: 'Event',
    autoLoad: true,
 	proxy: {
        type: 'localstorage',
        id: 'event-proxy'
    }
});
