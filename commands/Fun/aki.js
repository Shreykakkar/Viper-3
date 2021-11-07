module.exports = ({
	name: 'akinator',
	aliases: 'aki',
    usage: 'Akinator',
    description: 'Starts a game of akinator',
    cooldown: '3s',
	code: `
$cooldown[$commandInfo[aki;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$djsEval[
const akinator = require('discord.js-akinator')

akinator(message, client, "en");
]`
});
