module.exports = [{
    name: "help",
    aliases: 'h',
    usage: 'Help',
    description: 'Sends you a list of commands',
    code: `
$reactionCollector[$splitText[1];$authorID;120s;<a:utility:906079723338211358>, <:invite_background:906083717984972800>,<:mod:906079795413151745>,<:Rules:906081963671191602>,<:gamedev:906115897649950740>;Utility,Image,Mod,Other,Fun;yes] 
$textSplit[$sendMessage[{thumbnail:$userAvatar[$clientID]}{author:Help Menu:$authorAvatar}{description:
<a:pikahi2:906131414859259924>  Hey **$username**

<a:utility:906079723338211358> **Utility**
<:reply:906129291983597578> \`Commands for information and other purpose!\`

<:invite_background:906083717984972800> **Image Manipulation**
<:reply:906129291983597578> \`Commands that generate image!\`

<:mod:906079795413151745> **Moderation**
<:reply:906129291983597578> \`Commands to moderate server!\`

<a:utility:906079723338211358> **Other**
<:reply:906129291983597578> \`Commands related to bot!\`

<:gamedev:906115897649950740> **Fun** 
<:reply:906129291983597578> \`Commands to play and have fun!\`

**$customEmoji[invite] [Invite](https://discord.com/oauth2/authorize?client_id=879922500371349524&scope=bot%20applications.commands&permissions=8) | $customEmoji[support] [Support](https://discord.gg/gchM427ST2) | $customEmoji[topgg] [Vote](https://top.gg/bot/879922500371349524/vote)**}{color:#00ccff}{footer:Commands - 70+:$authorAvatar}
{timestamp};yes]; ]
`
}, {
    type: 'awaitedCommand',
    name: 'Image',
        code: `
$editMessage[$message[1];{description:<:invite_background:906083717984972800> **- Image Manipulation**
For more information do \`>cmd <command>\`

\`Kiss, Hug, Rip, Trash, Magik, Jail, Wasted, Spank, Fact, Hitler, Culprit, Wanted, Slap, Tweet, Comment, Ss\`

**$customEmoji[invite] [Invite](https://discord.com/oauth2/authorize?client_id=879922500371349524&scope=bot%20applications.commands&permissions=8) | $customEmoji[support] [Support](https://discord.gg/gchM427ST2) | $customEmoji[topgg] [Vote](https://top.gg/bot/879922500371349524/vote)**}{color:#00ccff}{footer:Page 2/6:$authorAvatar}
{timestamp}
]`
}, {
    type: 'awaitedCommand',
    name: 'Mod',
        code: `
$editMessage[$message[1];{description: <:mod:906079795413151745> **- Moderation Commands**
For more information do \`>cmd <command>\`

\`Blast, Sm, Decancer, Steal\`

**$customEmoji[invite] [Invite](https://discord.com/oauth2/authorize?client_id=879922500371349524&scope=bot%20applications.commands&permissions=8) | $customEmoji[support] [Support](https://discord.gg/gchM427ST2) | $customEmoji[topgg] [Vote](https://top.gg/bot/879922500371349524/vote)**} {color:#00ccff}{footer:Page 3/6:$authorAvatar}
{timestamp}
]`
}, {
    type: 'awaitedCommand',
    name: 'Utility',
        code: `
$editMessage[$message[1];{description:<a:utility:906079723338211358> **- Utility Commands**
For more information do \`>cmd <command>\`

\`Channelinfo, Colorinfo, Emojinfo, Roleinfo, Serverinfo, Whois, Afk, Discrim, Firstmessage, Position, Remind, Snipe, Translate, Pastebin\`

**$customEmoji[invite] [Invite](https://discord.com/oauth2/authorize?client_id=879922500371349524&scope=bot%20applications.commands&permissions=8) | $customEmoji[support] [Support](https://discord.gg/gchM427ST2) | $customEmoji[topgg] [Vote](https://top.gg/bot/879922500371349524/vote)**} {color:#00ccff}{footer:Page 1/6:$authorAvatar}
{timestamp}
]`
}, {
    type: 'awaitedCommand',
    name: 'Other',
        code: `
$editMessage[$message[1];{description: <:Rules:906081963671191602> **- Other Commands**
For more information do \`>cmd <command>\`

\`Stats, Support, News, Help, Botsuggest, Ping\`

**$customEmoji[invite] [Invite](https://discord.com/oauth2/authorize?client_id=879922500371349524&scope=bot%20applications.commands&permissions=8) | $customEmoji[support] [Support](https://discord.gg/gchM427ST2) | $customEmoji[topgg] [Vote](https://top.gg/bot/879922500371349524/vote)**} {color:#00ccff}{footer:Page 4/6:$authorAvatar}
{timestamp}
]`
}, {
    type: 'awaitedCommand',
    name: 'Fun',
        code: `
$editMessage[$message[1];{description:<:gamedev:906115897649950740> **- Fun Commands**
For more information do \`>cmd <command>\`

\`Av, Howgay, Meme, Joke, Wyr, Respect, Emojify, Football, Cricket, Aki, Ascii, 8ball, Rps, Roast, Hack, Guessing , Reset-chatbot , Set-chatbot\`

**$customEmoji[invite] [Invite](https://discord.com/oauth2/authorize?client_id=879922500371349524&scope=bot%20applications.commands&permissions=8) | $customEmoji[support] [Support](https://discord.gg/gchM427ST2) | $customEmoji[topgg] [Vote](https://top.gg/bot/879922500371349524/vote)**} {color:#00ccff}{footer:Page 5/6:$authorAvatar}
{timestamp}
]`
}]