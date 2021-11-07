module.exports = ({
 name: "firstmessage",
 aliases: ["fm","first-msg"],
 usage: 'Firstmessage/Fm',
 description: 'Tells the first message in the channel',
 cooldown: '3s',
 code: `
$addTimestamp[$get[timestamp]]
$footer[#$channelName[$get[channel]]]
$title[First Message]
$cooldown[$commandInfo[firstmessage;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$color[$getVar[color]]
$description[**Author** - \`$userTag[$getMessage[$get[channel];$get[fmsgID];userID]]\`
**Message** - \`$getMessage[$get[channel];$get[fmsgID];content]\`\n\n**[Jump to Message!]($filterMessage[$get[url];&])**]
$let[url;htt&ps&://disco&&rd.com/channels/$guildID/$get[channel]/$get[fmsgID]]
$let[timestamp;$djseval[d.client.channels.cache.get('$get[channel]').messages.cache.get('$get[fmsgID]').createdTimestamp;yes]]
$let[fmsgID;$firstMessageID[$findChannel[$message;yes]]]
$let[channel;$findChannel[$message;yes]]`
})