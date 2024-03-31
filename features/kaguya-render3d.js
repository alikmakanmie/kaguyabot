/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*• Example:* ${usedPrefix + command} cat`
m.reply(wait)
try {
let gpt = await (await fetch(`https://itzpire.site/ai/render3d?prompt=${text}`)).json()
conn.sendFile(m.chat, gpt.result,null,"*[ RENDER - 3D ]* " + '\n*• Prompt:* ' + text)
 } catch(e) {
 throw "`*Command Not Responded*`"
}
}
handler.help = ["render3d"]
handler.tags = ["ai"]
handler.command = ["render3d"]
module.exports = handler