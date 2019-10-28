exports.run = (bot, msg) => {
  let ID = msg.mentions.users.first().id
       msg.guild.members.get(ID).setDeaf(true);
  msg.delete
};

exports.info = {
    name: 'deafen',
    usage: 'deafen <user>',
    description: 'deafens a user'
};
