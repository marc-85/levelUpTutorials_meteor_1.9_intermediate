import { Template } from 'meteor/templating';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { Recipes } from '../../api/collections/Recipes.js';

import './RecipeSingle.html';
import './Recipe.js';

Template.RecipeSingle.onCreated(function recipeSingleCreated(){
  const self = this;
  self.autorun(function singleAutorun(){
    self.subscribe('recipes');
  });
});


Template.RecipeSingle.helpers({
  recipe(){
    const name = FlowRouter.getParam('name');
    return Recipes.findOne({recipeName: name});
  }
});