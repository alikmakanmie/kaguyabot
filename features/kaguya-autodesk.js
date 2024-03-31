/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let handler = m => m
handler.before = async (m) => {
 const jid = "120363214968436726@g.us"

 let desk = `Wecome to *🔴 KAGUYA SAMA || GROUP INFO*

*• Status Bot:* ${opts["self"] ? "🔴" : "🟢"}

*[ INFORMATION BOT ]*
*• Name:* ${namebot}
*• Version:* ${version} *( Latest )*
*• Total Features:* ${Object.values(features).filter(v => v.help && !v.disabled).map(v => v.help).flat(1).length}
*• Baileys Used:* @whiskeysockect/baileys
*• Creator:* LT SYAII

_✅ Kalo Mau ambil script ketik *.sendsc*, Fitur bot & deskripsi grup ini di update sekarang realtime_

*• Link group:*
${sgc}`
conn.groupUpdateDescription(jid, desk)
conn.groupUpdateSubject(jid, `Kaguga sama || Group Chat\n• Status bot: ${opts["self"] ? "offline!" : "online!"}`)

}

module.exports = handler