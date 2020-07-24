const { Client, MessageEmbed } = require('discord.js');

const bot = new Client();

const ytdl = require("ytdl-core");


bot.login(process.env.token);
//bot.login('');

const PREFIX = '-';

var version = '**1.0.0**'

var servers = {};

var check1 = 0;

bot.on('ready', () =>{
    console.log('miwa ♡ up and ready!')
});

bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
  });

bot.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});





bot.on('message', message=>{
    
        let args = message.content.substring(PREFIX.length).split(" ");

        if (message.content.startsWith("Abo")) {
            message.channel.send ("It's working!");
        }
    
        switch(args[0]){
            case 'play':

                function play(connection, message){
                    var server = servers[message.guild.id];
                    
                    check1 = 1;

                    try {

                    server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
                
               

                    server.queue.shift();
                    
                    

                    server.dispatcher.on("finish", function(){
                        if(server.queue[0]){
                            play(connection, message);
                            check1 = 0;
                        }else {
                            connection.disconnect();
                            check1 = 0;
                        }
                    });
                }
                    catch(err){
                        message.channel.send("**Link is not valid <:shockedd:735373911377838143>!**");
                        connection.disconnect();
                            check1 = 0;
                }
     
                }
     
     
                 if(!args[1]){
                     message.channel.send("**Nani <:nani:735368107144642561> What do you want to play!**");
                     return;
                 }
     
                 if(!message.member.voice.channel){
                     message.channel.send("**You aren't in a vocie channel to listen to me <:tf:735373969376542780>!**");
                     return;
                 }
     
                 if(!servers[message.guild.id]) servers[message.guild.id] = {
                     queue: []
                 }
     
                 var server = servers[message.guild.id];
                 
                 
                 server.queue.push(args[1]);
                 
                 
                 if(check1 === 0){
                 if(!message.member.voice.connection) message.member.voice.channel.join().then(function(connection){
                     play(connection, message);
                 })
                }

             
                
            break;

            case 'skip':
                var server = servers[message.guild.id];

                if(server.dispatcher) server.dispatcher.end();
                message.channel.send("Skiped this garbage! Bruh");
            break;

            case 'stop':
                var server = servers[message.guild.id];

                if(message.guild.voice.connection)
                {
                    for(var i = server.queue.length -1; i >=0; i--)
                    {
                        server.queue.splice(i,1);
                    }

                    server.dispatcher.end();
                    message.channel.send("The master stoped the queue");
                    //console.log('Stopped the queue')
                }
                if(message.member.connection) message.member.voice.connection.disconnect();

            break;


    
            case 'abhi':
                message.channel.send('**Is a coconut head!**')
            break;

            case 'adios':
                message.channel.send('**Adios amigo <:tongue:735373846558801930>**')
            break;

            case 'gn':
                message.channel.send('**Sleep tight <:milkheartss:735363636725547069>**')
            break;
    
            case 'tina':
                message.channel.send('**Will never be loved more than abhi’s drone!**')
            break;
    
            case 'ham':
                message.channel.send('**has a fetish to kitty paws.. weirdo..**')
            break;
    
            case 'abori':
                message.channel.send('**Is a dummy who cant understand english..**')
            break;
    
            case 'coffee':
                message.channel.send('**Is not young and fresh!**')
            break;
    
            case 'jantai':
                message.channel.send('**Is lonely and sad..**')
            break;
    
            case 'miguel':
                message.channel.send('**Is gay!**')
            break;    
    
            case 'janella':
                message.channel.send('**Is slow and dumb!**')
            break; 

            case 'birthday':
                message.channel.send('**(miwa ♡) Was born on July 22nd 2020 <:milkpleaseee:735977442392408116>!**')
            break; 

            
            case 'info':
                if(args[1] === 'version'){
                    message.channel.send('**Current (miwa ♡) Version =** ' + version );
                }else{
                    message.channel.send('**BAKA! <:nani:735368107144642561> Specify what do you want info about!**')
                }
            break;
        }           

});

   