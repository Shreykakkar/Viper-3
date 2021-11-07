module.exports = ({
	name: "avatar",
	aliases: ["av", "user-avatar"],
	description: "Allows you to enlarge a user's avatar!",
	usage: "avatar <user name | id | mention>",
	cooldown: "3s",
	code:`
$title[**$username[$findUser[$message;yes]]'s** Avatar
$description[**[Webp]($replaceText[$replaceText[$userAvatar[$findUser[$message[1];yes]];.webp;.webp];2048;4098])** | **[Jpg]($replaceText[$replaceText[$userAvatar[$findUser[$message[1];yes]];.webp;.jpeg];2048;4098])** | **[Png\]($replaceText[$replaceText[$userAvatar[$findUser[$message[1];yes]];2048;4096];.webp;.png])**
]
$color[$getvar[color]]
$image[$replaceText[$userAvatar[$findUser[$message[1];yes]];2048;4096];$username[$findUser[$message[1];yes]].png]
$cooldown[$commandInfo[avatar;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again}{color:RED}]
`
} )
