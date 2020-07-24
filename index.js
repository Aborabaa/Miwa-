const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();

bot.login(process.env.token);

const PREFIX = '-';

var version = '1.0.0'


bot.on('ready', () =>{
    console.log('Bot up and ready!')
});

bot.on('message', message => {
    if(message.author.bot)
    {
        if(message.embeds)
        {
            const embedMsg = message.embeds.find(msg => msg.title === 'Server Roles');
            if(embedMsg)
            {
                embedMsg.message.react('♂️')
                .then(reaction => reaction.message.react('♀️'))
                .then(reaction => reaction.message.react('🚻'))
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
    var role = reaction.message.guild.roles.find(role => role.name.roLowerCase() === roleName.toLowerCase());
    var member = reaction.message.guild.memebers.find(member => member.id === user.id);
    member.addRole(role.id).then(member => {
        console.log('added' + member.user.username + 'to a role.');
    }).catch(err => console.error);

})