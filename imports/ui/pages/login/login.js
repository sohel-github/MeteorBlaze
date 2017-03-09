import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import './login.html';

Template.LoginPage.events({

	'submit .login': function(e){
		e.preventDefault();

		var username = e.target.username.value;
		var password = e.target.password.value;

		Meteor.loginWithPassword(username,password);

		e.target.username.value="";
		e.target.password.value="";
	}

});