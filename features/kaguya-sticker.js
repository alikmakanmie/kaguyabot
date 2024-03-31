/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

const { sticker5 } = require('../function/sticker')
const uploadFile = require('../function/uploadFile')
const uploadImage = require('../function/uploadImage')
let { webp2png } = require('../function/webp2mp4')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('*❕ Max 10 seconds!*')
      let img = await q.download()
      if (!img) throw `Reply/send media with caption:\n*• Example:* ${usedPrefix + command}`
      let out
      try {
        if (/webp/g.test(mime)) out = await webp2png(img)
        else if (/image/g.test(mime)) out = await uploadImage(img)
        else if (/video/g.test(mime)) out = await uploadFile(img)
        if (!isUrl(out)) out = await uploadImage(img)
        stiker = await sticker5(false, out, author)
      } catch (e) {
        console.error(e)
        if (!stiker) stiker = await sticker5(img, false, author)
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker5(false, args[0], global.packname, global.author)
      else return m.reply('*Url Invalid!*')
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
    conn.sendPresenceUpdate("composing", m.chat)
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    else return conn.reply(m.chat, '*❗ Reply/send Media*', m)
  }
}
handler.help = ['sctiker','s', 'stikergif'].map(a => a + ' *[reply/send media]*')
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

handler.limit = true

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}