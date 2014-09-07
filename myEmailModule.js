var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'testingnodemailer2000@gmail.com',
		pass: 'bestPasswordEVER'
	}
});

exports.sendMail = function(emailInfo){
	transporter.sendMail(emailInfo, function(error, info){
		if(error){
			console.log(error);
		}else{
			console.log('Message sent: ' + info.response);
		}
	});
};