module.exports = ({
   name: "ping",
   aliases: 'botping',
   usage: 'Ping',
   description: 'Gives the bot ping',
   cooldown: "3s",
   code: `\`\`\`kt

Websocket Ping   : $numberSeparator[$ping]ms

API       Ping   : $numberSeparator[$botPing]ms

Database  Ping   : $numberSeparator[$dbPing]ms

Message   Ping   : $executionTimems

Shard     Ping   : $numberSeparator[$sub[$dateStamp;$get[stamp]]]ms $wait[$dbping] $let[stamp;$dateStamp]

Average   Ping   : $numberSeparator[$truncate[$divide[$sum[$ping;$botPing;$dbPing];3]]]ms

\`\`\`\
$cooldown[$commandInfo[ping;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]`

});
