var Phones = Backbone.Collection.extend({
    url: '/phone'
}),
Phone = Backbone.Model.extend({
    rootUrl: '/phone',
    idAttribute: 'sid'
}),
Messages = Backbone.Collection.extend({
    url: '/message',
    send: function(from, to, content) {
        var options = {
            dataType: 'json',
            data: 'from='+from+'&to='+to+'&content='+content,
            url: this.url,
            type: 'POST'
        };

        return (this.sync || Backbone.sync).call(this, null, this, options);
    }
}),
Message = Backbone.Model.extend({
    rootUrl: '/message',
    idAttribute: 'sid'
})