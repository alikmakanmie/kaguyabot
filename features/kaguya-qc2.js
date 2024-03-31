/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

const { sticker } = require('../function/sticker.js');
const axios = require('axios');

let handler = async (m, { conn, text }) => {
  try {
    const q = m.quoted || m;
    const mime = q.mtype || (q.msg || q).mimetype || '';
    const json = { type: "quote", format: "png", backgroundColor: "#FFFFFF", width: 512, height: 768, scale: 2, messages: [{ entities: [], avatar: true, from: { id: 1, name: await conn.getName(m.sender), photo: { url: await conn.profilePictureUrl(m.sender, "image").catch(_ => logo) } }, text: text || '', replyMessage: text && !m.quoted ? undefined : { name: await conn.getName(q.sender), text: q.text ? q.text : (q.caption || ''), media: q.text ? undefined : { url: await (q.download ? q.download() : Promise.resolve(undefined)) }, chatId: m.chat } }] };
    let buffer = await Quotly(json);
    if (!buffer) throw "Error generating quote image.";
    let stick = await sticker(buffer, false, 'Quotly', 'Quotly Pack');
    if (!stick) throw "Error creating sticker.";
    await conn.sendFile(m.chat, stick, 'Quotly.webp', '', m);
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['qc2'].map(a => a + ' *[text or reply a message]*');
handler.tags = ['sticker'];
handler.command = /^(qc2)$/i;
module.exports = handler;

async function Quotly(data) {
  try {
    const response = await axios.post("https://qc.sazumi.moe/generate", data, { headers: { "Content-Type": "application/json" } });
    const buffer = Buffer.from(response.data.result.image, "base64");
    return buffer;
  } catch (e) {
    console.error(e);
    return null;
  }
}