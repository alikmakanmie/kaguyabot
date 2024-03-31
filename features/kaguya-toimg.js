/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) throw ` *${usedPrefix + command}*`
  let mime = m.quoted.mimetype || ''
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${usedPrefix + command}*`
  let media = await m.quoted.download()

  await conn.sendMessage(m.chat,{ image: media,caption:'*DONE*'},{quoted: m })
}
handler.help = ['toimg']
handler.tags = ['tools']
handler.command = ['toimg']
module.exports = handler