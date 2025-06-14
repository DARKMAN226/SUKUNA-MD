/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   🛠️ 𝙕𝙀𝙋𝙃𝙔𝙍𓂀♱𝙄𝙉𝘾 - 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘾𝙊𝘿𝙀 🛠️
   
   📌 NOTE:
   If you use or copy any part of this code,
   you MUST give proper credit!

   📞 Contact: +50947118426
  /━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "☘️",

    desc: "Get bot command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `
╭─❖   \`𝕊𝕌𝕂𝕌ℕ𝔸-𝕄𝔻\`  ❖─╮
│ Mode    : ${config.MODE}
│ Prefix  : ${config.PREFIX}
│ Bot Name: ${config.BOT_NAME}
│ Version : 1.0.0
╰───────────────────╯

╭─📥 DOWNLOAD MENU ─╮
├📘 .fb
├📸 .insta
├🎥 .video
├📂 .gdrive
├🐦 .twitter
├🎵 .play
├🎶 .song
├🎥 .video4
├🖼 .img
├📜 .lyrics
├📦 .apk
├🎬 .baiscope
├🧪 .ginisisila
╰───────────────────╯

╭─🔍 SEARCH MENU ─╮
├🎞 .yts
├🎧 .yta
├🎬 .movieinfo
├🎥 .movie
├🔗 .google
├🌤 .weather
├🔍 .sticksearch
╰───────────────────╯

╭─🎮 GAME MENU ─╮
├🔢 .numbergame
├🎲 .roll
├🪙 .coinflip
├🎯 .pick
├🕹 .konami
╰───────────────────╯

╭─🔞 NSFW MENU ─╮
├🔞 .nsfwmenu
├👀 .terranude
╰───────────────────╯

╭─🤖 AI MENU ─╮
├💬 .gpt
├🧠 .ai
├📊 .analyse
╰───────────────────╯

╭─👑 OWNER MENU ─╮
├⚙️ .updatecmd
├🔧 .settings
├👤 .owner
├📁 .repo
├🖥 .system
├📊 .status
├ℹ️ .about
├🚫 .block
├🧪 .eval
├✅ .unblock
├⏻ .shutdown
├🧹 .clearchats
├🖼 .setpp
├📢 .broadcast
├🆔 .jid
├🔑 .gjid
├🔗 .pair
├💾 .save
├🧮 .calc
├🔄 .restart
├👑 .setsudo
╰────────────────────╯

╭─👥 GROUP MENU ─╮
├❌ .remove
├🗑 .del
├➕ .add
├👢 .kick
├👢 .kickall
├👋 .setgoodbye
├👋 .setwelcome
├🔼 .promote
├🔽 .demote
├🏷 .tagall
├🖼 .getpic
├✉️ .invite
├🚫 .revoke
├📊 .poll
├🎲 .randomship
├➕ .newgc
├📩 .joinrequests
├📋 .allreq
├🔇 .mute
├🔊 .unmute
├🔒 .lockgc
├🔓 .unlockgc
├🏃 .leave
├📝 .gname
├📝 .gdesc
├➕ .join
├🙈 .hidetag
├ℹ️ .ginfo
├⏳ .ephemeral on
├⏳ .ephemeral off
├⏳ .ephemeral 7d|24h|90d
├📤 .senddm
╰───────────────────╯

╭─ℹ️ INFO MENU ─╮
├ℹ️ .about
├👨‍💻 .dev
├💡 .alive
├📩 .request
├🤖 .botinfo
├📊 .status
├🏓 .ping
├🏓 .ping2
├🖥 .system
╰───────────────────╯

╭─📖 RELIGION MENU ─╮
├📖 .bible
├📚 .biblelist
╰───────────────────╯

╭─🤖 BOT MENU ─╮
├🆚 .version
├📁 .repo
├📜 .menu
├🔄 .checkupdate
├⬆️ .update
├🎭 .mode
├⌨️ .autotyping
├🟢 .alwaysonline
├🎙 .autorecording
├📖 .autoreadstatus
├🚫 .antibad
├🖼 .autosticker
├💬 .autoreply
├🎯 .autoreact
├🔗 .antilink
╰───────────────────╯

╭─🛠 CONVERTER MENU ─╮
├🖼 .sticker
├✂️ .take
├🔁 .trt
├🎤 .tts
├✨ .fancy
├🔗 .url
├📤 .sendimage
├🎂 .age
├🔄 .convert
├🔎 .tiny
├🎞 .tgs
╰───────────────────╯

╭─⚙️ OTHER MENU ─╮
├🔁 .trt
├😂 .joke
├📚 .fact
├🐙 .github
├🔑 .gpass
├🕵️ .hack
├❝ .quote
├🔳 .qr
├📊 .vv
├📢 .spam
├📇 .vcard
├📁 .srepo
├🖥 .system
├🏅 .rank
├🕰 .timezone
├📖 .define
├📅 .dailyfact
├🕵️ .minutor
╰───────────────────╯

╭─🖼 WALLPAPERS MENU ─╮
├🖼 .img
├🖌 .logo
├📸 .ss
╰───────────────────╯

╭─🎲 RANDOM MENU ─╮
├🐶 .dog
├🐱 .cat
├📓 .diary
├🌸 .anime
├💑 .couplepp
├🔍 .findname
├👧 .loli
├💖 .waifu
├🎭 .cosplay
├🐾 .neko
├🎞 .randomanime
├📤 .sendimage
├👧 .animegirl
├👧 .animegirl1
├👧 .animegirl2
├👧 .animegirl3
├👧 .animegirl4
├👧 .animegirl5
├💬 .pickupline
╰───────────────────╯

> *ENJOY BY 𝙳̷𝚊̷𝚛̷𝚔̷-𝙳̷𝙴̷𝚟̷🩸*
`;


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu,
                          contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363422353392657@newsletter',
      newsletterName: 'SUKUNA-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})
