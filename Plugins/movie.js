/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   🛠️ 𝘿𝘼𝙑𝙄𝘿 𝙏𝙀𝘾𝙃 𝙄𝙉𝘾 - 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘾𝙊𝘿𝙀 🛠️
   
   📌 NOTE:
   If you use or copy any part of this code,
   you MUST give proper credit!

   📞 Contact: +241 05730123
   🌐 GitHub: https://github.com/DavidTechInc

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

const axios = require('axios');
const { cmd } = require('../command');
const config = require('../config'); // Ensure your API key is in config

// Command to fetch movie details
cmd({
    pattern: "movieinfo",
    desc: "Fetch detailed information about a movie.",
    category: "utility",
    react: "🎞️",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const movieName = args.join(' ');
        if (!movieName) {
            return reply("📽️ Please provide the name of the movie.");
        }

        const apiUrl = `http://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${config.OMDB_API_KEY}`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        if (data.Response === "False") {
            return reply("! Movie not found.");
        }

const movieInfo = `
╔══════════════════════════╗
║      🎬  MOVIE INFO      ║
╚══════════════════════════╝

🎞️  𝙏𝙞𝙩𝙡𝙚      : ${data.Title}
📅  𝙔𝙚𝙖𝙧       : ${data.Year}
🔞  𝙍𝙖𝙩𝙚𝙙      : ${data.Rated}
📆  𝙍𝙚𝙡𝙚𝙖𝙨𝙚𝙙  : ${data.Released}
⏱️  𝙍𝙪𝙣𝙩𝙞𝙢𝙚    : ${data.Runtime}
🎭  𝙂𝙚𝙣𝙧𝙚     : ${data.Genre}
🎬  𝘿𝙞𝙧𝙚𝙘𝙩𝙤𝙧  : ${data.Director}
✍️  𝙒𝙧𝙞𝙩𝙚𝙧    : ${data.Writer}
🎭  𝘼𝙘𝙩𝙤𝙧𝙨    : ${data.Actors}
🗣️  𝙇𝙖𝙣𝙜𝙪𝙖𝙜𝙚 : ${data.Language}
🌍  𝘾𝙤𝙪𝙣𝙩𝙧𝙮  : ${data.Country}
🏆  𝘼𝙬𝙖𝙧𝙙𝙨   : ${data.Awards}
⭐  𝙄𝙈𝘿𝘽 𝙍𝙖𝙩𝙞𝙣𝙜: ${data.imdbRating}

━━━━━━━━━━━━━━━━━━━━━━━
> *POWERED BY 𝙳̷𝚊̷𝚛̷𝚔̷-𝙳̷𝙴̷𝚟̷🩸*
`;


        const imageUrl = data.Poster && data.Poster !== 'N/A' ? data.Poster : config.ALIVE_IMG;

        await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: `${movieInfo}\n> By SUKUNA-MD`
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`❌ Error: ${e.message}`);
    }
});
