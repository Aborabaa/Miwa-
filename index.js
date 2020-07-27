const { Client, MessageAttachment, MessageEmbed, DiscordAPIError } = require('discord.js');

const bot = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const ytdl = require("ytdl-core");

const Discord = require('discord.js');


//consts for the level system
const random = require('random');
const fs = require('fs');
const jsonfile = require('jsonfile');


bot.login(process.env.token);
//bot.login('');

const PREFIX = '-';

var stats = {};
if (fs.existsSync('stats.json')) {
    stats = jsonfile.readFileSync('stats.json');
}

var version = '**1.0.0**'

var servers = {};

var check1 = 0;

bot.on('ready', () =>{
    console.log('miwa ♡ up and ready!')

    bot.user.setActivity("-info")

    //This is sent whenever the bot is online again
    let botsChannel = bot.channels.cache.get("734990112655671356")
    const attachment = new MessageAttachment("https://thumbs.gfycat.com/BarrenValidFlamingo-size_restricted.gif")
    botsChannel.send("**YES! I am online again!** <:tf:735373969376542780>")
    botsChannel.send(attachment)
});

// help command
bot.on('message', (receivedMessage) => {
    if (receivedMessage.author == bot.user) {
        return;
    }

    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

// Continue help command
function processCommand(receivedMessage) {
    let fullcommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split("")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    if (primaryCommand == "help") {
        helpCommand(arguments. receivedMessage)
    }
}

//continue help command (create)
function helpCommand(argument, receivedMessage) {
    if (arguments.length == 0) {
        receivedMessage.channel.send("What do you want help with <:milkquestionnn:735368136299118674> try `-help [someshiz]`")
    } else {
        receivedMessage.channel.send("This is what you need help with" +arguments)
    }
}

bot.on("guildCreate", guild => {
    // This event triggers when the bot joins a guild.
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
  });

bot.on("guildDelete", guild => {
    // this event triggers when the bot is removed from a guild.
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
});
bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;
    
    if(reaction.message.channel.id === "735346171811463238") {  //Gender roles give
        if (reaction.emoji.name === "🚹") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735634742388719680") //Male emoji
            return user.send("Male role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.name === "🚺") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735634101184233473") //Female emoji
            return user.send("Female role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.name === "🚻") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735635059385827348") //Non-binary emoji
            return user.send("Non-binary role was given!").catch(() => console.log("Failed to send DM."));
        }
        
    } else {
        return;
    }

    if(reaction.message.channel.id === "735346171811463238") { //Age roles *give*
        if (reaction.emoji.name === "🔞") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735639139596107878") //18- emoji
            return user.send("18- role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.name === "⚠️") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735639118842691594") //18+  emoji
            return user.send("18+ role was given!").catch(() => console.log("Failed to send DM."));
        }

        
    } else {
        return;
    }

    if(reaction.message.channel.id === "735346171811463238") { //Location roles *give*
        if (reaction.emoji.id === "735646071665197116") { // emoji ID
            await reaction.message.guild.members.cache.get(user.id).roles.add("735347373869367406")//Role ID  //North america emoji given
            return user.send("North america role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735646152132919389") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735348409346555944") //South america emoji given
            return user.send("South america role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735647033867632651") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735346991445442570") //Asia  emoji given 
            return user.send("Asia role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735646071451156572") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735641416713371739") //Europe  emoji given 
            return user.send("Europe role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735646070859628555") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735643648527695883") //Oceania  emoji given
            return user.send("Oceania role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735646071039983686") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735641537081376768") //Africa  emoji given
            return user.send("Africa role was given!").catch(() => console.log("Failed to send DM."));
        }

        
    } else {
        return;
    }

    if(reaction.message.channel.id === "735346171811463238") { //Interests roles *give*
        if (reaction.emoji.id === "735652063827984385") { // emoji ID
            await reaction.message.guild.members.cache.get(user.id).roles.add("735648192611483669")//Role ID  //Gaming emoji given
            return user.send("Gaming role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735371070525407271") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735648550318243892") //Anime emoji given
            return user.send("Anime role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735654274947743824") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735648919652139060") //Music  emoji given 
            return user.send("Music role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735654273605435463") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735648544706527263") //Sports  emoji given 
            return user.send("Sports role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735654274817589289") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735648727523393568") //Netflix-binger  emoji given
            return user.send("Netflix-binger role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735654273941241976") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735648825116459079") //K-pop  emoji given
            return user.send("K-pop role was given!").catch(() => console.log("Failed to send DM."));
        }

        
    } else {
        return;
    }

    if(reaction.message.channel.id === "735346171811463238") {  //DMs roles give
        if (reaction.emoji.name === "🔓") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735660459826479227") //DMs open emoji
            return user.send("DMs open role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.name === "🔒") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735660936521580594") //DMs closed emoji
            return user.send("DMs closed role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.name === "🔐") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735660995413934190") //Ask to DM emoji
            return user.send("Ask to DM role was given!").catch(() => console.log("Failed to send DM."));
        }
        
    } else {
        return;
    }

    if(reaction.message.channel.id === "735346171811463238") {  //Relationship roles give
        if (reaction.emoji.id === "735373846252879952") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735662466175991929") //Single emoji
            return user.send("Single role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735363284068466709") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735662536581578753") //Taken emoji
            return user.send("Taken role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735368058989707264") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735662587500560396") //Not interested emoji
            return user.send("Not interested role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "735664992422199307") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735662613308112977") //Looking emoji
            return user.send("Looking role was given!").catch(() => console.log("Failed to send DM."));
        }
        
    } else {
        return;
    }

})

