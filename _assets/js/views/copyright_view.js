// app.copyright

var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

module.exports = Backbone.View.extend({
  el: 'span.date_year',

  initialize: function() {
    console.log( 'whats this about ?' );
    var today = new Date(),
         year = today.getFullYear();
    // console.log( this.$el );
    this.$el.html( year + ' ' );
  }

});
