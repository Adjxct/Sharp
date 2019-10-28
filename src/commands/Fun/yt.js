exports.run = function (bot, msg, args) {
  const YouTube = require('simple-youtube-api');
  const youtube = new YouTube('AIzaSyAzd4dLmH90g8UXNa9a_qFtAm4CjStMK8Q');
let keywordsearch = msg.content.split(" ").slice(1).join(" ")
youtube.searchVideos(keywordsearch, 4)
.then(results => {
var asdasd = "https://youtube.com/watch?v=" + results[0].id;

msg.edit(asdasd)
})

}
exports.info = {
    name: 'yt',
    usage: 'yt <#> <text>',
    description: "Search on YT for a video"
};
