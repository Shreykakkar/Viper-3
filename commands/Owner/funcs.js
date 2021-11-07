module.exports = ({
 name: 'funcs',
 aliases: 'functions',
 usage: 'Funcs <funcs name>',
 description: 'Guves information about a particular functions',
 cooldown: '1s',
 code: `
$title[$jsonrequest[https://api.leref.ga/functions/$message[1];data[0].name];https://aoi.leref.ga/functions/$replacetext[$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].name];$;usd]]
$cooldown[$commandInfo[funcs;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$addField[Source Code:;[View Source](https://github.com/aoijs/aoi.js/blob/main/package/functions/funcs/$message[1].js)]
$addField[Link:;[Click Me](https://aoi.leref.ga/functions/$replacetext[$jsonrequest[https://api.leref.ga/functions/$message[1];data[0].name];$;usd])]
$addField[Description:;\`\`\`html
$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].desc]\`\`\`]
$addField[Usage:;\`\`\`kt
$jsonRequest[https://api.leref.ga/functions/$message[1];data[0].usage]\`\`\`]
$color[$getVar[color]]
$thumbnail[https://avatars.githubusercontent.com/u/83202021?s=280&v=4]
$onlyIf[$jsonRequest[https://api.leref.ga/functions/$message[1];message]==;Error, command not found.]
$argsCheck[>1;{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`funcs <funcs name>\`}{color:RED}]
$onlyForIDs[$botOwnerID;]
`
} );