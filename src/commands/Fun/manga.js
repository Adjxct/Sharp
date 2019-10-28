exports.run = async (bot, msg, args, level) => {
  const kitsu = require("node-kitsu");
  if (!args[0]) {
    var aniname = await bot.awaitReply(msg, "What is the name of the manga you want to search for?", 15000);
  }
  else var aniname = args.join(" ");
  var embed;
  try {
    var results = await kitsu.searchManga(aniname, 0);
  } catch (ex) {
    msg.edit("An error occured running this command. This is likely due to an issue on Kitsu's end, and not an error with the bot. Please try your command again later.");
  }
  var aniresult = results[0].attributes;
  if (!aniresult.titles) {
    msg.edit("No results found");
    return;
  }

  embed = { "embed": {
    "title": aniresult.titles.en || aniresult.titles.en_jp || aniresult.canonicalTitle,
    "url": `https://kitsu.io/manga/${aniresult.slug}`,
    "description": aniresult.synopsis,
	"color": 15931416,
    "image": { "url": aniresult.posterImage.small },
    "fields": [
      { "name": "Rating:", "value": `${aniresult.averageRating || 0}% Approval`, "inline": true },
      { "name": "Chapters:", "value":  `${aniresult.chapterCount || 0} (${aniresult.subtype})`, "inline": true },
      { "name": "Status:", "value": aniresult.status == "tba" ? "TBA" : `${aniresult.status.charAt(0).toUpperCase()}${aniresult.status.substr(1).toLowerCase()}`, "inline": true }
    ]
  } };
  msg.edit(embed);
};


exports.info = {
  name: "manga",
  description: "Show information about a manga on Kitsu.",
  usage: "manga [name]"
};