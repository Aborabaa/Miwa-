const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();

bot.login(process.env.token);

const PREFIX = '-';

var version = '1.0.0'


bot.on('ready', () =>{
    console.log('Bot up and ready!')
});



bot.on('message', message=>{
    
        let args = message.content.substring(PREFIX.length).split(" ");
    
        switch(args[0]){
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
            
            case 'info':
                if(args[1] === 'version'){
                    message.channel.send('Current (miwa ♡) Version = ' + version );
                }else{
                    message.channel.send('BAKA! Specify what do you want info about!')
                }
            break;
        }           

});

bot.on('message', message => {
    if(message.author.bot)
    {
        if(message.embeds)
        {
            const embedMsg = message.embeds.find(msg => msg.title === 'Server Roles');
            if(embedMsg)
            {
                embedMsg.message.react(":male_sign:")
                .then(reaction => reaction.message.react(':female_sign:'))
                .then(reaction => reaction.message.react(':restroom:'))
                .catch(err => console.error);
            }
        }
        return;
    }

    if(message.content.toLowerCase() === '-roles')
    {
        const embed = new MessageEmbed();
        embed.setTitle('Server Roles');
        embed.setColor(000000);
        embed.setDescription('Male |  :male_sign:\n' +
        'Female |  :female_sign:\n' +
        'Non-binary |  :restroom:\n');
        message.channel.send(embed);
    }
});

bot.on('messageReactionAdd', (reaction, user) => {
    if(user.bot)
        return;

    var roleName = reaction.emoji.name;
    var role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === roleName.toLowerCase());
    var member = reaction.message.guild.memebers.find(member => member.id === user.id);

    if(member.roles.has(role.id))
    {
        member.removeRole(role.id).then(member => {
            console.log('Removed' + member.user.username + 'from the' + role.name + 'role.');
        }).catch(err=> console.error);
    }
    else{
        member.addRole(role.id).then(member => {
            console.log('added' + member.user.username + 'to the' + role.name + ' role.');
        }).catch(err => console.error);
    }
});    