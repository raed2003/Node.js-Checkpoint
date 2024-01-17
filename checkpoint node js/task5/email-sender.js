const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rdchokri2003@gmail.com',
      pass: 'uzly asyw dknm bnvn'
    }
  });
  
  var mailOptions = {
    from: 'rdchokri2003@gmail.com',
    to: 'isramadssia23@gmail.com',
    subject: 'raciste tounsi',
    html:'<h1>hello world!</h1>\n<p>the one who lives<p/>\n<img src="https://e0.pxfuel.com/wallpapers/250/239/desktop-wallpaper-naruto-memes.jpg"/>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
