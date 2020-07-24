const { Client, MessageEmbed } = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.token);

const PREFIX = '-';

var version = '1.0.0'


bot.on('ready', () =>{
    console.log('Bot up and ready!')
})

bot.on('message', message => {
    if(message.author.bot)
    {
        return;
    }

    if(message.content.toLowerCase() === '-roles')
    {
        const embed = new Discord.MessageEmbed()
        embed.setTitle('Server Roles');
        embed.setColor(000000);
        message.channel.send(embed);
    }
});

