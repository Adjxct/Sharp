exports.run = (bot, msg) => {
    var server = msg.guild;
    const name = msg.content.split(" ")[1]
    const lol = msg.content.split(" ")[2]

    server.channel.delete(name,lol);
};

exports.info = {
    name: 'dchannel',
    usage: 'dchannel <name>',
    description: 'deletes a channel'
};
