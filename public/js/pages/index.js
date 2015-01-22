$(document).ready(function() {

    var
    messages = new Messages(),
    phones = new Phones(),
    MainView = Backbone.View.extend({

        el: $('body'),
        collection: phones,
        subviews: {},
        currentNumber: '',

        initialize: function() {
            var that = this;

            this.subviews = {
                sent: new SentView(),
                send: new SendView()
            };

            this.collection.fetch().done(function() {
                var items = [{key: '', value: 'Select a Phone Number'}];
                _.each(that.collection.models, function(model) {
                    items.push({key: model.get('phone_number'), value: model.get('phone_number')});
                });

                $('[name=phone_number]').html(_.template($('#options_template').html())({items: items, selected: ''}) );
            })
        },
        events: {
            'change [name=phone_number]': 'numberChanged'
        },
        render: function() {

        },
        numberChanged: function(e) {
            this.subviews.sent.render($(e.currentTarget).val());
        }
    }),
    SentView = Backbone.View.extend({
        el: $("#messages"),
        template: _.template($("#message_template").html()),
        collection: messages,
        initialize: function() {
            this.manipulator = new Backbone.ListManipulator(this.collection, {
                target: $("#messages tbody"),
                selector: "tr[data-id='{0}']",
                template: this.template
            });
        },
        render: function(phone_number) {
            var that = this;

            this.collection.fetch({
                data: {phone_number: phone_number}
            }).done(function() {
                that.manipulator.draw();
            })
        }
    }),
    SendView = Backbone.View.extend({

        el: $("#form_send_sms"),
        collection: messages,

        events: {
            "click #send_sms": 'sendSms'
        },

        sendSms: function(e) {
            e.preventDefault();
            this.collection.send($('[name=phone_number]').val(), $('[name=to_number]').val(), $('[name=content]').val());
        }
    });

    new MainView;
});