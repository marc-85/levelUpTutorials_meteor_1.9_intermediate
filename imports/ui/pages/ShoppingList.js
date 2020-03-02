import { Template } from 'meteor/templating';
import { Recipes } from '../../api/collections/Recipes.js';

import './ShoppingList.html';

Template.ShoppingList.onCreated(function(){
  const self = this;
  this.autorun( ()=>{
    self.subscribe('recipes');
  });
});

Template.ShoppingList.helpers({
  shoppingList: ()=>{
    return Recipes.find({inMenu: true});
  },
});