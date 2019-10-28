exports.run = (bot, msg) => {
    var server = msg.guild;
    const name = msg.content.split(" ")[1]
    const lol = msg.content.split(" ")[2]

    server.createChannel(name, lol);
};

exports.info = {
    name: 'nchannel',
    usage: 'nchannel <name>',
    description: 'creates a new channel'
};
