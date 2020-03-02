import { Template } from 'meteor/templating';
import { Recipes } from '../../api/collections/Recipes.js';

import './Menu.html';

Template.Menu.onCreated(function menuOnCreated(){
  const self = this;
  this.autorun(()=>{
    self.subscribe('recipes');
  });
});

Template.Menu.helpers({
  recipes: ()=>{
    return Recipes.find({inMenu: true});
  },
});