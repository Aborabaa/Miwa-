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
    
        switch(args[0]){
            case 'play':

                function play(connection, msg){
                    var server = servers[msg.guild.id];
                    
                    check1 = 1;

                    try {

                    server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
                
               

                    server.queue.shift();
                    
                    

                    server.dispatcher.on("finish", function(){
                        if(server.queue[0]){
                            play(connection, msg);
                            check1 = 0;
                        }else {
                            connection.disconnect();
                            check1 = 0;
                        }
                    });
                }
                    catch(err){
                        msg.channel.send("**Link not valid bro!**");
                        connection.disconnect();
                            check1 = 0;
                }
     
                }
     
     
                 if(!args[1]){
                     msg.channel.send("**You must provide a link!**");
                     return;
                 }
     
                 if(!msg.member.voice.channel){
                     msg.channel.send("**You must be in a voice channel!**");
                     return;
                 }
     
                 if(!servers[msg.guild.id]) servers[msg.guild.id] = {
                     queue: []
                 }
     
                 var server = servers[msg.guild.id];
                 
                 
                 server.queue.push(args[1]);
                 
                 
                 if(check1 === 0){
                 if(!msg.member.voice.connection) msg.member.voice.channel.join().then(function(connection){
                     play(connection, msg);
                 })
                }

             
                
            break;


    
            case 'abhi':
                message.channel.send('Is a coconut head!')
            break;

            case 'adios':
                message.channel.send('Adios amigo <:tongue:735373846558801930>')
            break;

            case 'gn':
                message.channel.send('Sleep tight <:milkheartss:735363636725547069>')
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

   