exports.run = (bot, msg) => {
 let ID = msg.mentions.users.first().id
      msg.guild.members.get(ID).kick()
  msg.delete
};

exports.info = {
    name: 'kick',
    usage: 'kick <user>',
    description: 'kicks a user'
};
