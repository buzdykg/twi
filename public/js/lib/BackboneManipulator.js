/**
 * Public methods:
 * draw()
 * append(model)
 * insert(model)
 * replace(model)
 * insertOrReplace(model)
 * replaceWith(model, html)
 * hide(model)
 * show(model)
 * hideAll()
 * clear()
 */
(function() {
    Backbone.ListManipulator = function(collection, options) {
        options = options || { };

        var self = {},
            $target,
            template;

        self.collection = collection;

        var getSelector = function(mm) {
            var id = mm.get(self.options.field);
            return (self.options.selector).format(id);
        }

        self.options = _.defaults(options, {
            target: $("#item_list"),
            selector: "#row-{id}",
            template: null,
            field: 'id',
            empty: false
        });

        var initialize = function() {
                $target = $(self.options.target);
                template = self.options.template;
            },
            getHtml = function(m) {
                return template(self.getTemplateData(m));
            };


        self.insertOrReplace = function(m) {
            var selector = getSelector(m),
                field    = self.options.field;

            if ($target.find(selector).length > 0) {
                $($target.find(selector)).replaceWith(getHtml(m));
            } else {
                var lastModel = undefined;

                _.each(self.collection.models, function(item) {
                    if (item.get(field) > m.get(field)) {
                        lastModel = item.get('id');

                        return false;
                    }
                });

                if (lastModel == undefined) {
                    $target.append(getHtml(m));
                } else {
                    $target.find(getSelector(lastModel)).before(getHtml(m));
                }
            }
        }

        self.insert = function(m) {
            var lastModel = undefined,
                field    = self.options.field;

            _.each(self.collection.models, function(item) {
                if (item.get(field) > m.get(field)) {
                    lastModel = item;

                    return false;
                }
            });

            if (lastModel == undefined || $target.find(getSelector(lastModel)).length == 0) {
                $target.append(getHtml(m));
            } else {
                $target.find(getSelector(lastModel)).before(getHtml(m));
            }
        }

        self.replace = function(m) {
            var selector = getSelector(m);

            $($target.find(selector)).replaceWith(getHtml(m));
        }

        self.replaceWith = function(m, element) {
            var selector = getSelector(m);

            $($target.find(selector)).replaceWith(element);
        }

        self.append = function(m) {
            $target.append(getHtml(m));

            self.manageEmpty();
        }

        self.remove = function(m) {
            var selector = getSelector(m);

            $target.find(selector).remove();

            self.manageEmpty();
        }

        self.hideAll = function() {
            $target.find("> *").hide();
        }

        self.show = function(m) {
            var selector = getSelector(m);
            $target.find(selector).show();
        }

        self.clear = function() {
            if ($target.prop('tagName').toLowerCase() == 'table') {
                $target.find('tr:gt(0),tbody').remove();
            } else {
                $target.html('');
            }
        }

        self.has = function(m) {
            return Boolean($target.find(getSelector(m)).length);
        }

        self.getTemplateData = function(m) {
            return {item: m};
        }

        self.manageEmpty = function() {
            var isEmpty = self.isEmpty();

            if (isEmpty) {
                self.clear();
                $target.append(self.options.empty);
            } else {
                $target.find('> .no-data').remove();
            }

            if ($target.prop('tagName').toLowerCase() == 'table') {
                if (isEmpty) {
                    $target.find('tr:eq(0)').hide();
                } else {
                    $target.find('tr:eq(0)').show();
                }
            }

        }

        self.isEmpty = function() {
            return self.options.empty && $target.find("> *").not('.no-data').length <= ($target.prop('tagName').toLowerCase() == 'table' ? 1 : 0);
        }

        self.draw = function(models) {
            self.clear();
            var models = models != undefined ? models: self.collection.models;

            _.each(models, function(model) {self.append(model)});

            self.manageEmpty();
        }

        initialize();

        return self;
    };
})();
