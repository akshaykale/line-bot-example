
var config = require('config');
var LINEBot = require('line-messaging');

var bot = LINEBot.create({
  channelID: config.get('line.channel_id'),
  channelSecret: config.get('line.channel_secret'),
  channelToken: config.get('line.channel_token')
});
bot.webhook(process.env.HEROKU_URL);


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

