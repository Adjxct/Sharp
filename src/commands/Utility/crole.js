exports.run = (bot, msg, args) => {
const lol = msg.content.split(" ")[1]
const xD = msg.content.split(" ")[2]
const lmao = msg.content.split(" ")[3]
msg.guild.createRole("name", lol)
}
exports.info = {
    name: 'crole',
    usage: 'crole [name]',
    description: 'Create standard role'
};
