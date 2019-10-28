exports.run = (bot, msg) => {
  let ID = msg.mentions.users.first().id
       msg.guild.members.get(ID).setMute(true);
  msg.delete
};

exports.info = {
    name: 'mute',
    usage: 'mute <user>',
    description: 'mutes a user'
};

