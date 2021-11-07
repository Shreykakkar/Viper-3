module.exports = ({
  name: "setnum",
  aliases: 'set-number',
  usage: 'Setnum <min | max | guess> <number>',
  description: 'Set guessing number',
  code: `$if[$toLowerCase[$message[1]]==min]
{description:<a:tick:902870755329589299> Successfully set the minimum number to be guessed from \`$message[2]\`}{color:GREEN}
  $setservervar[guess_min;$message[2]]
  $setservervar[gmin_check;true]
  $onlyIf[$isNumber[$message[2]]==true;<:icons_outage:885952169277280266> \`$message[2]\` isn\'t a number.]
  $elseif[$toLowerCase[$message[1]]==max]
{description:<a:tick:902870755329589299> Successfully set the maximum number to be guessed upto \`$message[2]\`}{color:GREEN}
  $setservervar[guess_max;$message[2]]
  $setservervar[gmax_check;true]
  $onlyIf[$getservervar[guess_min]<$message[2];<:icons_outage:885952169277280266> Maximum number cannot be lesser than Minimum number.\nChoose a number that is higher than \`$getservervar[guess_min]\`]
  $onlyIf[$getservervar[gmin_check]==true;<:icons_outage:885952169277280266> Minimum number to be guessed isn\'t set.\nTo set it, Use \`$getservervar[prefix]setnum min <number>\`]
  $onlyIf[$isNumber[$message[2]]==true;\`$message[2]\` isn\'t a number.]
  $endelseif
  $elseif[$toLowerCase[$message[1]]==guess]
<:tick:899175815609217064> Successfully set the "**To be Guessed**" number to \`$message[2]\`
  $setservervar[tb_guess;$message[2]]
  $setservervar[tbg_check;true]
  $channelsendmessage[$getservervar[guess_channel];Guessing game has been started!\nStart guessing numbers from \`$getservervar[guess_min]\` to \`$getservervar[guess_max]\`]
  $onlyif[$message[2]<=$getservervar[guess_max];<:icons_outage:885952169277280266> **To be Guessed** number must be lesser than Maximum number.\nChoose a number that is lesser than \`$getservervar[guess_max]\`]
  $onlyif[$message[2]>=$getservervar[guess_min];<:icons_outage:885952169277280266> **To be Guessed** number must be higher than Minimum number.\nChoose a number that is higher than \`$getservervar[guess_min]\`]
  $onlyif[$getservervar[gmax_check]==true;<:icons_outage:885952169277280266> Maximum number to be guessed isn\'t set.\nTo set it, Use \`$getservervar[prefix]setnum max <number>\`]
  $onlyif[$getservervar[gmin_check]==true;<:icons_outage:885952169277280266> Minimum number to be guessed isn\'t set.\nTo set it, Use \`$getservervar[prefix]setnum min <number>\`]
  $onlyIf[$isNumber[$message[2]]==true;<:icons_outage:885952169277280266> \`$message[2]\` isn\'t a number.]
  $endelseif
  $else
  **Usage:** \`$getservervar[prefix]setnum <min | max | guess> <number>\`\n__**NOTE:**__ To set the "**To be Guessed**" number (3rd field of \`$getservervar[prefix]setnum\` command), set it in a private channel, so that the users wont know what number to be guessed.
  $endif
  $onlyif[$checkcontains[$message;.]==false;<:icons_outage:885952169277280266> You can\'t input decimals.]
  $onlyif[$getservervar[gchannel_check]==true;<:icons_outage:885952169277280266> Guessing game channel isn\'t set.\nTo set it, Use \`$getservervar[prefix]setguesschannel #channel\`]
  $onlyif[$getservervar[guess_check]==true;<:icons_outage:885952169277280266> Guessing game event is disabled.\nEnable it by, \`$getservervar[prefix]guessing <on | off>\`]
  $onlyPerms[admin;<:icons_outage:885952169277280266> You don\'t have \`ADMIN\` Permission.]
  `
})

