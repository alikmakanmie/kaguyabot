/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let handler = async (m, { conn, command }) => {
  try {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
    else who = m.quoted.sender ? m.quoted.sender : m.sender;
    let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
    let pp = await (await fetch(ppUrl)).buffer();
    let user = global.db.data.users[who];
    let username = user.name;
  
    let api = `wa.me/${who.split('@')[0]}`;

    let limit = user.limit || 0;
    let balance = user.money || 0;
    let level = user.level || 0;
    let exp = user.exp || 0;
    let age = user.age || 0;
    let isPremium = user.premium ? "Premium" : "Not a premium";
    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "there is no time information";

    let caption = `
•  *P R O F I L E*

┌  ◦  *Name* : ${username}
│  ◦  *Api* : ${api}
│  ◦  *Limit* : ${limit}
│  ◦  *money* : ${balance}
│  ◦  *Level* : ${level}
│  ◦  *Exp* : ${exp}
│  ◦  *Premium* : ${isPremium}
│  ◦  *Premium Expired* : ${premiumExpired}
└  ◦  *Age* : ${age}
    `.trim();

    conn.sendFile(m.chat, pp, "", caption, m, { contextInfo:{ mentionedJid: [m.sender] }});
  } catch {
    let sender = m.sender;
    let ppUrl = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/avatar_contact.png");
    let pp = await (await fetch(ppUrl)).buffer();
    let user = global.db.data.users[sender];
    let username = user.name;

    let api = `wa.me/${sender.split('@')[0]}`;

    let limit = user.limit || 0;
    let balance = user.money || 0;
    let level = user.level || 0;
    let exp = user.exp || 0;
    let age = user.age || 0;
    let isPremium = user.premium ? "Premium" : "Not a premium";
    let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "there is no time information";

    let caption = `
•  *P R O F I L E*

┌  ◦  *Name* : ${username}
│  ◦  *Api* : ${api}
│  ◦  *Limit* : ${limit}
│  ◦  *money* : ${balance}
│  ◦  *Level* : ${level}
│  ◦  *Exp* : ${exp}
│  ◦  *Premium* : ${isPremium}
│  ◦  *Premium Expired* : ${premiumExpired}
└  ◦  *Age* : ${age}
    `.trim();

    conn.sendFile(m.chat, pp, '', caption, m,{ contextInfo:{ mentionedJid: [m.sender] }});
  }
};

handler.command = /^profile$/i;
handler.help = ['profile'].map(a => a + ' *[@user]*');
handler.tags = ['rpg','main'];
handler.register = true;

module.exports = handler;