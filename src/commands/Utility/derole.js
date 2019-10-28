exports.run = (bot, msg) => {
  let role = msg.mentions.roles.first()
  let ID = msg.mentions.users.first().id
       msg.guild.members.get(ID).removeRole(role)
  msg.edit("Done")
};

exports.info = {
    name: 'derole',
    usage: 'derole <user role you wanna give>',
    description: 'takes a role away from a user'
};
