// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "AC8458895cb934eaebeddd748a5268205b";
const authToken = "faa006ac8d33025c47f2d7c2f6fcfd0a";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+17128827619',
     to: '+919701499676'
   })
  .then(message => console.log(message.sid));
