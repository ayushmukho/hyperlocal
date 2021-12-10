import nodemailer from "nodemailer";
// import { google } from "googleapis";
import { config } from "dotenv";
config();

//using google api
// const { OAuth2 } = google.auth;
// const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

// const {
//   MAILING_SERVICE_CLIENT_ID,
//   MAILING_SERVICE_CLIENT_SECRET,
//   MAILING_SERVICE_REFRESH_TOKEN,
//   SENDER_EMAIL_ADDRESS,
// } = process.env;

// const oauth2Client = new OAuth2(
//   MAILING_SERVICE_CLIENT_ID,
//   MAILING_SERVICE_CLIENT_SECRET,
//   MAILING_SERVICE_REFRESH_TOKEN,
//   OAUTH_PLAYGROUND
// );

// // send mail
// export const sendEmail = (to, url, txt) => {
//   oauth2Client.setCredentials({
//     refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
//   });

//   const accessToken = oauth2Client.getAccessToken();
//   const smtpTransport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: SENDER_EMAIL_ADDRESS,
//       clientId: MAILING_SERVICE_CLIENT_ID,
//       clientSecret: MAILING_SERVICE_CLIENT_SECRET,
//       refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
//       accessToken,
//     },
//   });

//   const mailOptions = {
//     from: `HyperLocal<${SENDER_EMAIL_ADDRESS}>`,
//     to: to,
//     subject: "HyperLocal",
//     html: `
//           <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
//           <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to Hyperlocal</h2>
//           <p>Congratulations! You're almost set to start using Hyper✮Local.
//               Just click the button below to validate your email address.
//           </p>

//           <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>

//           </div>
//       `,
//   };

//   smtpTransport.sendMail(mailOptions, (err, infor) => {
//     if (err) return err;
//     return infor;
//   });
// };

//using sendingblue
export const sendEmail = async (to, url, txt, from = "ashu@hyperlocal.com") => {
  const transporter = nodemailer.createTransport({
    host: process.env.SENDINGBLUE_HOST,
    port: process.env.SENDINGBLUE_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SENDINGBLUE_EMAIL, // generated ethereal user
      pass: process.env.SENDINGBLUE_PASS, // generated ethereal password
    },
  });

  // send mail with defined transport object
  const mailOptions = {
    from: `HyperLocal <${from}>`,
    to: to,
    subject: "HyperLocal",
    html: `
            <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
            <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to Hyperlocal</h2>
            <p>Congratulations! You're almost set to start using Hyper✮Local.
               Just click the button below to validate your email address.
            </p>
            
             <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
  
             </div>
        `,
  };
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return console.log(error);
    }
  });
};
