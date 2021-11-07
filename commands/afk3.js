module.exports = ({
	name: '$alwaysExecute',

	code: `$reply[$messageID;**$username[$findUser[$message[1]]]** is AFK: - <t:$getUserVar[time;$mentioned[1]]:R>;no]

$onlyIf[$checkcontains[$splitText[1];on]==true;]

$textSplit[$getUserVar[AFK;$mentioned[1]];/]

$onlyIf[$checkContains[$message;<@$mentioned[1]>;<@!$mentioned[1]>]==true;]`
});