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
	subject: 'Testing McTesterton',
	test: 'My test is the BEST!', //plaintext version
	html: 'My test is the <b>BEST!</b> πø˚´ø˜∂∂∑œ∑åˆ∆≈ œß¥´çˆ∂ç' // html body
};

// send mail with defined transport object
transporter.sendMail(emailInfo, function(error, info){
	if(error){
		console.log(error);
	}else{
		console.log('Message sent: ' + info.response);
	}
});