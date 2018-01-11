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
        var string = "Заказ №" + ++counter + "\n" + "Имя: " + readyData.name + "\n" + "Email: " + readyData.email + "\n" + "Телефон: " + readyData.telephone;
        bot.sendMessage(id, string); 
      } );
}).listen(8080);



console.log('Server running on 127.0.0.1:8080');
