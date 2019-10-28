exports.run = async (bot, msg, args, level) => {
  const kitsu = require("node-kitsu");
  if (!args[0]) {
    var aniname = await bot.awaitReply(msg, "What is the name of the anime you want to search for?", 15000);
  }
  else var aniname = args.join(" ");
  var embed;
  try {
    var results = await kitsu.searchAnime(aniname, 0);
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
    "url": `https://kitsu.io/anime/${aniresult.slug}`,
    "description": aniresult.synopsis,
	"color": 15931416,
    "image": { "url": aniresult.posterImage.small },
    "fields": [
      { "name": "Rating:", "value": `${aniresult.averageRating || 0}% Approval`, "inline": true },
      { "name": "Episodes:", "value":  `${aniresult.episodeCount || 0} (${aniresult.subtype})`, "inline": true },
      { "name": "Status:", "value": aniresult.status == "tba" ? "TBA" : `${aniresult.status.charAt(0).toUpperCase()}${aniresult.status.substr(1).toLowerCase()}`, "inline": true }
    ]
  } };
  msg.edit(embed);
};


exports.info = {
  name: "anime",
  description: "Show information about an anime on Kitsu.",
  usage: "anime [name]"
};