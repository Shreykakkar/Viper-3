module.exports = ({
    name: 'news',
    aliases: 'botnews',
    usage: 'News',
    description: 'Gives latest updates of bot',
    cooldown: '3s',
    code: `
$thumbnail[$userAvatar[$clientID]]
$description[📖 **Bot Updates & News**
> 📒 __New Commands__ 
> \`Globalafk\`
> 
> 🏷️ __Bug Reports__
> \`None\`
> 
> 📊 __Bot Updates__
> \`Working on application system\`]
$footer[Last Updated at 9:00 AM | 15th Oct 2021]
$cooldown[$commandInfo[news;cooldown];<:icons_outage:885952169277280266> Wait for %time% to try again]
$color[$getVar[color]]`
})