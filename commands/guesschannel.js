module.exports = ({
    name: "setguesschannel",
    aliases: 'set-guesschannel',
    usage: 'Setguesschannel <#chnl>',
    description: 'Sets guess channel',
    code: `
$setServerVar[guess_channel;$mentionedChannels[1]]
$setservervar[gchannel_check;true]
$description[<a:tick:902870755329589299> Guessing game will start in <#$mentionedChannels[1]>]
$color[GREEN]
$modifyChannelPerms[$mentionedChannels[1];+sendmessages;$guildID]
$onlyIf[$mentionedChannels[1]!=;{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`setguesschannel <#chnl>\`}{color:RED}]`
})

