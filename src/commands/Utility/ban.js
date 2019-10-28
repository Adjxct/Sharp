exports.run = (bot, msg) => {
  let ID = msg.mentions.users.first().id
       msg.guild.members.get(ID)
  msg.guild.members.get(ID).ban();
  msg.edit(`${ID}`)
};

exports.info = {
    name: 'ban',
    usage: 'ban <user>',
    description: 'bans a user'
};
