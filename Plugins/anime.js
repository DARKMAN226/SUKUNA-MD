


const {cmd , commands} = require('../command')

cmd({
    pattern: "funnypics",
    desc: "anime the bot",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*𝕊𝕌𝕂𝕌ℕ𝔸-𝕄𝔻 FUNNY PHOTOS*`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/mnagkd.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/mnagkd.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/mnagkd.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/mnagkd.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/mnagkd.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/mnagkd.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/mnagkd.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
