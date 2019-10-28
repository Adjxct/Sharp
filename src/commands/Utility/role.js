exports.run = (bot, msg) => {
  let role = msg.mentions.roles.first()
  let ID = msg.mentions.users.first().id
       msg.guild.members.get(ID).addRole(role)
  msg.edit("Done")
};

exports.info = {
    name: 'role',
    usage: 'role <user role you wanna give>',
    description: 'gives a role to a user'
};
