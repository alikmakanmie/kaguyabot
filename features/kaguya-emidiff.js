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
let gpt = await (await fetch(`https://itzpire.site/ai/emi?prompt=${text}`)).json()
conn.sendFile(m.chat, gpt.result,null,"*[ EMI - DIFFUSION ]* " + '\n*• Prompt:* ' + text)
 } catch(e) {
 throw "`*Command Not Responded*`"
}
}
handler.help = ["emidiff"]
handler.tags = ["ai"]
handler.command = ["emidiff"]
module.exports = handler