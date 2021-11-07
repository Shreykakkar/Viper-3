module.exports = ({
    name: "roast", 
    usage: 'Roast <user>',
    description: 'Roast someone',
    cooldown: '3s',
    code: `$title[$username[$authorID] roasted $username[$findUser[$message[1];no]]
$description[$jsonRequest[https://evilinsult.com/generate_insult.php?lang=en&type=text]]
$cooldown[$commandInfo[roast;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$onlyIf[$userExists[$findUser[$message[1];no]]==true;{description:<a:c_s:902787152318984192> Invalid Args in \`<user>\`
Usage:
\`roast <user id | name | mention>\`
}{color:RED}]
$color[$getVar[color]]`
})