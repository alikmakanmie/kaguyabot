const uploadImage = require('../function/uploadFile')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw  `• *Example :* ${usedPrefix + command} *[reply/send media]*`
    if (!text) throw `• *Example :* ${usedPrefix + command} *[Top Text|Bottom Text]*`
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    conn.sendImageAsSticker(m.chat, meme, m, { packname: packname, author: author })

}
handler.help = ['stickermeme'].map(a => a + ' *[Top|Bottom text]*')
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?me(me)?)$/i

handler.limit = false

module.exports = handler