import {FlowRouter} from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';

//Import layouts
import '../../../client/main.js';
import '../../ui/layouts/HomeLayout.js';
import '../../ui/layouts/MainLayout.js';
import '../../ui/pages/Recipes.js'
import '../../ui/pages/Menu.js';
import '../../ui/pages/RecipeSingle.js';
import '../../ui/pages/ShoppingList.js';


FlowRouter.triggers.enter([
  function(context,redirect){
    if( !Meteor.userId() ){
      FlowRouter.go('home');
    }
  }
]);

FlowRouter.route('/',{
  name: 'home',
  action(){
    /*if( Meteor.userId() ){
      FlowRouter.go('recipe-book');
    }*/
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book',{
  name: 'recipe-book',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});

FlowRouter.route('/menu',{
  name: 'menu',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Menu'});
  }
});

FlowRouter.route('/recipe/:name',{
  name: 'recipe',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
  }
});

FlowRouter.route('/shopping-list',{
  name: 'shoppingList',
  action(){
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
  }
});