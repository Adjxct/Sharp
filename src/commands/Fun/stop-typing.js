exports.run = function (stopTyping, msg) {
    msg.channel.stopTyping(true)
    msg.delete()
};

exports.info = {
    name: 'spt',
    usage: 'spt',
    description: 'stop typing'
};
