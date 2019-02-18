const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTMyMzc3Mjk2NzcwNjk1MjAy.DxrGPQ.OCcuquuXngT2NNbey_l2jEUtk28'

bot.on('message', function(message){
    if(message.content == 'fb/Does the bot work?')
    {
        message.reply('Yes, I do work.');
    }
});

bot.on('message', function(message){
    if(message.content == 'fb/Are you weird?')
    {
        message.reply('No you.');
    }
});

bot.on('message', function(message){
    if(message.content == 'fb/Who made the bot?')
    {
        message.reply('My creator is St!b!');
    }
});

bot.on('message', function(message){
    if(message.content == 'fb/Tell me joke1')
    {
        message.reply('You. Just kidding!');
    }
});

bot.on('message', function(message){
    if(message.content == 'fb/Tell me joke2')
    {
        message.reply('Okay, here we go, the time it took to make me...');
    }
});
bot.on('message', function(message){
    if(message.content == 'fb/Want to play Fortnite?')
    {
        message.reply('I think you should play a different game.');
    }
});

bot.on('message', function(message){
    if(message.content == 'fb/Tell me joke3')
    {
        message.reply('Name a more iconic duo, 9 year olds and Fortnite.');
    }
});

bot.on('message', function(message){
    if(message.content == 'fb/What should I do?')
    {
         message.reply('You should play with you friends. Suggestion: Me!');
    }
});

bot.on('message', function(message){
    if( message.content == 'fb/Start a conversation')
    {
         message.reply('How is your day going? *Answer fb/Good or fb/Bad.*');
    }
});

bot.on('message', function(message){
    if(message.content == 'fb/Good')
    {
        message.reply('That is nice. Mine has been going pretty well too. *That was the end of the conversation.*');
    }
});

bot.on('message', function(message){
    if(message.content == 'fb/Bad')
    {
        message.reply('That is sad. Hope it turns around! *That was the end of the conversation.*');
    }
});

bot.on('message', function(message){
    if(message.content == 'fb/Tell me the truth')
    {
        message.reply('Pewdiepie is not a Nazi. Go subscribe to him! *This is the TRUTH!*');
    }
});

bot.on('message', function(message){
    if(message.content == 'fb/Help')
    {
        message.reply('Here are my commands. fb/Does the bot work? fb/Are you weird? fb/Who made the bot? fb/Tell me joke1 fb/Tell me joke2 fb/Tell me joke3 fb/Want to play Fortnite? fb/What should I do? fb/Start a conversation fb/Good (do this after conversation) fb/Bad (do this after conversation) fb/Tell me the truth and fb/Help')
    }
})


bot.on('ready',function(){
    console.log("Ready");
})

bot.login(TOKEN);