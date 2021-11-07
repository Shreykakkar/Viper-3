module.exports = ({
    name: 'botsuggest',
    aliases: 'bot-suggest',
    usage: 'Botsuggest <suggestion>',
    description: '',
    cooldown: '5s',
    code: `
$channelSendMessage[$channelID;{description:<a:tick:902870755329589299> Your suggestion has been sent to the suggestions channel.}{color:GREEN}]
$useChannel[899162806472024094]
$author[$username;$authorAvatar;$getServerInvite]
$description[**New Suggestion**
\`$message\`]
$color[$getVar[color]]
$addReactions[<a:uparrow:899953758753144832>;<a:downarrow:899954020272177193>]
$cooldown[$commandInfo[botsuggest;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$footer[Suggested from $serverName]
$addTimestamp
$onlyIf[$message!=;{description:<a:c_s:902787152318984192> Inavlid Args
Usage:
\`botsuggest <suggestion>\`}{color:RED}]`
})