module.exports = ({
name: "decancer",
usage: 'Decancer <mention>',
description: 'Makes the user pingable',
cooldown: '3s',
code: `
$title[Nickname Decancer]
$description[\`$get[kk]\` nickname changed to \`$nickname[$findUser[$message;no]]\`]
$wait[2s]
$color[$getVar[color]]
$djsEval[
const stringTools = require('string-toolkit');

const noCancer = stringTools.decancer('$nickname[$findUser[$message;no]]')
message.guild.members.cache.get("$findUser[$message;no]").setNickname(noCancer);]
$onlyperms[managenicknames;{description:<a:c_s:902787152318984192> Missing \`Manage Nickname\` Perms}{color:RED}]
$let[kk;$nickname[$findUser[$message;no]]]
$onlyif[$checkcondition[$findUser[$message[1];no]!=$ownerid]$checkcondition[$hasperms[$clientid;managenicknames]==true]$checkcondition[$roleposition[$highestrole[$findUser[$message[1];no]]]>$roleposition[$highestrole[$clientid]]]==truetruetrue;{description:<a:c_s:902787152318984192> The user role is higher than me!}{color:RED}]
$onlyIf[$userExists[$findUser[$message;no]]==true;{description:<a:c_s:902787152318984192> Invalid Args in \`<user>\`
Usage:
\`decancer <user>\`}{color:RED}]

`}) 