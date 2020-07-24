const { Client, MessageEmbed, DiscordAPIError } = require('discord.js');

const bot = new Client();

const ytdl = require("ytdl-core");

const Discord = require('discord.js');

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

        if (message.content.startsWith(PREFIX + "RolesGender")) {
            let channel = bot.channels.cache.get("724752904292139169");
            const embed = new Discord.MessageEmbed()
        .setColor(111111)
        .setTitle("Please pick your gender roles <:oops:735363476184367225>")
        .setDescription(`Male |  :mens: \n\nFemale |  :womens: \n\nNon-binary |  :restroom:`)
        channel.send(embed).then(async message => {
            await message.react("🚹");
            await message.react("🚺");
            await message.react("🚻");

        })

        if (message.content.startsWith(PREFIX + "RolesAge")) {
            let channel = bot.channels.cache.get("724752904292139169");
            const embed = new Discord.MessageEmbed()
        .setColor(111111)
        .setTitle("Age roles <:oops:735363476184367225>")
        .setDescription(`Underage |  :underage: \n\nOver 18 |  :warning:`)
        channel.send(embed).then(async message => {
            await message.react("🔞");
            await message.react("⚠️");
            

        })

        if (message.content.startsWith(PREFIX + "RolesLocation")) {
            let channel = bot.channels.cache.get("724752904292139169");
            const embed = new Discord.MessageEmbed()
        .setColor(111111)
        .setTitle("Please pick your gender roles <:oops:735363476184367225>")
        .setDescription(`North America |  <:northamerica:735646071665197116> \n\nSouth America |  <:southamerica:735646152132919389> \n\nAsia |  <:asia:735647033867632651> \n\nEurope |  <:europe:735646071451156572> \n\nOceania |  <:oceania:735646070859628555> \n\nAfrica |  <:africa:735646071039983686>`)
        channel.send(embed).then(async message => {
            await message.react("<:northamerica:735646071665197116>");
            await message.react("<:southamerica:735646152132919389>");
            await message.react("<:asia:735647033867632651>");
            await message.react("<:europe:735646071451156572>");
            await message.react("<:oceania:735646070859628555>");
            await message.react("<:africa:735646071039983686>");

        })

        if (message.content.startsWith(PREFIX + "RolesGender")) {
            let channel = bot.channels.cache.get("724752904292139169");
            const embed = new Discord.MessageEmbed()
        .setColor(111111)
        .setTitle("Please pick your gender roles <:oops:735363476184367225>")
        .setDescription(`Male |  :male_sign: \n\nFemale |  :female_sign: \n\nNon-binary |  :restroom:`)
        channel.send(embed).then(async message => {
            await message.react("");
            await message.react("");
            await message.react("");

        })

        if (message.content.startsWith(PREFIX + "RolesGender")) {
            let channel = bot.channels.cache.get("724752904292139169");
            const embed = new Discord.MessageEmbed()
        .setColor(111111)
        .setTitle("Please pick your gender roles <:oops:735363476184367225>")
        .setDescription(`Male |  :male_sign: \n\nFemale |  :female_sign: \n\nNon-binary |  :restroom:`)
        channel.send(embed).then(async message => {
            await message.react("");
            await message.react("");
            await message.react("");

        })

        if (message.content.startsWith(PREFIX + "RolesGender")) {
            let channel = bot.channels.cache.get("724752904292139169");
            const embed = new Discord.MessageEmbed()
        .setColor(111111)
        .setTitle("Please pick your gender roles <:oops:735363476184367225>")
        .setDescription(`Male |  :male_sign: \n\nFemale |  :female_sign: \n\nNon-binary |  :restroom:`)
        channel.send(embed).then(async message => {
            await message.react("");
            await message.react("");
            await message.react("");

        })
            
    }

        if (message.content.startsWith("abori")) {
            message.channel.send ("**Is a dummy who cant understand english..**");
        }

        if (message.content.startsWith("abhi")) {
            message.channel.send ("**Is a coconut head!**");
        }

        if (message.content.startsWith("adios")) {
            message.channel.send ("**Adios amigo <:tongue:735373846558801930>**");
        }

        if (message.content.startsWith("gn")) {
            message.channel.send ("**Sleep tight <:milkheartss:735363636725547069>**");
        }

        if (message.content.startsWith("good night")) {
            message.channel.send ("**Sleep tight <:milkheartss:735363636725547069>**");
        }

        if (message.content.startsWith("good morning")) {
            message.channel.send ("**Rise and shine <:milkandmochanomm:735978440045494342>**");
        }

        if (message.content.startsWith("Good night")) {
            message.channel.send ("**Sleep tight <:milkheartss:735363636725547069>**");
        }

        if (message.content.startsWith("Good morning")) {
            message.channel.send ("**Rise and shine <:milkandmochanomm:735978440045494342>**");
        }

        if (message.content.startsWith("tina")) {
            message.channel.send ("**Will never be loved more than abhi’s drone!**");
        }

        if (message.content.startsWith("ham")) {
            message.channel.send ("**has a fetish to kitty paws.. weirdo..**");
        }

        if (message.content.startsWith("coffee")) {
            message.channel.send ("**Is not young and fresh!**");
        }

        if (message.content.startsWith("jantai")) {
            message.channel.send ("**Is lonely and sad..**");
        }

        if (message.content.startsWith("miguel")) {
            message.channel.send ("**Is gay!**");
        }

        if (message.content.startsWith("janella")) {
            message.channel.send ("**Is slow and dumb!**");
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
                message.channel.send("**Skipped! <:pepeok:735682720285327460>**");
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
                    message.channel.send("**Okie, sttoped the queue <:mochaok:735363737355157526>**");
                    //console.log('Stopped the queue')
                }
                if(message.member.connection) message.member.voice.connection.disconnect();

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

   