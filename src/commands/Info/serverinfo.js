const dateFormat = require('dateformat');

const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

exports.run = async (bot, msg) => {
    if (!msg.guild) {
        throw 'This can only be used in a guild!';
    }

    const millis = new Date().getTime() - msg.guild.createdAt.getTime();
    const days = millis / 1000 / 60 / 60 / 24;

    const owner = msg.guild.owner.user || {};

    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];

    let embed = bot.utils.embed(
        `${msg.guild.name}`,
        '***This message will dissappear in 60 seconds.***',
        [
            {
                name: 'Created On',
                value: `${dateFormat(msg.guild.createdAt)}`,
            },
            {
                name: 'Days Since Creation',
                value: `${days.toFixed(0)}`,
            },
            {
                name: 'Default Channel',
                value: `${msg.guild.defaultChannel}`,
            },
            {
                name: 'Region',
                value: `${msg.guild.region}`,
            },
            {
                name: 'Member Count',
                value: `${msg.guild.members.filter(m => m.presence.status !== 'offline').size} / ${msg.guild.memberCount}`,
            },
            {
                name: 'Owner',
                value: `${owner.username || 'None'}`,
            },
            {
                name: 'Text Channels',
                value: `${msg.guild.channels.filter(m => m.type === 'text').size}`,
            },
            {
                name: 'Voice Channels',
                value: `${msg.guild.channels.filter(m => m.type === 'voice').size}`,
            },
            {
                name: 'Verification Level',
                value: `${verificationLevels[msg.guild.verificationLevel]}`,
            },
            {
                name: 'Roles',
                value: `${msg.guild.roles.size}`,
            },
        ],
        {
            inline: true,
            footer: `Guild ID: ${msg.guild.id}`
        }
    );

    if (msg.guild.iconURL != null) {
        embed.setThumbnail(`${msg.guild.iconURL}`);
    }

    (await msg.edit({ embed })).delete(60000);
};

exports.info = {
    name: 'serverinfo',
    usage: 'serverinfo',
    description: 'Shows info of the server you are in'
};
