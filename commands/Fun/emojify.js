module.exports = ({
 name: "emojify",
 aliases: ['emoji'],
  usage: 'Emojify <text>',
 description: 'Makes your text to emoji',
 cooldown: '3s',
 code: `$jsonRequest[https://api.devs-hub.xyz/emojify?text=$toLowercase[$replaceText[$message; ;+;-1]];emojify;Errör]
$cooldown[$commandInfo[emojify;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
 $onlyIf[$message!=;{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`emojify <text | symbols>\`}{color:RED}`
})