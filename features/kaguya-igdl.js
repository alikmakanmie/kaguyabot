/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

const igdl = require("../scrape/Instagram")
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Example:* ${usedPrefix + command} https://www.instagram.com/p/C0JrEaLBFq9/?igshid=MzY1NDJmNzMyNQ==`
m.reply(wait)
try {
            const url = text;
            let res = await igdl(text)  
            if (!res.data || res.data.length === 0) throw "Cannot find media in the link";
         
          for (let i of res.data) { 
                      conn.sendFile(m.chat, i, '', '*I N S T A G R A M   D O W N L O A D E R*', m);
   }
} catch (e) {
m.reply(eror)
}
}
handler.command = handler.help = ["ig","igdl", "Instagram"].map(a => a + ' *[url Instagram]*')
handler.command = ["ig","igdl", "Instagram"]
handler.tags = ["downloader"]

module.exports = handler