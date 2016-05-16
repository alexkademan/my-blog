
var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

module.exports = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#item-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  changeWidth: function() {
    var theEm = this.$('em');
    console.log( theEm );
    // theEm.attr( "style", "width: 50%" );
  }

});
