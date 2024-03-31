/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

const { createCanvas, loadImage, registerFont } = require('canvas');
let handler = async (m, { conn }) => {
  let wm = global.wm
  let _uptime = process.uptime() * 1000
  let uptimex = clockString(_uptime)
  let nomor = conn.user.jid
  let name = conn.getName(conn.user.jid, 'image')
  let pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/1a2ce69ce7445f80d1421.png");
  let fkontak = {
    key: {
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "Halo"
    },
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:Bot\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    participant: "0@s.whatsapp.net"
  };
  const text = 'Kaguya';
const blurRadius = 90;
const font = 'Font Family Name'; // Ganti dengan nama font yang sudah didaftarkan
const fontSize = 80;
const width = 500;
const height = 200;
const backgroundImageUrl = thumb
const avatarImageUrl = pp
let photo = await backgroundText(text, blurRadius, font, fontSize, width, height, backgroundImageUrl, avatarImageUrl)
  let akiraa = `┌  ◦ *Bot Info:*
│  ◦ *Name:* ${namebot}
│  ◦ *Links:* wa.me/${conn.user.jid.split("@")[0]}
│  ◦ *Modes:* ${global.opts['self'] ? 'Self' : 'Public'}
│  ◦ *Active:* ${Func.toTime(process.uptime() * 1000)}
│  ◦ *User:* ${Object.keys(global.db.data.users).length}
│  ◦ *Banned Users:* ${Object.values(global.db.data.users).filter(user => user.banned).length}
│  ◦ *Total Messages Sent:* *${Object.values(global.db.data.users).filter(user => user.banned).length}*
│  ◦ *Total Features:* ${Object.values(features).filter(v => v.help && !v.disabled).map(v => v.help).flat(1).length}
└——`;
await conn.sendMessage(m.chat, { image: photo, caption: akiraa,
    contextInfo: {
        forwardingScore: 9999,
        isForwarded: true,
        businessMessageForwardInfo: {
            businessOwnerJid: conn.user.jid
        }
    }
},{quoted: fkontak});
}

handler.help = ['infobot'].map(a => a + ' *[detail info from bot]*')
handler.tags = ['main']
handler.command = /^(infobot)$/i
handler.limit = false

module.exports = handler

function clockString(ms) {
  let days = Math.floor(ms / (24 * 60 * 60 * 1000))
  let daysms = ms % (24 * 60 * 60 * 1000)
  let hours = Math.floor((daysms) / (60 * 60 * 1000))
  let hoursms = ms % (60 * 60 * 1000)
  let minutes = Math.floor((hoursms) / (60 * 1000))
  let minutesms = ms % (60 * 1000)
  let sec = Math.floor((minutesms) / 1000)
  return `${days} Hari ${hours} Jam ${minutes} Menit ${sec} Detik`
}

// Register the font
registerFont('./src/font/212BabyGirl.otf', { family: 'Font Family Name' });

async function createCircularAvatar(avatarUrl, size) {
  // Membuat canvas
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Memuat gambar avatar dari URL
  const avatarImage = await loadImage(avatarUrl);

  // Menggambar avatar dalam bentuk bulat dengan garis tepi
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.clip();

  // Menggambar gambar avatar
  ctx.drawImage(avatarImage, 0, 0, size, size);

  // Menambahkan garis tepi pada avatar
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Mengembalikan gambar avatar yang sudah dibentuk bulat dengan garis tepi
  return canvas;
}

async function backgroundText(text, blurRadius, font, fontSize, width, height, imageUrl, avatarUrl) {
  // Membuat canvas
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Memuat gambar latar belakang dari URL
  const backgroundImage = await loadImage(imageUrl);

  // Menggambar gambar latar belakang
  ctx.drawImage(backgroundImage, 0, 0, width, height);

  // Menambahkan efek blur
  ctx.filter = `blur(${blurRadius}px)`;

  // Menambahkan teks ke canvas dengan garis tepi
  ctx.font = `${fontSize}px ${font}`;
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#000';
  ctx.strokeText(text, width / 2, height / 2);
  ctx.fillText(text, width / 2, height / 2);

  // Menghapus efek blur
  ctx.filter = 'none';

  // Memuat dan membuat avatar dalam bentuk bulat dengan garis tepi
  const avatarSize = 100;
  const avatarImage = await createCircularAvatar(avatarUrl, avatarSize);

  // Menggambar avatar di tengah canvas
  const avatarX = (width - avatarSize) / 2;
  const avatarY = (height - avatarSize) / 2;
  ctx.drawImage(avatarImage, avatarX, avatarY, avatarSize, avatarSize);

  // Mengembalikan gambar hasil
  return canvas.toBuffer();
}