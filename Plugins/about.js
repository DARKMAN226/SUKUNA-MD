/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
┌─────⟪ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ⟫─────┐
│ Hey there, ${pushname} 👋
└──────────────────────┘

┌─⟪ 𝗔𝗕𝗢𝗨𝗧 𝗠𝗘 ⟫─┐
│ 🧑‍💻 Creator   : 𝘿̷𝙖̷𝙧̷𝙠̷-𝘿̷𝙴̷𝙫̷🩸
│ 📛 Name      : 𝘿̷𝙖̷𝙧̷𝙠̷-𝘿̷𝙴̷𝙫̷🩸
│ 🐾 Nickname  : 𝘿̷𝙖̷𝙧̷𝙠̷-𝘿̷𝙴̷𝙫̷🩸
│ 🎂 Age       : ❌
│ 🌍 City      : Ouagadougou
│ 💡 Passion   : WhatsApp Dev
└──────────────────┘

┌─⟪ 𝗣𝗥𝗢𝗝𝗘𝗖𝗧𝗦 ⟫─┐
│ 🛠️ Team       : ZEPHYR𓂀♱ & Dark-DEv
│ 🧑‍🔧 Role       : plusieurs Developer
└──────────────────┘

⟦ ⚙️ Powered by 𝘿̷𝙖̷𝙧̷𝙠̷-𝘿̷𝙴̷𝙫̷🩸 Inc. ⟧
`


await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
