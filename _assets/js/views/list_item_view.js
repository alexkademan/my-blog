
var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

module.exports = Backbone.View.extend({

  tagName: 'li',

  template: _.template($('#item-template').html()),

  initialize: function(){
    // this.$el = $('#' + this.model.get('list'));
    // this.render();
  },

  render: function() {
    // this.$el.append(this.template(this.model.toJSON()));
    // this.$el.html(this.template(this.model.toJSON()));
    return this.template(this.model.toJSON());
  },

  changeWidth: function() {
    // console.log( this );
    this.$el.attr("style", "width: 50%");
  }

});
