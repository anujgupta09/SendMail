const nodemailer = require("nodemailer");

(async function run() {
    console.log("Running Mail Server")

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "job.anujgupta@gmail.com",
          pass: "LINEUPX@123321"
        },
      });

      await transporter.sendMail({
        from: '"Anuj 👻" <job.anujgupta@gmail.com>', // sender address
        to: "mohsinali@lineupx.com, 1anujgupta123@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      
})();