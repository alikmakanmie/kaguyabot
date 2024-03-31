
let handler = async (m, {
    text,
    usedPrefix,
    command
}) => {
    if (!text) throw `*• Example:* ${usedPrefix + command} Golang`
    await m.reply(wait)

    try {
        let item = await Scraper.Api.Wikipedia(text)
        let caption = `${item.title.toUpperCase()}
*Content:* ${item.content || 'Not known'}
*Information:* ${item.infoTable || 'Not known'}
`
        await conn.sendFile(m.chat, item.image, "", caption, m)
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ['wikipedia'].map(v => v + ' *[query]*')
handler.tags = ['info','internet']
handler.command = /^(wiki|wikipedia)$/i

module.exports = handler