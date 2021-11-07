module.exports = ({
  name: "guessing",
  usage: 'Guessing <on/off>',
  description: 'Enable/Disable guessing game',
  code: `
$if[$tolowercase[$message[1]]==on]
$setservervar[guessing;on]
$setservervar[guess_check;true]
$description[<a:tick:902870755329589299> Successfullyy enabled the Guessing game!\nSet guessing game channel, min | max | guessing number .\nUse these commands: \`setguesschannel\` & \`setnum\`]
$color[GREEN]
$onlyIf[$getservervar[guess_check]==false;{description:<a:c_s:902787152318984192> Guessing Game already enabled!}{color:RED}]
$elseif[$tolowercase[$message[1]]==off]
$description[Successfully disabled the Guessing game!]
$color[RED]
$setServerVar[tb_guess;0]
$setServerVar[guess_min;0]
$setServerVar[guess_max;0]
$setServerVar[guessing;off]
$setServerVar[guess_channel;]
$setservervar[guess_check;false]
$setservervar[gchannel_check;false]
$setservervar[gmin_check;false]
$setservervar[gmax_check;false]
$setservervar[tbg_check;false]
$onlyIf[$getservervar[guess_check]==true;{description:<a:c_s:902787152318984192> Guessing game already disabled!}{color:RED}]
$endelseif
$else
{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`guessing <on | off>\`}{color:RED}
$endif
$onlyPerms[admin;{description:<a:c_s:902787152318984192> Missing \`Admin\` Perms!}{color:RED}]
`
}) 

