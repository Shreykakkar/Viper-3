module.exports = [{
  name: 'rps',
  aliases: 'rockpaperscissors',
  usage: 'Rps/Rockpaperscissors',
  description: 'Game of rock paper & scissors',
  cooldown: '3s',
  code: `
$reactionCollector[$splitText[1];$authorID;5s;🪨,🗞️,✂;Rock,Paper,Scissor;yes]
$textSplit[$sendMessage[{title:Rock Paper Scissor!}
{color:#303136}
{footer:React within 5 sec}
{description:Choose Rock, Paper Or Scissor In Reaction!};yes]; ]`
}, {
        type: 'awaitedCommand',
        name: 'Rock',
        code: `$editMessage[$message[1];{title:RPS GAME} {description:$randomText[
V!PER 🪨 Vs 🪨 $username

**Result** - It's a tie;
V!PER 🗞️ Vs 🪨 $username

**Result** - You lost;
V!PER ✂ Vs 🪨 $username

**Result** - You won]} {color:#303136}{thumbnail:$userAvatar[$clientID]}
]
`
}, {
        type: 'awaitedCommand',
        name: 'Paper',
        code: `
        $editMessage[$message[1];{title:RPS GAME} {description:$randomText[
V!PER 🗞️ Vs 🗞️ $username

**Result** - It's a tie;
V!PER ✂ Vs 🗞️ $username

**Result** - You lost;
V!PER 🪨 Vs 🗞️ $username

**Result** - You won]} {color:#303136}{thumbnail:$userAvatar[$clientID]}
`
}, {
        type: 'awaitedCommand',
        name: 'Scissor',
        code: `
$editMessage[$message[1];{title:RPS GAME} {description:$randomText[
V!PER ✂ Vs ✂ $username

**Result** - It's a tie;
V!PER 🪨 Vs ✂ $username

**Result** - You lost;
V!PER 🗞️ Vs ✂ $username

**Result** - You won]} {color:#303136} {thumbnail:$userAvatar[$clientID]}
]
`
}] 