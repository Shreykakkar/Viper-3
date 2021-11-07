module.exports = ({
	name: 'roleinfo',
    aliases: 'role-info',
    usage: 'Roleinfo',
    description: 'Gives role information',
    cooldown: '3s',
    code: ` $title[$roleName[$findRole[$message]] Info]
 
$description[
**Name:**
<@&$findRole[$message]>
 
**Color:**
\`$getRoleColor[$findRole[$message]]\`
 
**Creation Date:**
\`$creationDate[$findRole[$message];date]\`
 
**You have this role?**
\`$toLocaleUpperCase[$hasRole[$authorID;$findRole[$message];$guildID]]\`
 
**Members:**
\`$djsEval[message.guild.roles.cache.get('$findRole[$message]').members.map(m=>m.id).length;yes]\`

**Position:**
\`$rolePosition[$findRole[$message]]/$roleCount\`

**Permissions:**
\`$rolePerms[$findRole[$message];,]\`]
$onlyIf[$message!=;{description:<a:c_s:902787152318984192> Invalid Args in \`<role>\`
Usage:
\`roleinfo <role name | id | mention>\`}{color:RED}]
$cooldown[$commandInfo[roleinfo;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$color[$getVar[color]]`
});