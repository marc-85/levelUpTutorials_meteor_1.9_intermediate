import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Recipes = new Mongo.Collection('recipes');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('recipes', function recepesPublication() {
    //return Recipes.find({owner: this.userID});
    return Recipes.find({owner: Meteor.user()._id});
  });

  Meteor.publish('recipes.single', function singleRecipPubli(recepID) {
    check(recepID, String);
    return Recipes.find({_id: recepID});
  });
}

Meteor.methods({
  'recipes.insert'(obj){
    //chech repipe name
    check(obj.name, String);
    //check description
    check(obj.desc, String);

    for(let ing in obj.ingr ){
      check(obj.ingr[ing].name, String);
      check(obj.ingr[ing].amount, String);
    }

    if( !Meteor.userId() ){
      throw new Meteor.Error('not-authorized');
    }

    Recipes.insert({
      owner: Meteor.userId(),
      user: Meteor.user().username,
      desc: obj.desc, // description
      recipeName: obj.name,
      inMenu: false,
      ingr: obj.ingr, // list of ingredients
      createdAt: new Date(),
    });
  },

  'recipes.delete'(id){
    check(id, String);
    Recipes.remove({_id: id});
  },

  'recipes.addToMenu'(id){
    check(id, String);
    Recipes.update(
      {_id: id},
      {$set: {inMenu: true} });
  },

  'recipes.removeFromMenu'(id){
    check(id, String);
    Recipes.update(
      {_id: id},
      {$set: {inMenu: false} });
  }
});