exports.run = (bot, msg) => {
  msg.channel.overwritePermissions (msg.guild.id, {
    SEND_MESSAGES: true
  })
  msg.edit("Server lockdown has been lifted")
};

exports.info = {
    name: 'unlock',
    usage: 'unlock',
    description: 'unlocks a server down'
};
