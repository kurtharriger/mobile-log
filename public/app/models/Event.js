App.models.Event = Ext.regModel('Event', {
    fields: [
        {
            name: 'id',
            type: 'date'
        }, {
            name: 'lat',
            type: 'string'
        }, {
            name: 'lon',
            type: 'string'
        }
    ],

    proxy: {
        type: 'localstorage',
        id: 'event-proxy'
    }
});
