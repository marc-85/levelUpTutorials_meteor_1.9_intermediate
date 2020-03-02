import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';
 
Accounts.ui.config({
  requestPermissions: {
    //facebook: ['user_friends'],
    //google: ['cloud-platform']
  },
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});

Accounts.onLogin(
  function (){
    FlowRouter.go('recipe-book');
  }
);

Accounts.onLogout(
  function (){
    FlowRouter.go('home');
  }
);