var path = require('path');
var emailTemplates = require('swig-email-templates');
var emailModule = require('./myEmailModule');

var options = {
	root: path.join(__dirname, 'emailTemplates')
};

emailTemplates(options, function(err, render) {
	var variables = {
		meatballCount: 9001,
		otherVar:'This is my other var'
	};
	render('meatball-sandwich.html', variables, function(err, html, text) {
		var emailInfo = {
			from: 'Tester <testingnodemailer2000@gmail.com>',
			to: 'INSERT AN EMAIL ADDRESS HERE, PREFERABLY YOUR OWN TO TEST WITH!',
			subject: 'Testing a template',
			text: text,
			html: html
		};
		emailModule.sendMail(emailInfo);
	});
});