const nodemailer = require("nodemailer");

async function main() {
  let testAccount = await nodemailer.createTestAccount();
  console.log("✅ Ethereal test account created:");
  console.log(`SMTP host: ${testAccount.smtp.host}`);
  console.log(`SMTP port: ${testAccount.smtp.port}`);
  console.log(`Username: ${testAccount.user}`);
  console.log(`Password: ${testAccount.pass}`);
  console.log(`Login URL: ${nodemailer.getTestMessageUrl({ messageId: "<id>" })}`);
}

main().catch(console.error);
