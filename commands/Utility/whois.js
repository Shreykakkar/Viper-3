module.exports = ({
  name: 'userinfo',
  aliases: 'whois',
  usage: 'Userinfo/Whois',
  description: 'Gives user info',
  cooldown: '5s',
  code: `
$color[$getVar[color]]
  $thumbnail[$userAvatar[$findUser[$message]]]
$author[$username[$findUser[$message[1];yes]]'s Information;$userAvatar[$findUser[$message[1];yes]];]

$if[$isBot[$findUser[$message[1]]]==true]
  
$description[__**General Information**__
**Name:** $userTag[$findUser[$message[1];yes]]
**ID:** $findUser[$message[1];yes]
**Nickname:** $nickname[$findUser[$message[1];yes]]
**Bot:** <a:tick:902870755329589299> Yes
**Join Position:** $memberJoinPosition[$findUser[$message[1];yes]]/$membersCount
**User Avatar:** [Link]($userAvatar[$findUser[$message[1];yes];2048;yes])
**Status:** $status[$findUser[$message[1];yes]]
**Badges:** $getUserBadges[$findUser[$message[1];yes]]
**Account Created:** <t:$round[$divide[$creationdate[$findUser[$message[1];yes];ms];1000]]:R>
**Server Joined:** <t:$round[$divide[$memberjoineddate[$findUser[$message[1];yes];ms]
;1000]]:R>

__**Role Information**__
**Highest Role:** <@&$highestRole[$findUser[$message[1];yes]]>
**Roles:** $userRoles[$findUser[$message[1];yes];mentions]
$endif


$if[$isBot[$findUser[$message[1]]]==false]
$description[__**General Information**__
**Name:** $userTag[$findUser[$message[1];yes]]
**ID:** $findUser[$message[1];yes]
**Nickname:** $nickname[$findUser[$message[1];yes]]
**Bot:** <a:c_s:902787152318984192> No
**Join Position:** $memberJoinPosition[$findUser[$message[1];yes]]/$membersCount
**User Avatar:** [Link]($userAvatar[$findUser[$message[1];yes];2048;yes])
**Status:** $status[$findUser[$message[1];yes]]
**Badges:** $getUserBadges[$findUser[$message[1];yes]]
**Account Created:** <t:$round[$divide[$creationdate[$findUser[$message[1];yes];ms];1000]]:R>
**Server Joined:** <t:$round[$divide[$memberjoineddate[$findUser[$message[1];yes];ms]
;1000]]:R>

__**Role Information**__
**Highest Role:** <@&$highestRole[$findUser[$message[1];yes]]>
**Roles:** $userRoles[$findUser[$message[1];yes];mentions]
$endif
`
});  
