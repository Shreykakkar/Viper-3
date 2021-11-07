module.exports = ({
	name: 'tweet',   
    usage: 'Tweet <msg>',
    description: 'Tweets your message',
    cooldown: '3s',
	code: `
$cooldown[$commandInfo[tweet;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$attachment[https://api.willz.repl.co/image/tweet?text=$replaceText[$message; ;+]&image=$replaceText[$authorAvatar;.webp?size=4096;.png]&username=$replaceText[$nickname; ;+]]
$onlyIf[$message!=;{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`tweet <message>\`}{color:RED}`
});