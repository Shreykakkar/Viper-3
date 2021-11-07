module.exports = ({
 name: "8ball",
 aliases: 'askme',
 usage: '8ball <question>',
 description: 'Gives answer to your questions',
 cooldown: '3s',
 code: `
$title[🎱 8Ball Game]
$description[**What is your question?**
\`"$message?"\`
**My answer is...**
\`"$jsonrequest[https://api.rodiscool.repl.co/8ball;responce]"\`]
$onlyif[$message!=;{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`8ball/askme <question>\`}{color:RED}]
$cooldown[$commandInfo[8ball;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again}{color:RED}]
$color[$getVar[color]]
`
})

