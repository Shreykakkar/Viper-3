module.exports = ({
	name: 'serverinfo',
    aliases: 'guildinfo',   
    usage: 'Guildinfo/Serverinfo',
    description: 'Gives the guildinfo',
    cooldown: '5s',
	code: `
$thumbnail[$serverIcon[$guildID]]
$addField[Server Creation Date;$creationDate[$guildID;date] ( $creationDate[$guildID;time]);no]
$addfield[Server Region; $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;brazil;Brazil];europe;Europe];hong kong;Hong Kong];eua;Eua];india;India];japan;Japan];yes]
$addField[Server Features;$replaceText[$replaceText[$checkCondition[$serverFeatures==];true;No Features];false;$serverFeatures];yes]
$addField[Varification; $serverVerificationLevel;yes]
$addField[Ban Count; $banCount Bans;yes]
$addField[Boost Status; <:boost:890253488255287387> Boosts $serverBoostCount 
<:boost:890254504526757908> Boost Level $serverBoostLevel;yes]
$addField[Channel;
<:channel:890256251018174504> $channelCount[text] Text 
<:voice:890255912592367646> $channelCount[voice] Voice;yes]
$addField[Server Description;$replaceText[$replaceText[$checkCondition[$serverDescription==];true;No Description];false;$serverDescription];yes]
$addField[Members Count;<:online:859742423306862612> $membersCount[$guildID;online] Online
<:idle:859742463139643402> $membersCount[$guildID;idle] Idle
<:dnd:859742345389539349> $membersCount[$guildID;dnd] Dnd
<:offline:859742388444856330> $membersCount[$guildID;offline] Offline
<:circle:865665973462106162> $membersCount Members;yes]
$addField[Owner;<@$ownerID>;yes]
$addField[Server ID;$guildID;yes]
$cooldown[$commandInfo[serverinfo;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$color[$getVar[color]]`
});