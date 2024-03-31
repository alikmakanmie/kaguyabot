const uploadImage = require('../function/uploadFile')
const ocrapi = require("ocr-space-api-wrapper")
const { MessageType } = require('@whiskeysockets/baileys')
let handler = async (m, { conn, text, usedPrefix, command }) => {
      let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `*• Example:* ${usedPrefix + command} *[reply/send media]*`
    let img = await q.download()
    let url = await uploadImage(img)
    let hasil = await ocrapi.ocrSpace(url)
 await m.reply(hasil.ParsedResults[0].ParsedText)    
}

handler.help = ['ocr', 'totext'].map(a => a + ' *[reply/send media]*')
handler.tags = ['tools']
handler.command = /^(ocr|totext)$/i
handler.limit = true

module.exports = handler