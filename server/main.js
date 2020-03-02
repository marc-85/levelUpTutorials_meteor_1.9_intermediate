import { Meteor } from 'meteor/meteor';
import '../imports/api/collections/Recipes.js';

Meteor.startup(() => {
  // code to run on server at startup
  console.log(Meteor.settings.private.hello);
});
