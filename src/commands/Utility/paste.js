const pastebin = require('pastebin')('fe0ac40d05b02be26de121f84b831458');
exports.run = async (bot, msg, args) => {
  
  var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = (today.getHours()+1) + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
var dateTime = date+' '+time;
    msg.edit(dateTime);
  
    let dope = msg.content.split(' ').slice(1).join(' ');
    pastebin.new({title: "Archer @ " + dateTime , content:dope, privacy:1}, function (err, ret) {
  
        if (err)
            msg.edit(err);
        else
            msg.edit(ret);
    });

};

exports.info = {
    name: 'paste',
    usage: 'paste',
    description: 'Upload a file to pastebin'
};
