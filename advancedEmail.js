var path = require('path');
var emailTemplates = require('swig-email-templates');
var emailModule = require('./myEmailModule');

var options = {
	root: path.join(__dirname, 'templates')
};


emailTemplates(options, function(err, render) {
	var variables = {
		meatballCount: 25,
		otherVar:'This is my other var'
	};
	render('meatball-sandwich.html', variables, function(err, html, text) {
		var emailInfo = {
			from: 'Node Meetup <testingnodemailer2000@gmail.com>',
			to: 'joeycozza@gmail.com',
			subject: 'Testing a Template',
			text: text,
			html: html
		};
		emailModule.sendMail(emailInfo);
	});
});