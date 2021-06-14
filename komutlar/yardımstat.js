const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} İstatistik Yardım Menüsü`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('BLUE')
 .setDescription(`

 > ➬ <a:ritim:850250358907207680> 𒋝 𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨𝐬 𝐈𝐬𝐭𝐚𝐭𝐢𝐬𝐭𝐢𝐤𝐥𝐞𝐫 <a:ritim:850250358907207680>
 
 > ➠ \`.stat <@etiket> \` -> Belirtilen üyenin tüm ses ve chat bilgilerini gösterir.

 > ➠ \`.top \` -> Top 10 istatistikler.\``)
       
    .setFooter(`𒋝 BİENVENİDOS Developed by Synayzen İvar`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/844277649165123635/845979852938412063/BIENVENIDOS_3.png")
message.react('822360043315920896')// tepki vermesini vermek istiyorsanız  emoji id girin
message.channel.send(embed) 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',   
  description: '',
  usage: ''
};