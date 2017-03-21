
var LINEBot = require('line-messaging');

var bot = LINEBot.create({
  channelID: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelToken: process.env.CHANNEL_TOKEN
});
bot.webhook('https://line-bot-simple.herokuapp.com/');


// When we receive message
bot.on(LINEBot.Events.MESSAGE, function(replyToken, message) {
  
    bot.replyTextMessage(replyToken, 'hello!').then(function(data) {
        // add your code when success.
    }).catch(function(error) {
        // add your code when error.
    });
  
    }
);

bot.listen(8080);

