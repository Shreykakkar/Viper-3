module.exports = ({
	name: '$alwaysExecute',
	code: `$setUserVar[AFK;off;$authorID]

$reply[$messageID;Welcome Back! **$username**, I have removed your AFK;no]

$onlyif[$checkcontains[$message;afk]==false;]

$onlyIf[$checkcontains[$splitText[1];on]==true;]

$textSplit[$getUserVar[AFK];/]`
});