/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

const fs = require('fs');
const archiver = require('archiver');
const path = require('path');

let handler = async (m, { conn, text }) => {
let a = (await conn.groupMetadata("120363214968436726@g.us")).participants.map(a => a.id)
if (!a.includes(m.sender)) throw `*✓ Mau sc ini?, Join dulu Baru pakai fitur ini*\n\n*• Link group:* https://chat.whatsapp.com/` + await conn.groupInviteCode("120363214968436726@g.us") 
  m.reply(wait);
  let backupName = `backup_${new Date().toISOString().replace(/:/g, '-')}.zip`;
  let output = fs.createWriteStream(backupName);
  let archive = archiver('zip', { zlib: { level: 9 } });
  output.on('close', async function () {
    let caption = `*[ SCRIPT - BOT ]*\n\n_Nih Script Kaguya nya *${m.name}*, kalo mau di jual minimal tambahin 5-10 fitur dulu. <⁠(⁠￣⁠︶⁠￣⁠)⁠>_\n\n*• Subcribe YouTube:* LT SYAII`;
    let a = await fs.promises.readFile(`./${backupName}`);
 conn.sendMessage(m.sender, {
document: a,
fileName: "[!] KAGUYA SAMA.zip",
mimetype: "application/zip",
caption: caption,
contextInfo: {
externalAdReply: {  
title: '[ SC FREE BUAT LU ]',
body: '',
thumbnailUrl: icon,
sourceUrl: null,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fkontak })
await fs.promises.unlink(`./${backupName}`);
   if (m.isGroup) return m.reply('Sukses Mengirimkan script bot ke nomor tujuan ✅');
  });

  archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
      console.warn(err);
    } else {
      throw err;
    }
  });

  archive.on('error', function (err) {
    throw err;
  });

  archive.pipe(output);
  archive.glob('**/*', {
    cwd: path.resolve(__dirname, '../'),
    ignore: ['node_modules/**', 'tmp/**', 'KaguyaSs/**', '**.pm2/**', '.npm/**', backupName]
  });
  archive.finalize();
}

handler.help = ['ambilsc'].map(a => a + " *[get File script]*");
handler.tags = ['info'];
handler.command = /^sendsc$/i;

module.exports = handler;