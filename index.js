const Discord = require("discord.js");
const bot = new Discord.Client();
const moment = require('moment');
const client = new Discord.Client();
const db = require('quick.db');
require('moment-duration-format');


let prefix = "vk!";//botun ön eki 
let owner = "351395168588660746";// sizin id'niz

bot.on("ready", guild => {
    bot.user.setActivity('Zahiti', { type: 'WATCHING'  })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + bot.channels.size + ` adet kanala, ` + bot.guilds.size + ` adet sunucuya ve ` + bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
    console.log("Bağlandım!")
});

bot.on('message', msg => {
  if (msg.content.startsWith(prefix + "başlat")) {
    const exampleEmbed = new Discord.RichEmbed()
	      .setColor('#0099ff')
	      .setTitle('Vampir Köylü Başlıyor Katılmak için emojiye bas.')
      	.setTimestamp()

    msg.channel.send(exampleEmbed);
    msg.react("🎉");
    

    
    }
});


bot.login(process.env.TOKEN);