module.exports = ({
	name: 'afk', 
    usage: 'Afk (msg)',
    description: 'Sets an afk for you',
    cooldown: '10s',
	code: `$disableEveryoneMentions

$setUserVar[AFK;$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;on];false;off]/$replaceText[$replaceText[$checkCondition[$message==];true;AFK];false;$message]]
$cooldown[$commandInfo[afk;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$color[$getVar[color]]

$reply[$messageID;**$username**, I set your AFK: $replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;AFK];false;$noMentionMessage];no]

$setUserVar[time;$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;$truncate[$divide[$dateStamp;1000]]];false;]]

$textSplit[$getUserVar[AFK];/]

`
});