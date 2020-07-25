const { Client, MessageEmbed, DiscordAPIError } = require('discord.js');

const bot = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

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
bot.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;
    
    if(reaction.message.channel.id === "734990112655671356") {  //Gender roles give
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

    if(reaction.message.channel.id === "734990112655671356") { //Age roles *give*
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

    if(reaction.message.channel.id === "734990112655671356") { //Location roles *give*
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

    if(reaction.message.channel.id === "734990112655671356") { //Location roles *give*
        if (reaction.emoji.id === "") { // emoji ID
            await reaction.message.guild.members.cache.get(user.id).roles.add("735648192611483669")//Role ID  //Gaming emoji given
            return user.send("Gaming role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735648550318243892") //Anime emoji given
            return user.send("Anime role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735648919652139060") //Music  emoji given 
            return user.send("Music role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("735648544706527263") //Sports  emoji given 
            return user.send("Sports role was given!").catch(() => console.log("Failed to send DM."));
        }

        if(reaction.emoji.id === "") {
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

})

bot.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if(reaction.message.channel.id === "734990112655671356") { //Roles *remove*
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

        if (reaction.emoji.name === "735646071665197116") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735347373869367406") //North america emoji removed
            return user.send("North america role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "735646152132919389") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735348409346555944") //South america emoji removed
            return user.send("South america role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "735647033867632651") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735346991445442570") //Asia emoji removed
            return user.send("Asia emoji removed role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "735646071451156572") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735641416713371739") //Europe emoji removed
            return user.send("Europe role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "735646070859628555") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735643648527695883") //Oceania emoji removed
            return user.send("Oceania role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "") { //emoji ID
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735641537081376768") //Role ID //Africa emoji removed
            return user.send("Africa role was taken!").catch(() => console.log("Failed to send DM."));
        }

        //Interests Roles

        if (reaction.emoji.name === "") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735641537081376768") //Gaming emoji removed
            return user.send("Gaming role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735641537081376768") //Anime emoji removed
            return user.send("Anime role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735641537081376768") //Music emoji removed
            return user.send("Music role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735641537081376768") //Sports emoji removed
            return user.send("Sports role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735641537081376768") //Netflix-binger emoji removed
            return user.send("Netflix-binger role was taken!").catch(() => console.log("Failed to send DM."));
        }

        if (reaction.emoji.name === "735654273941241976") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("735641537081376768") //K-pop emoji removed
            return user.send("K-pop role was taken!").catch(() => console.log("Failed to send DM."));
        }






    
           

    } else {
        return;
    }

    



})





bot.on('message', message=>{
    
        let args = message.content.substring(PREFIX.length).split(" ");

        if (message.content.startsWith(PREFIX + "RolesGender")) {
            let channel = bot.channels.cache.get("734990112655671356");
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
            let channel = bot.channels.cache.get("734990112655671356");
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
            let channel = bot.channels.cache.get("734990112655671356"); //Channel ID
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
            let channel = bot.channels.cache.get("734990112655671356"); //Channel ID
            const embed = new Discord.MessageEmbed()
        .setColor(0xF1EDED)
        .setTitle("⋆ ˚｡⋆୨୧˚ **Interests roles** ˚୨୧⋆｡˚ ⋆")
        .setDescription(`Gaming |   \n\nAnime |   \n\nMusic |   \n\nSports |   \n\nNetflix-binger |   \n\nK-pop |  <:kpop:735654273941241976>`)
        channel.send(embed).then(async message => {
            await message.react("735654273941241976");

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

   