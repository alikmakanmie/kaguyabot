/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan Pertanyaan\n*Contoh:* ${usedPrefix + command} My name is Jimmy`;
  try {
    let a = await fetch(`https://api.lolhuman.xyz/api/translate/auto/en?apikey=Akiraa&text=${text}`);
    let result = await a.json();
    let tanya = await (await Scraper["Gpt"].Lbbai(result.result.translated,"You are Mrbeast, express your nature with *bold text*, play your role as Mrbeast")).answer
    let beast = await Func.fetchJson(`https://itzpire.site/tools/tts-beast?text=${tanya}`);
    conn.sendFile(m.chat, beast.result, '', '', m, true, {
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: 'VOICE MR BEAST',
          mediaType: 1,
          body: 'voice ai Mr. Beast',
          thumbnailUrl: 'https://telegra.ph/file/3abb987c5878aa1287f90.jpg',
          renderLargerThumbnail: true,
          sourceUrl: null
        }
      }
    });
  } catch (err) {
    m.reply(`Gunakan bahasa yang sopan`);
  }
}

handler.command = handler.help = ["mrbeast", "vn-beast"];
handler.tags = ["ai"];
module.exports = handler;