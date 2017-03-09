import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import './register.html';


Template.RegisterPage.events({

	'submit .register': function(e){
		e.preventDefault();

		var username = e.target.regusername.value;
		var email = e.target.regemail.value;
		var password = e.target.regpassword.value;

		Accounts.createUser({username:username, email:email, password:password}, function(){
			FlowRouter.go('/');
		});

		e.target.regusername.value="";
		e.target.regemail.value="";
		e.target.regpassword.value="";
	}

});