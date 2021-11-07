module.exports = [{
  name: "f",
  aliases: 'respect',
  usage: 'F/Respect',
  description: 'Press f to pay respect',
  cooldown: '3s',
  code: `
  $deleteMessage[$get[id]]
$wait[10s]
$cooldown[$commandInfo[respect;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$color[$getVar[color]]
  $let[id;$apiMessage[$channelID;;{description:Press **F** to pay respect};{actionRow:F,2,2,pressF};;yes]]
`
},
{
  type: "interactionCommand",
  prototype: "button",
  name: "pressF",
  code: `  $interactionReply[**$username[$authorID]** successfully paid your respect ;;;0;4]
  $cooldown[15s;]`
}] 
