module.exports = ({
 name: 'meme',
 usage: 'Meme',
 description: 'Sends a random meme',
 cooldown: '1s',
 code: ` $description[**[$jsonRequest[https://api.popcatdev.repl.co/meme;title]]($jsonRequest[https://api.popcatdev.repl.co/meme;url])**]
$color[$getVar[color]]
$image[$jsonRequest[https://api.popcatdev.repl.co/meme;image]]
$footer[$replaceText[👍 $jsonRequest[https://api.popcatdev.repl.co/meme;upvotes]  |  👎 0  |  💬 $jsonRequest[https://api.popcatdev.repl.co/meme;comments];.000000; ;-1]]`
})