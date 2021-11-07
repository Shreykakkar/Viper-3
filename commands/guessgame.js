module.exports = ({
  name: "$alwaysExecute",
  code: `
  $if[$isNumber[$message]==false]
$reply[$messageID;{description:<a:c_s:902787152318984192> $username[$authorID], \`$message\` isn\'t a number.}{color:RED};no]
$deleteIn[3s]

$elseif[$message>$getServerVar[guess_max]]
$reply[$messageID;{description:<a:c_s:902787152318984192> $username[$authorID], You can only guess numbers from \`$getServerVar[guess_min]\` to \`$getServerVar[guess_max]\`. Please stick with these numbers.}{color:RED};no]
$deleteIn[3s]
  $endelseif

  $elseif[$message<$getServerVar[guess_min]] 
$reply[$messageID;{description:<a:c_s:902787152318984192> $username[$authorID], You can only guess numbers from \`$getServerVar[guess_min]\` to \`$getServerVar[guess_max]\`. Please stick with these numbers.}{color:RED};no]
$deleteIn[3s]
  $endelseif

  $elseif[$message==$getServerVar[tb_guess]]
  $reply[$messageID;{description:<a:tick:902870755329589299> **$userTag** has guessed the right number.\nThe number was \`$message\`. GGs!}{color:GREEN};yes]
$modifyChannelPerms[$channelID;-sendmessages;$guildID]
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
  $endelseif
  $else

  $endif
  $onlyIf[$getServerVar[tbg_check]==true;]
  $onlyIf[$getServerVar[gmax_check]==true;]
  $onlyIf[$getServerVar[gmin_check]==true;]
  $onlyIf[$getServerVar[gchannel_check]==true;]
  $onlyIf[$getServerVar[guess_check]==true;]
  $onlyForChannels[$getServerVar[guess_channel];]
  `
})