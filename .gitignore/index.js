const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('!')
client.login('nodeNjA5NzM5NjAxMTkxNTAxODY0.XVQKiQ.cYQcUBok5UtfPd9diyswxUge_5A');


 
client.on('message',function(message){
   if (message.guild && message.content.startsWith(prefix + 'pub')){
      console.log("j'ai pub 1 serveur !")
    let text = message.content.slice((prefix + 'pub').length);
    message.guild.members.forEach(member => {
       if (member.id != client.user.id && !member.user.bot) member.send(text);
       message.delete()
    })}})

    client.on('ready', () => 
    client.user.setActivity("LasVegas", {type: "STREAMING", url: 'https://www.twitch.tv/discordapp'})
    );
