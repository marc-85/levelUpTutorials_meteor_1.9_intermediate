import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import '../imports/startup/client/routes.js';
import '../imports/startup/client/accounts-config.js';

import './main.html';

Template.MainTemplate.onCreated(function(){
  console.log('Client started.');
});

Template.MainTemplate.helpers({
  title(){
    let name = Meteor.userId().user;
    name = name + '\'s recipes'
    return 'recipe book';
  }
});