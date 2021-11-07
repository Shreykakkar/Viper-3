module.exports = ({
    name: "channelinfo",
    aliases: 'channel-info',
    usage: 'Channelinfo (#chnl)',
    description: 'Gives channel information',
    cooldown: '3s',
	code: `
$title[Channel Information]
$description[**Name:**
<#$channel[$findChannel[$message];id]> **\`$channel[$findChannel[$message];name]\`**

**Channel ID:**
\`$channel[$findChannel[$message];id]\`

**Topic:**
\`$replaceText[$channel[$findChannel[$message];topic];null;No topic.]\`

**Channel Type:**
\`$replaceText[$replaceText[$replaceText[$replaceText[$channel[$findChannel[$message];type];text;Text Channel];voice;Voice Channel];category;Category Channel];news;News Channel]\`

**Category:**
<#$channel[$findChannel[$message];parentid]>

**Position:**
\`$channel[$findChannel[$message];position]\`

**Created At:**
\`$channel[$findChannel[$message];created]\`]
$cooldown[$commandInfo[channelinfo;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$color[$getVar[color]]
`
});
