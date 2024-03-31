/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

const axios = require('axios');

let handler = async (m, { conn, text }) => {
 conn.akira = conn.akira ? conn.akira : {};

 if (!text) throw `*• Example:* .akiraa *[on/off]*`;

 if (text == "on") {
 conn.akira[m.sender] = {
 pesan: []
 }
 m.reply("[ ✓ ] Success create session chat")
 } else if (text == "off") {
 delete conn.akira[m.sender]
 m.reply("[ ✓ ] Success delete session chat")
 }
}

handler.before = async (m, { conn }) => {
conn.akira = conn.akira ? conn.akira : {};
 if (m.isBaileys && m.fromMe) return;
 if (!m.text) return
 if (!conn.akira[m.sender]) return;

 if (
 m.text.startsWith(".") ||
 m.text.startsWith("#") ||
 m.text.startsWith("!") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return

 if (conn.akira[m.sender] && m.text) {
 let name = conn.getName(m.sender)
 await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});
 const messages = [
 ...conn.akira[m.sender].pesan,
 { role: "system", content: `Kamu bernama akiraa berumur 15 kamu adalah asistennya yang dapat menjawab segala pertanyaan, gunakan bahasa gaul lu gw saat menjawab, gunakan emoji pada saat ingin menjawab pertanyaan, kamu memiliki sifat cuek namun feminin seperti seorang wanita, kamu memiliki pacar bernama syaii tercinta, jika ada pertanyaan berkait tentang codingan kamu jawab penolakan, nama lawan bicara mu adalah *${name}*"` },
 { role: "user", content: m.text }
 ];
 try {
 const response = await axios.post("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
 messages
 });

 const responseData = response.data;
 const hasil = responseData;
 await conn.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
 m.reply(hasil.answer)
 conn.akira[m.sender].pesan = messages
 } catch (error) {
 console.error("Error fetching data:", error);
 throw error;
 }
 }
}

handler.command = ['akiraa'];
handler.tags = ["ai"]
handler.help = ['akiraa'].map(a => a + " *[on/off]*");

module.exports = handler