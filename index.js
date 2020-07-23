const Discord = require('discord.js');
const bot = new Discord.Client();



const PREFIX = '-';

var version = '1.0.0'


bot.on('ready', () =>{
    console.log('Bot up and ready!')
})

bot.on('message', message=>{
    if(message.author.bot)
    {
        return;
    }

    if(message.content.toLowerCase() === '-roles')
    {
        const embed = new Discord.MessageEmbed();
        embed.setTitle('Server Roles');
        embed.setColor('000000');
        embed.setDescription('Male - :male_sign:' +
        'Female - :female_sign:' +
        'Non-binary - :restroom:');
        message.channel.send(embed); 

    }
    
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
                message.channel.send('BAKA! <:nani:735368107144642561> Specify what do you want info about!')
            }
        break;   
        
        
        case 'roles':
            const embed = new Discord.MessageEmbed()
            .setTitle('Server Roles')
            .addField('Male', ':male_sign:' )
            .addField('Female', ':female_sign:')
            .addField('Non-binary', ':restroom:')
            .addField('ــــــــــــــــــــ', ':page_facing_up: More in depth :page_facing_up:')
            .setColor(999999)
            message.channel.send(embed);   
 
        break;

    }
});

bot.login(process.env.token);