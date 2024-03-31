let handler = async (m, { conn }) => {
const Script =`*• I N F O   S C R I P T :*\n• ${Func.texted("monospace", `Script ini gratis untuk di gunakan jadi jangan di perjualbelikan secara sepihak`)}\n*┌  ◦  Name:* Kaguya sama\n*│  ◦  Version:* ${version} *( Latest )*\n*│  ◦  Create at:* 5 Feb 2024\n*│  ◦ Link Download:* https://chat.whatsapp.com/ImWveF0CLnBA4HrOe4QJM1\n*└  ◦  Developer:* @LT SYAII *( LEXIC-TEAM )*\n\n*[ ✓ ] Untuk mendapatkan info lebih lanjut tentang update Script ini bisa kunjungi saluran kami:*\nhttps://whatsapp.com/channel/0029VaOPaL6LI8YQysQG2D1p`

conn.reply(m.chat, Script, m, {
        contextInfo: {
            mentionedJid: [],
            groupMentions: [],
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363144038483540@newsletter',
                newsletterName: "[ ✓ ] Script free for all",
                serverMessageId: -1
            },
            businessMessageForwardInfo: {
                businessOwnerJid: conn.user.jid
            },
            forwardingScore: 256,
externalAdReply: {
        title: `Kaguya Sama (ver ${version})`,
        body: wm,
        thumbnailUrl: "https://telegra.ph/file/831216e9d9382b222a7be.png",
        sourceUrl: "https://アキラ.site/",
        mediaType: 1,
        renderLargerThumbnail: true
          }
        }
    })
}
handler.help = ["Script","sc","sourcecode"].map(a => a + ' *[get script here]*')
handler.tags = ["info","main"]
handler.command = ["Script","sc","sourcecode"]

module.exports = handler