exports.run = (bot, msg) => {
  msg.channel.overwritePermissions (msg.guild.id, {
    SEND_MESSAGES: false
  })
  msg.edit("Server lockdown has been put into motion")
};

exports.info = {
    name: 'lockdown',
    usage: 'lockdown',
    description: 'locks a server down'
};
