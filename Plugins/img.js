/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   🛠️ 𝘿𝘼𝙑𝙄𝘿 𝙏𝙀𝘾𝙃 𝙄𝙉𝘾 - 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘾𝙊𝘿𝙀 🛠️
   
   📌 NOTE:
   If you use or copy any part of this code,
   you MUST give proper credit!

   📞 Contact: +241 05730123
   🌐 GitHub: https://github.com/DavidTechInc

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

const {
  cmd,
  commands
} = require('../command');
const axios = require('axios');
/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   🛠️ 𝘿𝘼𝙑𝙄𝘿 𝙏𝙀𝘾𝙃 𝙄𝙉𝘾 - 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘾𝙊𝘿𝙀 🛠️
   
   📌 NOTE:
   If you use or copy any part of this code,
   you MUST give proper credit!

   📞 Contact: +241 05730123
   🌐 GitHub: https://github.com/DavidTechInc

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/


const GOOGLE_API_KEY = 'AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI'; // Replace with your Google API key
const GOOGLE_CX = 'baf9bdb0c631236e5'; // Replace with your Google Custom Search Engine ID
//const apiKey = "AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI"; // Votre clé API Google
// const cx = "baf9bdb0c631236e5"; /
cmd({
    pattern: "img",
    desc: "Search and send images from Google.",
    react: "🖼️",
    category: "media",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("Please provide a search query for the image.");

        // Fetch image URLs from Google Custom Search API
        const searchQuery = encodeURIComponent(q);
        const url = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&cx=${GOOGLE_CX}&key=${GOOGLE_API_KEY}&searchType=image&num=5`;
        
        const response = await axios.get(url);
        const data = response.data;

        if (!data.items || data.items.length === 0) {
            return reply("No images found for your query.");
        }

        // Send images
        for (let i = 0; i < data.items.length; i++) {
            const imageUrl = data.items[i].link;

            // Download the image
            const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const buffer = Buffer.from(imageResponse.data, 'binary');

            // Send the image with a footer
            await conn.sendMessage(from, {
                image: buffer,
                caption: `
*Image ${i + 1} from your search! ⭐*

> FOR YOU BY 𝙳̷𝚊̷𝚛̷𝚔̷-𝙳̷𝙴̷𝚟̷🩸`
}, { quoted: mek });
}

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});