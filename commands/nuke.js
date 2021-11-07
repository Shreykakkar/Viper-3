module.exports = ({
 name: "blast",
 aliases: ["nuke"],
 usage: 'Nuke/Blast',
 description: 'Nukes the channel',
 cooldown: '5s',
 code: `
 $djsEval[
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(d.message.channel.position)
 c.send(d.message.author.tag + ' nuked this channel! https://tenor.com/view/antimatter-nuke-extinction-nuclear-bomb-explosion-gif-17985756')
 
 })
 .catch(() => d.message.channel.send('I am missing Perms to execute this'))
]
$cooldown[$commandInfo[nuke;cooldown];Wait for %time% to try again]
$onlyPerms[admin;{description:<a:c_s:902787152318984192> You need \`Admin\` perms to execute this Command}{color:RED}]
$onlyBotPerms[managechannels; {description:<a:c_s:902787152318984192> I need \`Manage Channels\` Permission to execute this}{color:RED}]
$deleteIn[3s]`
});