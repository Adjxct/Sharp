exports.run = function (bot, msg) {
    const superagent = require('superagent');
    superagent.get("https://nekos.life/api/neko", (err, res) => {
      msg.channel.send({ files: [res.body.neko] });
    })
};


exports.info = {
    name: 'neko',
    usage: 'neko',
    description: 'neko'
};


