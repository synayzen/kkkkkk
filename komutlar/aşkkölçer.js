const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
    let devtr=[
      "Aşkölçer %100 Gösteriyor."
    ]
let xfalcon = msg.mentions.members.first()
     if(!xfalcon)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('Kimi Sevdiğini Etiketle?')
  }});

    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${xfalcon} ${devtr[Math.floor(Math.random() * 1)]}.`)
    }})
    }

  }

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };

  exports.help = {
    name: 'Aşkölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'aşkölçer'
   }