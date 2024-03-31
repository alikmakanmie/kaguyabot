/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `• *Example:* ${usedPrefix + command} halo`
m.reply(wait)
  try {
let gemini = await Func.fetchJson(`https://gmni.vercel.app/api/ask?text=${text}`)
m.reply(gemini.text)
} catch (e) {
m.reply(eror)
   }
}
handler.help = ["gemini"].map(a => a + " *[query]*")
handler.tags = ["ai"]
handler.command = ["gemini"]
module.exports = handler