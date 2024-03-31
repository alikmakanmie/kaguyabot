let handler = async (m, { conn, text, usedPrefix, command }) => {
  m.reply(wait)
let cerpen = await Scraper.Random.randomCerpen()
let { status, judul, penulis, sumber, cerita} = cerpen
if (status !== true) throw `*cerpen not found*`
let hasil = `*± R A N D O M   C E R P E N*
================================
*°Title:* ${title}
*°Source:* ${source}
*°Author:* ${author}
================================
${cerita}
`
conn.reply(m.chat, hasil, m, adReply)
}
handler.command = handler.help = ["cerpen"].map(a => a + ' *[random cerpen]*')
handler.tags = ["fun"]
handler.limit = true
module.exports = handler