bot.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if(reaction.message.channel.id === "735346171811463238") { //Roles *remove*
        if (reaction.emoji.name === "🚹") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735634742388719680") //Male emoji removed
            return user.send("Male role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "🚺") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735634101184233473") //Female emoji removed
            return user.send("Female role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "🚻") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735635059385827348") //Non-binary emoji removed
            return user.send("Non-binary role was taken!").catch(() => console.log("Failed to send DM."));
        }
        
        //Age

        if (reaction.emoji.name === "🔞") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735639139596107878") //18- emoji removed
            return user.send("18- role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "⚠️") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735639118842691594") //18+ emoji removed
            return user.send("18+ role was taken!").catch(() => console.log("Failed to send DM."));
        }

        //Location

        if (reaction.emoji.id === "735646071665197116") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735347373869367406") //North america emoji removed
            return user.send("North america role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735646152132919389") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735348409346555944") //South america emoji removed
            return user.send("South america role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735647033867632651") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735346991445442570") //Asia emoji removed
            return user.send("Asia emoji removed role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735646071451156572") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735641416713371739") //Europe emoji removed
            return user.send("Europe role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735646070859628555") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735643648527695883") //Oceania emoji removed
            return user.send("Oceania role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735646071039983686") { //emoji ID
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735641537081376768") //Role ID //Africa emoji removed
            return user.send("Africa role was taken!").catch(() => console.log("Failed to send DM."));
        }

        //Interests Roles

        if (reaction.emoji.id === "735652063827984385") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735648192611483669") //Gaming emoji removed
            return user.send("Gaming role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735371070525407271") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735648550318243892") //Anime emoji removed
            return user.send("Anime role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735654274947743824") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735648919652139060") //Music emoji removed
            return user.send("Music role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735654273605435463") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735648544706527263") //Sports emoji removed
            return user.send("Sports role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735654274817589289") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735648727523393568") //Netflix-binger emoji removed
            return user.send("Netflix-binger role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735654273941241976") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735648825116459079") //K-pop emoji removed
            return user.send("K-pop role was taken!").catch(() => console.log("Failed to send DM."));
        }

        //Interests role

        if (reaction.emoji.name === "🔓") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735660459826479227") //DMs open emoji removed
            return user.send("DMs open role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "🔒") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735660936521580594") //DMs closed emoji removed
            return user.send("DMs closed role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "🔐") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735660995413934190") //Ask to DM emoji removed
            return user.send("Ask to DM role was taken!").catch(() => console.log("Failed to send DM."));
        }

        //Relationships

        if (reaction.emoji.id === "735373846252879952") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735662466175991929") //Single emoji removed
            return user.send("Single role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735363284068466709") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735662536581578753") //Taken emoji removed
            return user.send("Taken role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735368058989707264") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735662587500560396") //Not interested emoji removed
            return user.send("Not interested role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.id === "735664992422199307") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735662613308112977") //Looking emoji removed
            return user.send("Looking role was taken!").catch(() => console.log("Failed to send DM."));
        }


    
           

    } else {
        return;
    }

    



})





