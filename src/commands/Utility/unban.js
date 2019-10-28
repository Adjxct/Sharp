exports.run = (bot, msg) => {
  let id = msg.content.split(" ")[1]
        msg.guild.unban(id)
  msg.edit("Done")
};

exports.info = {
    name: 'unban',
    usage: 'unban <user id>',
    description: 'unbans a user'
};

