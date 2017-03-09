import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import './header.html';

Template.Header.events({

	'click .logout': function(e){
		e.preventDefault();
		Meteor.logout(function(){
			FlowRouter.go('/');
		});
	}

});