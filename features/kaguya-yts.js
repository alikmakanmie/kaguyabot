/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let yts = require('yt-search')
let handler = async (m, { usedPrefix, text, command }) => {
  if (!text) throw `*• Example:* ${usedPrefix + command} Kaguya shinomiya`
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n_____________________________\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' *[query]*')
handler.tags = ['tools', 'internet', 'downloader']
handler.command = /^yts(earch)?$/i

module.exports = handler