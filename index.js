const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();
const ytdl = require("ytdl-core");

bot.login(process.env.token);

const PREFIX = '-';

var version = '1.0.0'

var servers = {};

bot.on('ready', () =>{
    console.log('Bot up and ready!')
});



bot.on('message', message=>{
    
        let args = message.content.substring(PREFIX.length).split(" ");
    
        switch(args[0]){
            case 'play':

                function play(connection, message){
                    var server = servers[message.guild.id];

                    server.discpatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));

                    server.queue.shift();

                    server.dispatcher.on("end", function(){
                        if(server.queue[0]){
                            play(connection, message);
                        }else {
                            connection.disconnect();
                        }
                    });
                }

                 if(!args[1]){
                     message.channel.send('Nani? <:nani:735368107144642561> What do you want to play? ');
                     return;

                 }


                 if(!servers[message.guild.id]) servers[message.guild.id] = {
                     queue: []
                 }

                 var server = servers[message.guild.id];

                 server.queue.push(args[1]);

                 if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
                     play(connection, message);
                 })

            break; 

            case 'ping':
                message.channel.send('pong!')
            break;
    
            case 'abhi':
                message.channel.send('Is a coconut head!')
            break;
    
            case 'tina':
                message.channel.send('Will never be loved more than abhi’s drone!')
            break;
    
            case 'ham':
                message.channel.send('has a fetish to kitty paws.. weirdo..')
            break;
    
            case 'abori':
                message.channel.send('Is a dummy who cant understand english..')
            break;
    
            case 'coffee':
                message.channel.send('Is not young and fresh!')
            break;
    
            case 'jantai':
                message.channel.send('Is lonely and sad..')
            break;
    
            case 'miguel':
                message.channel.send('Is gay!')
            break;    
    
            case 'janella':
                message.channel.send('Is slow and dumb!')
            break; 

            case 'birthday':
                message.channel.send('(miwa ♡) Was born on July 22nd 2020 <:milkpleaseee:735977442392408116>!')
            break; 

            
            case 'info':
                if(args[1] === 'version'){
                    message.channel.send('Current (miwa ♡) Version = ' + version );
                }else{
                    message.channel.send('BAKA! <:nani:735368107144642561> Specify what do you want info about!')
                }
            break;
        }           

});

   