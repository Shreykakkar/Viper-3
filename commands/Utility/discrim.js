module.exports = ({
    name: 'discrim',
    aliases: 'discriminator',
    usage: 'Discrim <discrim>',
    description: 'Checks the users with particular discriminator',
    cooldown: '3s',
    code: `
$title[Users with discriminator: #$get[discrim]]
  $description[ 
$djsEval[$get[e];yes]]
  $color[$getVar[color]]
  $onlyIf[$djsEval[$get[e];yes]!=;{description: **No users with the discriminator: $get[discrim] were found**}]
  $let[e;guild.members.cache.filter(x => x.user.discriminator === '$get[discrim]').map(owo => owo.user.tag).join("\\n")]
  $if[$message==]
  $let[discrim;$discriminator]
  $else
  $let[discrim;$message]
$cooldown[$commandInfo[discrim;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
  $onlyIf[$charCount[$message[1]]-$isnumber[$message[1]]==4-true;{description:<a:c_s:902787152318984192> Invalid Args in \`<discriminator\`
Usage:
\`discrim <discriminator>\`{color:RED}]
  $endif
`})  