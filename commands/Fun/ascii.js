module.exports = ({
 name: "ascii",
 usage: 'Ascii',
 description: 'Converts your text to ascii text',
 cooldown: '3s',
 code: `
$description[**Converted your Text to Ascii**
Message - \`\`\`
$message\`\`\`
Ascii Text - 
\`\`\`fix
$jsonRequest[https://api.phydo.repl.co/text/ascii?text=$replaceText[$message; ;+;-1];ascii]\`\`\`]
$cooldown[$commandInfo[ascii;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$color[$getVar[color]]
$onlyIf[$message!=;{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`ascii <text>\`}{color:RED}]
`
})