bot.on('message', message=>{
    if (message.author.id == bot.user.id)
        return;
    
        let args = message.content.substring(PREFIX.length).split(" ");

        if (message.content.startsWith(PREFIX + "RolesGender")) {
            let channel = bot.channels.cache.get("735346171811463238");
            const embed = new Discord.MessageEmbed()
        .setColor(0xF1EDED)
        .setTitle("⋆ ˚｡⋆୨୧˚ **Gender roles** ˚୨୧⋆｡˚ ⋆")
        .setDescription(`Male |  :mens: \n\nFemale |  :womens: \n\nNon-binary |  :restroom:`)
        channel.send(embed).then(async message => {
            await message.react("🚹");
            await message.react("🚺");
            await message.react("🚻");

        })
            
        }

        if (message.content.startsWith(PREFIX + "RolesAge")) {
            let channel = bot.channels.cache.get("735346171811463238");
            const embed = new Discord.MessageEmbed()
        .setColor(0xF1EDED)
        .setTitle("⋆ ˚｡⋆୨୧˚ **Age roles** ˚୨୧⋆｡˚ ⋆")
        .setDescription(`18- |  :underage: \n\n18+ |  :warning:`)
        channel.send(embed).then(async message => {
            await message.react("🔞");
            await message.react("⚠️");

        })
            
        }

        if (message.content.startsWith(PREFIX + "RolesLocation")) {
            let channel = bot.channels.cache.get("735346171811463238"); //Channel ID
            const embed = new Discord.MessageEmbed()
        .setColor(0xF1EDED)
        .setTitle("⋆ ˚｡⋆୨୧˚ **Location roles** ˚୨୧⋆｡˚ ⋆")
        .setDescription(`North america |  <:northamerica:735646071665197116> \n\nSouth america |  <:southamerica:735646152132919389> \n\nAsia |  <:asia:735647033867632651> \n\nEurope |  <:europe:735646071451156572> \n\nOceania |  <:oceania:735646070859628555> \n\nAfrica |  <:africa:735646071039983686>`)
        channel.send(embed).then(async message => {
            await message.react("735646071665197116"); // ID of emoji
            await message.react("735646152132919389");
            await message.react("735647033867632651");
            await message.react("735646071451156572");
            await message.react("735646070859628555");
            await message.react("735646071039983686");

        })
            
        }

        if (message.content.startsWith(PREFIX + "RolesInterests")) {
            let channel = bot.channels.cache.get("735346171811463238"); //Channel ID
            const embed = new Discord.MessageEmbed()
        .setColor(0xF1EDED)
        .setTitle("⋆ ˚｡⋆୨୧˚ **Interests roles** ˚୨୧⋆｡˚ ⋆")
        .setDescription(`Gaming |  <a:gaming:735652063827984385> \n\nAnime |  <a:02smile:735371070525407271> \n\nMusic |  <a:milkmusic:735654274947743824> \n\nSports |  <a:sports:735654273605435463> \n\nNetflix-binger |  <a:netflixbinger:735654274817589289> \n\nK-pop |  <:kpop:735654273941241976>`)
        channel.send(embed).then(async message => {
            await message.react("735652063827984385"); // ID of emoji
            await message.react("735371070525407271");
            await message.react("735654274947743824");
            await message.react("735654273605435463");
            await message.react("735654274817589289");
            await message.react("735654273941241976");

        })
            
        }

        if (message.content.startsWith(PREFIX + "RolesDMS")) {
            let channel = bot.channels.cache.get("735346171811463238"); //Channel ID
            const embed = new Discord.MessageEmbed()
        .setColor(0xF1EDED)
        .setTitle("⋆ ˚｡⋆୨୧˚ **DMs roles** ˚୨୧⋆｡˚ ⋆")
        .setDescription(`DMs open |  :unlock: \n\nDMs closed |  :lock: \n\nAsk to DM |  :closed_lock_with_key:`)
        channel.send(embed).then(async message => {
            await message.react("🔓"); //ID of emoji
            await message.react("🔒");
            await message.react("🔐");

        })
            
        }

        if (message.content.startsWith(PREFIX + "RolesRelationship")) {
            let channel = bot.channels.cache.get("735346171811463238"); //Channel ID
            const embed = new Discord.MessageEmbed()
        .setColor(0xF1EDED)
        .setTitle("⋆ ˚｡⋆୨୧˚ **Relationship roles** ˚୨୧⋆｡˚ ⋆")
        .setDescription(`Single |  <:fuckoff:735373846252879952>  \n\nTaken |  <:milkandmochahugg:735363284068466709>  \n\nNot interested |  <:no:735368058989707264>  \n\nLooking |  <:mocharose:735664992422199307>`)
        channel.send(embed).then(async message => {
            await message.react("735373846252879952"); //ID of emoji
            await message.react("735363284068466709");
            await message.react("735368058989707264");
            await message.react("735664992422199307");

        })
            
        }
        

        if (message.content.startsWith("abori")) {
            message.channel.send ("**Is a dummy who cant understand english..**");
        }

        if (message.content.startsWith("abhi")) {
            message.channel.send ("**Is a coconut head!**");
        }

        if (message.content.startsWith("domi")) {
            message.channel.send ("**Is a feeder on league..**");
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
                    message.channel.send("**Okie, stopped the queue <:mochaok:735363737355157526>**");
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

   