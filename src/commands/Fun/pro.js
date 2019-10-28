exports.run = function (bot, msg) {

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = (today.getHours()+1) + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
var dateTime = date+' '+time;
    msg.edit(dateTime);
};

exports.info = {
    name: 'pro',
    usage: 'pro',
    description: 'pro'
};
