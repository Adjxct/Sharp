exports.run = function (startTyping, msg) {
    msg.channel.startTyping()
    msg.delete()
};

exports.info = {
    name: 'stt',
    usage: 'stt',
    description: 'start typing'
};
