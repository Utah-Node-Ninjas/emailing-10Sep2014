var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'testingnodemailer2000@gmail.com',
		pass: 'bestPasswordEVER'
	}
});


var meatballCount = 25;
var	otherVar = 'This is my other var';

//THIS IS HORRIBLY PAINFUL AND DISGUSTING AND TOTALLY UNMAINTAINABLE
var myHTML = '';
myHTML += '<h1 style="font-size: 15px; color:blue">Hello, This is a test</h1>';
if(meatballCount > 9000) {
	myHTML += '<p style="font-size:25px; color:#880000">IT\'S OVER 9000!!!!!</p>';
} else {
	myHTML += '<p style="color:deeppink">I have ' + meatballCount + ' meatballs</p>';
}
myHTML += '<p>' + otherVar + '</p>';


var emailInfo = {
	from: 'Tester <testingnodemailer2000@gmail.com>', // sender address
	to: 'INSERT AN EMAIL ADDRESS HERE, PREFERABLY YOUR OWN TO TEST WITH!', // comma delimited list of receivers
	subject: '...an html email...',
	html: myHTML
};

transporter.sendMail(emailInfo, function(error, info){
	if(error){
		console.log(error);
	}else{
		console.log('Message sent: ' + info.response);
	}
});