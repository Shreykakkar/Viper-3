module.exports = ({
    name: "position",
    aliases: 'join-position',
    usage: 'Position <user>',
    description: 'Gives the joining position of the user',
    cooldown: '3s',
    code: `Joining position of **$username[$findUser[$message;no]]** in this server is **$ordinal[$memberJoinPosition[$findUser[$message;no]]]**!
$cacheMembers
$cooldown[$commandInfo[position;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$suppressErrors[{description:<a:c_s:902787152318984192> Invalid Args in \`<user>\`
Usage:
\`position <user id | name | mention>\`}{color:RED}`
});