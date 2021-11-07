const mySecret = process.env['TOKEN'];
const aoijs = require('aoi.js');
const bot = new aoijs.Bot({
    sharding: true,
    shardAmount: 100,
	token: process.env.TOKEN,
	prefix: ['>','v!','<@$clientID>'],
	everyoneMention: `false`
});

const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Express app!');
});

app.listen(3000, () => {
	console.log('server started');
});

bot.loadCommands('./commands/');

const variables = require("./variables")

bot.variables(variables)


bot.loopCommand({
code: `
\`\`\`js
Ready On Client V!PER :)
Ping(ms): $ping 
Servers: $servercount
Users: $allmemberscount
Aoi Version: $packageVersion
\`\`\`
`,
    
channel: "899188336357425162",
executeOnStartup: true,
every: 600000
});  

bot.status({
	text: 'Updated to v0.0.5',
	type: 'PLAYING',
	status: 'idle',
	time: 3
});

bot.onMessage();
bot.onInteractionCreate();
bot.onJoined();
bot.onLeave();
bot.onGuildJoin();
bot.onGuildLeave();
bot.botJoinCommand({
 channel: '$randomChannelID',
 code: `$color[#303136]
 $description[Thanks for inviting me. My prefix is \`>\`.For help command use \`>help\`]`
})

bot.command({
	name: 'reboot',
	code: `Rebooting Commands...
$onlyForIDs[$botOwnerID;]`
});

bot.command({
	name: 'reboot',
	code: `$reboot
  $wait[250ms]
$onlyForIDs[$botOwnerID;]`
});

bot.command({
	name: 'aoi', // trigger
	aliases: ['eval', 'ev'], //aliases
	code: `$eval[$message]
  $onlyForIDs[648885368543903754;826801341178839041;]`
});

bot.deletedCommand({
	channel: '$channelID',

	code:`
$setChannelVar[snipe_msg;$message]
$setChannelVar[snipe_author;$authorID]

$setChannelVar[snipe_channel;$channelID]

$setChannelVar[snipe_date;$day $month $year - $hour:$minute$timezone[Asia/kolkata]]

$setChannelVar[snipe_t;$truncate[$divide[$dateStamp;1000]]]`
});

 bot.onMessageDelete();

bot.command({
	name: 'snipe',
	code: `
$color[$getVar[color]]

$author[$userTag[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]];$userAvatar[$getChannelVar[snipe_author;$mentionedChannels[1;yes]]]]

$description[**Message** - \`$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]\` 

**Channel** - <#$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]> \`($getChannelVar[snipe_channel;$mentionedChannels[1;yes]])\`

**Time** - \`$getChannelVar[snipe_date;$mentionedChannels[1;yes]]\` 
[<t:$getChannelVar[snipe_t;$mentionedChannels[1;yes]]:R>]
]

$onlyIf[$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]!=; {description:<a:c_s:902787152318984192> Nothing to snipe in <#$mentionedChannels[1;yes]>}{color:RED}]`
});
  
bot.command({
	name: '$alwaysExecute',
	code: `$disableEveryoneMentions 
$disableMentions
$disableRoleMentions
      
$reply[$messageID;$jsonRequest[https://api.popcat.xyz/chatbot?msg=$replaceText[$noMentionMessage; ;+;-1]&owner=Tommy&botname=Viper;response];no]
$botTyping[5s]
$cooldown[2s;{description:<a:c_s:902787152318984192> Don't send messages to fast, you can break me by doing it}{color:RED}{delete:3s}]
$onlyIf[$checkContains[$message;@everyone;@here]==false;<a:c_s:902787152318984192> <@$authorID> I dont disturb people]

$onlyForChannels[$getServerVar[cbChannel];]
$onlyIf[$getServerVar[cbChannel]!=;]
`
});

bot.command({
	name: 'set-chatbot',
	code: `
$description[<a:tick:902870755329589299> Successfully enabled the chatbot to <#$findChannel[$message;no]>]
$color[GREEN]
$setServerVar[cbChannel;$findChannel[$message;no]]
$onlyIf[$findChannel[$message;no]!=undefined;{description:<a:c_s:902787152318984192> Invalid Args in \`<channel>\`
Usage:
\`set-chatbot <channel name | mention>\`}{color:RED}]

$argsCheck[>1;{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`set-chatbot <channel mention | channel name | channel ID>\`}{color:RED}]
$onlyIf[$findChannel[$message;no]!=$getServerVar[cbChannel];{description:<a:c_s:902787152318984192> Chat bot is already active in <#$findChannel[$message;no]>}{color:RED}]

$onlyPerms[manageserver;{description:<a:c_s:902787152318984192> Missing
\`Manage_Server\` Perms}{color:RED}]`
});

bot.command({
  name: 'reset-chatbot',
  code: `
 $description[Successfully disabled chatbot in this server]
 $color[RED]
 
 $setServerVar[cbChannel;]
 $onlyIf[$getServerVar[cbChannel]!=;{description:<a:c_s:902787152318984192> This server has no chat bot channel.}{color:RED}]
 
$onlyPerms[manageserver;{<a:c_s:902787152318984192> Missing 
\`Manage_Server\` Perms}{color:RED}]`
 });

