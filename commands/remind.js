module.exports = ({
 name: "remind",
 aliases: ["remindme",'remind-me'], 
 usage: 'remind <message> <time>',
 description: 'Sets a reminder',
 cooldown: '5s',
 code: `$sendDM[$authorID;{title: **Reminder!**}
{description: Message - \`$messageSlice[1]\`

Channel - <#$channelID> \`($channelID)\`


[Jump to Message!](https://discord.com/channels/$guildID/$channelID/$messageID)}{color:#303136}{footer:$servername:$servericon[$guildid]}]
$wait[$getObjectProperty[duration]ms]
$sendMessage[Okay, I will remind you in $getObjectProperty[durationdone]: $messageSlice[1];no]
$djsEval[const util = require('dbd.js-utils')

d.object.durationdone = util.parseMS("$getObjectProperty[duration]")
] 
$djsEval[const util = require('dbd.js-utils')

d.object.duration = util.parseToMS("$message[1]")
] 
$cooldown[$commandInfo[remind;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$createObject[{}]
$argsCheck[>2;Correct usage: \`>remind <duration> <reason>\`]`
}) 
 