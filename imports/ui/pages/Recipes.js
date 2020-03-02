import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Recipes } from '../../api/collections/Recipes.js';

import './Recipe.html';
import './Recipes.html';
import './NewRecipe.js';

Template.Recipes.onCreated(function onCreatedRecipes(){
  const self = this;
  self.autorun(function recipeAutorun(){
    self.subscribe('recipes');
  });
  /*const instance = Template.instance();
  instance.autorun(()=>{
    instance.subscribe('recipes');
  });*/
});

Template.Recipes.onRendered(()=>{
  const instance = Template.instance();
  instance.autorun(()=>{
    instance.subscribe('recipes');
  });
});


Template.Recipes.helpers({
  recipes(){
    return Recipes.find({owner: Meteor.user()._id});
  }
});