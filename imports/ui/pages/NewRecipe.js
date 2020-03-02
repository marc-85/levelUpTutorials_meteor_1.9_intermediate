import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './NewRecipe.html';

Template.NewRecipe.onCreated(function newRecipeOnCreated() {
  this.ingredients = new ReactiveVar([]);
  //Meteor.subscribe('recipes'); already un Recipes.js
});

Template.NewRecipe.helpers({
  ingredients(){
    return Template.instance().ingredients.get();
  }
});

Template.NewRecipe.events({
  'submit .recipe-form'(event){
    event.preventDefault();
    let values = {
      name: event.target.name.value,
      desc: event.target.desc.value,
      ingr: Template.instance().ingredients.get(),
    };
    //console.log(input);
    Meteor.call('recipes.insert', values);
    //alert(Meteor.user().emails[0].address);
    console.log('Recipe inserted in DB');

    // reset values
    event.target.name.value = '';
    event.target.desc.value = '';
    Template.instance().ingredients.set([]);
  },
  'click .js-delete-ing'(event){
    event.preventDefault();
    let xId = Number(event.currentTarget.id)
    let newIngredients = Template.instance().ingredients.get();
    newIngredients.splice(xId,1);
    Template.instance().ingredients.set(newIngredients);
  },
  'submit .js-new-ingredient'(event){
    event.preventDefault();
    let newIngredients = Template.instance().ingredients.get();
    let valueInput = event.target.boxNewIngredient.value;
    let quantity = event.target.quantity.value;
    let newIngr = {name: valueInput, amount: quantity};
    newIngredients.push(newIngr);
    Template.instance().ingredients.set(newIngredients);
    
    event.target.boxNewIngredient.value='';
    event.target.quantity.value = '';
    event.stopImmediatePropagation();
  },
});