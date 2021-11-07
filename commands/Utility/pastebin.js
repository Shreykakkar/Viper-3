module.exports = ({
  name: 'pastebin',
  aliases: ['pastebin', 'createpastebin'],
  cooldown: '5s',
  description: 'Create a paste with pastebin!',
  code: `
  
  $title[Successfully Created The Paste On Pastebin!]
$description[Pastebin: [Click Here]($jsonrequest[https://normal-api.ml/pastebin?text=$message&privacy=unlisted;url])]
 $color[$getVar[color]]
 $cooldown[$commandInfo[pastebin;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
 $onlyIf[$message[1]!=;{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`pastebin <text>\`}{color:RED}]
$onlyIf[$charCount[$message]<160;{description:<a:c_s:902787152318984192> Message too long ($charCount[$message]). Max character limit is 160!}{color:RED}]  
` }); 
