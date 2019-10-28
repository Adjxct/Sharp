exports.run = (bot, msg) => {
  let ID = msg.mentions.users.first().id
       msg.guild.members.get(ID).setDeaf(false);
  msg.delete
};

exports.info = {
    name: 'undeafen',
    usage: 'undeafen <user>',
    description: 'undeafens a user'
};
