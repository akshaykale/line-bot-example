
var LINEBot = require('line-messaging');
var logger = require("./logger.js");

var bot = LINEBot.create({
  channelID: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelToken: process.env.CHANNEL_TOKEN
});
bot.webhook('https://line-bot-simple.herokuapp.com/');


// When we receive message
bot.on(LINEBot.Events.MESSAGE, (replyToken, message) => {
    logger.log("111");
    bot.replyTextMessage(replyToken, 'hello!').then(function(data) {
        return "200";
    }).catch(function(error) {
        return "404";
    });
    logger.log("222");
    return "error";

    }
);
logger.log("333");
const port = process.env.PORT || 8080;
bot.listen(port);
logger.log("444");
