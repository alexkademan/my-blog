// app.aboutPageStats

var Backbone = require ('backbone');
var _ = require ('underscore');
var $ = require ('jquery');

var SkillsCollection = require('../models/skills_collection');
var LIview = require('./list_item_view');

module.exports = Backbone.View.extend({

  el: '.skills',

  initialize: function() {

    if(this.$el.length > 0){

      for(i=0; i < this.$el.length; ++i) { // loop through each <UL>

        if(i === 0) { // this is the webSkills <UL>
          app.webSkills = new SkillsCollection(); // empty collection for stats on about page
          this.addLIs(this.$el[i], app.webSkills); // adds the <LI>s to the collection.
          this.$el[i].innerHTML = '';
          app.webSkills.each(this.renderLI, this);

        } else if (i === 1){ // this is the printSkills <UL>
          app.printSkills = new SkillsCollection(); // empty collection for stats on about page
          this.addLIs(this.$el[i], app.printSkills); // adds the <LI>s to the collection.
          this.$el[i].innerHTML = '';
          app.printSkills.each(this.renderLI, this);
        }

      }
    }
  },

  renderLI: function(object) {
    var view = new LIview({ model: object });
    var target = $('#' + view.model.get('list')); // this is a little sloppy, (can't cache this way)
    target.append(view.render().el); // does the actual rendering

    // view.changeWidth();

  },

  /* this function will fish thru the DOM nodes within a UL from the about page and set them up in the correct model */
  addLIs: function(thisList, thisCollection) {
    // console.log(thisList.id);
    for(n=0; thisList.children.length > n; ++n) { // look at every individual <LI>

      var thisObject = '';
      var thisItem = thisList.children[n];

      if(thisItem.firstChild.localName === 'h2'){ // this is the first <li> that acts as my title.
        thisObject = {
          heading: thisItem.innerText,
          showing: true,
          list: thisList.id
        }
      } else if( thisItem.firstChild.localName === 'em' ) {
        thisObject = {
          percentage: thisItem.firstChild.innerText, // whats within the <em>
          skillName: thisItem.innerText.replace(thisItem.firstChild.innerText + ' ', ''),
          list: thisList.id
        }
      };
      if(thisObject){ thisCollection.add(thisObject); }
    }
  }

});
