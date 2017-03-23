
var LINEBot = require('line-messaging');
var logger = require("./logger.js");
var app = require('express');
var server = require('http').Server(app);

var bot = LINEBot.create({
  channelID: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelToken: process.env.CHANNEL_TOKEN
});
//app.use(bot.webhook('https://line-bot-simple.herokuapp.com/'));
app.use(bot.webhook(process.env.HEROKU_URL));
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
//const port = process.env.PORT || 8080;
//server.listen(port);
logger.log("444");


if ( process.env.HEROKU_URL) {
    
    //const http = require("http");
    const port = process.env.PORT || 8080;
    server.listen(port);
    //app.use(bot.webhook('https://line-bot-simple.herokuapp.com/'));
    //http.createServer().listen(port, () => bot.webhook('https://line-bot-simple.herokuapp.com/'));
} else {
    logger.log("Could not find the now.sh/Heroku environment variables. Please make sure you followed readme guide.");
 }