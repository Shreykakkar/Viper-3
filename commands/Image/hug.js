module.exports = ({
 name: "hug",
 usage: 'Hug <mention>',
 description: 'Sends a hug gif',
 cooldown: '3s',
 code: `$title[$username hugs $username[$findUser[$message;no]]]
 $image[$jsonRequest[https://nekos.best/api/v1/hug; url;An error occurred]]
 $color[$getVar[color]]
$onlyIf[$findUser[$message;no]!=$authorID;{description:<a:c_s:902787152318984192> You can't hug yourself!}{color:RED}]
$onlyIf[$userExists[$findUser[$message;no]]==true;{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`hug <user>\`}{color:RED}]
$cooldown[$commandInfo[hug;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]`
}) 