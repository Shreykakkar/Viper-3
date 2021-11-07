module.exports = ({
name: 'colorinfo',
aliases: 'color',
usage: 'Color/Colorinfo <hex code>',
description: 'Gives color information',
cooldown: '3s',
code: `$title[Color info]
$addField[Brighter Shade;\`$get[bright]\`;yes]
$addField[RGB;\`$get[rgb]\`;yes]
$addField[Hex Code;\`$get[hex]\`;yes]
$addField[Name;\`$get[name]\`;yes]
$image[attachment://color.png]
$attachment[$get[img];color.png]
$color[$message]
$let[name;$jsonRequest[https://api.popcat.xyz/color/$message;name]]
$let[hex;$jsonRequest[https://api.popcat.xyz/color/$message;hex]]
$let[rgb;$jsonRequest[https://api.popcat.xyz/color/$message;rgb]]
$let[bright;$jsonRequest[https://api.popcat.xyz/color/$message;brightened]]
$let[img;$jsonRequest[https://api.popcat.xyz/color/$message;color_image]]
$onlyIf[$isValidHex[$message]==true;{description:<a:c_s:902787152318984192> Invalid Args in \`<hex>\`
Usage:
\`colorinfo <hex code>\`}{color:RED}]
$cooldown[$commandInfo[colorinfo;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$onlyIf[$message!=;{description:<a:c_s:902787152318984192> Inavlid Args
Usage:
\`colorinfo <hex code>\`}{color:RED}]`
})