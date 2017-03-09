FlowRouter.route('/', {
	name: 'home',
	action(){
		BlazeLayout.render('MainLayout', {main: 'HomePage'});
	}
});

FlowRouter.route('/about', {
	name: 'about',
	action(){
		BlazeLayout.render('MainLayout', {main: 'AboutPage'});
	}
});

FlowRouter.route('/contact', {
	name: 'contact',
	action(){
		BlazeLayout.render('MainLayout', {main: 'ContactPage'});
	}
});

FlowRouter.route('/login', {
	name: 'login',
	action(){
		BlazeLayout.render('MainLayout', {main: 'LoginPage'});
	}
});

FlowRouter.route('/register', {
	name: 'register',
	action(){
		BlazeLayout.render('MainLayout', {main: 'RegisterPage'});
	}
});