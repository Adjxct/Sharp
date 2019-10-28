exports.run = (bot, msg) => {
  let ID = msg.mentions.users.first().id
       msg.guild.members.get(ID).setMute(false);
  msg.delete
};

exports.info = {
    name: 'unmute',
    usage: 'unmute <user>',
    description: 'unmutes a user'
};

