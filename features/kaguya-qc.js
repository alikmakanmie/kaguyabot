/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

const { sticker5 } = require('../function/sticker.js');
const axios = require('axios');
const uploadFile = require("../function/uploadFile.js");

const handler = async (m, { conn, text }) => {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    let reply;

    if (text && m.quoted) {
        if (m.quoted.sender) {
            reply = {
                "name": await conn.getName(m.quoted.sender),
                "text": m.quoted.text || '',
                "chatId": m.chat.split('@')[0],
            };
        }
    } else if (text && !m.quoted) {
        reply = {};
    } else if (!text && m.quoted) {
        if (m.quoted.text) {
            text = m.quoted.text || '';
        }
        reply = {};
    } else {
        throw "*• Example:* .qc *[text or reply message]*";
    }

    const img = await q.download?.();

    const pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/320b066dc81928b782c7b.png');

    if (mime) {
        const obj = {
            type: "quote",
            format: "png",
            backgroundColor: "#FFFFFF",
            width: 512,
            height: 768,
            scale: 2,
            "messages": [{
                "entities": [],
                "media": {
                    "url": await uploadFile(img)
                },
                avatar: true,
                from: {
                    id: 1,
                    name: await conn.getName(m.sender),
                    photo: {
                        url: pp
                    }
                },
                text: text || '',
                replyMessage: reply
            }]
        };

        const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const buffer = Buffer.from(json.data.result.image, 'base64');
        const stickerResult = await sticker5(buffer, false, global.packname, global.author);

        if (stickerResult) return conn.sendFile(m.chat, stickerResult, 'Quotly.webp', '', m);
    } else {
        const obj = {
            type: "quote",
            format: "png",
            backgroundColor: "#FFFFFF",
            width: 512,
            height: 768,
            scale: 2,
            "messages": [{
                "entities": [],
                avatar: true,
                from: {
                    id: 1,
                    name: await conn.getName(m.sender),
                    photo: {
                        url: pp
                    }
                },
                text: text || '',
                replyMessage: reply
            }]
        };

        const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const buffer = Buffer.from(json.data.result.image, 'base64');
        const stickerResult = await sticker5(buffer, false, global.packname, global.author);

        if (stickerResult) return conn.sendFile(m.chat, stickerResult, 'Quotly.webp', '', m);
    }
};

handler.help = ['qc'].map(a => a + ' *[text or reply message]*');
handler.tags = ['sticker'];
handler.command = /^(qc|quotely)$/i;

module.exports = handler;