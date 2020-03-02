import { Template } from 'meteor/templating';
import { Recipes } from '../../api/collections/Recipes.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';

import './Recipe.html';

Template.Recipe.onCreated(function reciOnCreated(){
  const self = this;
  this.autorun(()=>{
    self.subscribe('recipes');
  });
});

Template.Recipe.events({
  'click .js-delete-reci'(event){
    //const recepName = FlowRouter.getParam('name');
    //const recpID = Recipes.findOne({_id: this._id});
    Meteor.call('recipes.delete',this.item._id);
    FlowRouter.go('/recipe-book');
    console.log('Recipe Deleted!');
  },
  'click .btn-primary'(event){
    const id = event.target.name;
    Meteor.call('recipes.addToMenu', id);
  },
  'click .btn-deny'(event){
    const id = event.target.name;
    Meteor.call('recipes.removeFromMenu', id);
  }
});