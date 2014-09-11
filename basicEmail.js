var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'testingnodemailer2000@gmail.com',
		pass: 'bestPasswordEVER'
	}
});

var emailInfo = {
	from: 'Tester <testingnodemailer2000@gmail.com>', // sender address
	to: 'INSERT AN EMAIL ADDRESS HERE, PREFERABLY YOUR OWN TO TEST WITH!', // comma delimited list of receivers
	subject: 'Just a basic email',
	html: '<p>My test is the <b>BEST!</b>˚´ø˜∂∂∑œ∑åˆ∆≈</p>' //plaintext version
};

// send mail with defined transport object
transporter.sendMail(emailInfo, function(error, info){
	if(error){
		console.log(error);
	}else{
		console.log('Message sent: ' + info.response);
	}
});