
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
        return "200";
    }).catch(function(error) {
        return "404";
    });
    
    return "error";

    }
);

const port = process.env.PORT || 8080;
bot.listen(port);
