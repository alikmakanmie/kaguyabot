/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `*• Example:* ${usedPrefix + command} https://tiktok.com/xxxx`
 if (text.match('^(?:https?:\/\/)?(?:www\.)?(?:tiktok\.com\/(?:v|@)?|vt\.tiktok\.com\/)(?:[^\s/]+\/+)*(?:@[\w.-]+\/+)?([\w.-]+)(?:\/+)?$')) throw `*❕ Invalid Tiktok Url*`
 try {
 let json = await Scraper.Download.tiktok(text)
 let lexic = `Username: *${json.author.name}*\nDescription: *${json.title}*`
 if (json.images) {
 let urls = json.images.map(item => item.url);
 let array = urls;
 for (let b of array) {
 conn.sendMessage(m.chat, {
 image: {
 url: b
 },
 caption: lexic
 },{quoted: m})
 }
 }
 if (json.video) {
 await conn.sendFile(m.chat, json.video.noWatermark, 'tiktok.mp4', lexic, m)
conn.sendMessage(m.chat,{ audio: { url: json.music.play_url }, mimetype: "audio/mpeg", contextInfo: {
    mentionedJid: [],
    groupMentions: [],
    isForwarded: true,
    businessMessageForwardInfo: { businessOwnerJid: conn.user.jid },
    forwardingScore: 256,
    externalAdReply: {
      title: json.author.name,
      body: json.author.signature,
      thumbnailUrl: json.author.avatar,
      sourceUrl: text,
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
})
 }
 } catch (err) {
 try {
 let json = await Scraper.Download.tiktok(text)
 let lexic = `Description: *${json.description}*`
 await conn.sendFile(m.chat, json.play, 'tiktok.mp4', lexic, m)
 } catch (err) {
 throw 'Terjadi kesalahan saat memproses permintaan'
 }
 }
}

handler.help = ['titkok','tt','tiktoknowm'].map(v => v + ' *[url tiktok]*')
handler.tags = ['downloader']
handler.command = /^(tiktok|tt|ttdl|ttnowm)$/i

module.exports = handler