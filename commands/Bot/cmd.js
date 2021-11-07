module.exports = ({
 name: "command",
 aliases: ['cmd'],
 description: "Know information about a specific command",
 usage: "command <command name>",
 cooldown: '3s',
 code:
 `
$author[$toLocaleUppercase[$commandInfo[$message[1];name]] Command;$userAvatar[$clientID];https://dsc.gg/v!per]

$addField[Usage Syntax:;\`- <> = Required Args
- () = Optional Args\`]
$cooldown[$commandInfo[cmd;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$color[#303136]

$addField[Cooldown:;\`\`\`js
$toLocaleUpperCase[$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];cooldown]!=];true;$commandInfo[$message[1];cooldown]];false;None]]\`\`\`;yes]

$addField[Usage:;\`\`\`js
$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];usage]!=];true;$commandInfo[$message[1];usage]];false;None]\`\`\`;yes]

$addField[Description:;\`\`\`js
$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];description]!=];true;$commandInfo[$message[1];description]];false;None]\`\`\`]

$addField[Aliases:;\`\`\`
$toLocaleUpperCase[$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];aliases]!=];true;$replaceText[$commandInfo[$message[1];aliases];,; | ]];false;None]]\`\`\`]
 $onlyIf[$commandInfo[$message[1];name]!=;{description:<a:c_s:902787152318984192> Command Not Found}{color:RED}]
 $onlyIf[$message!=;{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`cmd <cmd name>\`}{color:RED}]`
})