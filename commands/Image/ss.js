module.exports = ({
name: "ss",
aliases: "screenshot",
usage: 'Ss <link>',
description: 'Gives a screenshot of the website',
cooldown: '3s',
code: `

$image[attachment://ss.png]
$color[$getVar[color]]
$attachment[https://image.thum.io/get/width/1920/crop/675/noanimate/$replaceText[$replaceText[$checkContains[$message;https://];true;$message];false;https://$message];ss.png]
$onlyif[$checkContains[$toLowercase[$message];porn;hentai;bdsm;bondage;nsfw;xxx;sex;threesome;uncensored;dick;big dick;cock;strapon;futanari;trap;strap on;shemale;dickgirl;futa;incest;lolicon;titty;fuck;boobs;boobas;titties;hardcore;milf;amelewd;murr;yiff;4k;anal;cumart;cumslut;boobs;ass;blowjob;bondage;femdom;feet;gasm;gif;hanal;hboobs;hentai;hneko;holo;keta;pussy;kitsu;kuni;nude;girlsolo;orgy;slut;creampie;xlecx;xhamster;xnxx;lewd;xvideos;bangbros;boyfriendtv;goodgay;txx;4tube;8teenxxx;alotporn;amateurscentral;asianscentral;beeg;bustnow;cliphunter;definebabes;deviantclip;drtuber;empflix;fantasti.cc;fapdu;freeporn;freudbox;fuq;fux;grayvee;hellxx;hustlertube;jugy;jizzhut;kaktuz;keezmovies;kinxxx;laraporn;leakedporn;lovelyclips;lubetube;mofosex;monstertube;madthumbs;moviefap;moviesand;orgasm;perfectgirls.net;pichunter;planetsuzy;porn;pornolandia;porn-plus;porncor;pornhub;pornrabbit;porntitan;pussy;redtube;tube8;xhamster;xnxx;xvideos;youjizz;redwap2;childxfun;childxporn]==false;{title:âŒ NSFW detected!} {description:<a:c_s:902787152318984192> No I won't screenshot this because your message was flagged as NSFW. If you think this is a mistake, contact $usertag[$botownerid].}{color:RED}]
$onlyIf[$isValidLink[$message]==true;{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`ss <url>\`}{color:RED}] 
$cooldown[$commandInfo[ss;cooldown];{description:<a:c_s:902787152318984192> Wait for %time% to try again!}{color:RED}]
$onlyIf[$message!=;{description:<a:c_s:902787152318984192> Invalid Args
Usage:
\`ss <url>\`}{color:RED}]
`
})