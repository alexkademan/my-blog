// app.aboutPageStats

var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

module.exports = Backbone.View.extend({

  el: 'ul.skills li',

  initialize: function() {
    // console.log('about_stats_view');
    console.log(this.$el);
  }

});
