const Discord = require("discord.js");
exports.run = (bot, msg, args) => {
const discrim = msg.content.split(" ")[1]
let members = bot.users.filter(c=>c.discriminator===discrim).map(c=> c.username).join("\n");
msg.delete();
msg.channel.sendEmbed(
    bot.utils.embed(
        ` People with the ${discrim} discriminator:`,
        members
    )
  );
};

exports.info = {
  name: 'discrim',
  usage: 'discrim <discrim>',
  description: 'search for users with the same discrim'
};
