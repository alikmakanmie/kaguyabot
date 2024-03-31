/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    try {
        const res = await conn.groupAcceptInvite(code)
    } catch (e) {
        throw `Error`
    } finally {
        m.reply(`Berhasil join grup ${(await conn.groupGetInviteInfo(code)).id}`)
    }
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['info']
handler.command = /^join$/i
handler.premium = true

module.exports = handler