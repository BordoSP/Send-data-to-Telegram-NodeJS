var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

var TelegramBot = require('node-telegram-bot-api');
var token = 'YOUR TOKEN HERE';
var bot = new TelegramBot(token, {polling: true});
var id = your chat id;

var counter = 0;

http.createServer(function(req, res) {
  file.serve(req, res);
    req.on('data', function (data) {
        var readyData = JSON.parse(data);
        setTimeout(function() {
            bot.sendMessage(id, "-----------------------");
        }, 300);
         setTimeout(function() {
            bot.sendMessage(id, "Заказ № " + ++counter);
        }, 600);
        setTimeout(function() {
            bot.sendMessage(id, "Имя: " + readyData.name);
        }, 800);
        setTimeout(function() {
            bot.sendMessage(id, "Email: " + readyData.email);
        }, 1000);
        setTimeout(function() {
            bot.sendMessage(id, "Телефон: " + readyData.telephone);
        }, 1200);
         setTimeout(function() {
            bot.sendMessage(id, "-----------------------");
        }, 1400);
        
      } );
}).listen(8080);



console.log('Server running on 127.0.0.1:8080');