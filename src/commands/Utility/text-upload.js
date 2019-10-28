const hastebin = require('hastebin-gen');
function makeCommand(name, displayName, methodName) {
    return {
        run: async (bot, msg, args) => {

            let haste = args.slice(0).join(' ')

       if (!args[0]) { return msg.edit('What do you want to post in Hastebin?') }

        hastebin(haste).then(r => {

            msg.edit('`Posted to Hastebin at this URL:`  ' + r);

        }).catch(console.error);
        },
        info: {
            name,
            usage: `${name} <text>`,
            description: `Uploads some text to ${displayName}`,
        }
    };
}

module.exports = [
    makeCommand('haste', 'Hastebin', 'hastebinUpload'),
    makeCommand('ix', 'ix.io', 'ixUpload')
];
