const moment = require('moment-timezone')
const PhoneNumber = require('awesome-phonenumber')
const fs = require('fs')
const fetch = require ('node-fetch')
const { pickRandom } = ('../lib/functions.js')

let menulist = async (m, { conn, usedPrefix, command, args }) => {
  const perintah = args[0] || 'tags';
  const tagCount = {};
  const tagHelpMapping = {};
  
  Object.keys(global.features)
    .filter(plugin => !plugin.disabled)
    .forEach(plugin => {
      const tagsArray = Array.isArray(global.features[plugin].tags)
        ? global.features[plugin].tags
        : [];

      if (tagsArray.length > 0) {
        const helpArray = Array.isArray(global.features[plugin].help)
          ? global.features[plugin].help
          : [global.features[plugin].help];

        tagsArray.forEach(tag => {
          if (tag) {
            if (tagCount[tag]) {
              tagCount[tag]++;
              tagHelpMapping[tag].push(...helpArray);
            } else {
              tagCount[tag] = 1;
              tagHelpMapping[tag] = [...helpArray];
            }
          }
        });
      }
    });

  let help = Object.values(global.features).filter(plugin => !plugin.disabled).map(plugin => {
    return {
      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
      enabled: !plugin.disabled,
    }
  });

  if (perintah === 'tags') {
    const daftarTag = Object.keys(tagCount)
    .sort()
      .join(await Func.Styles('\n> • ' + usedPrefix + command + '  '));
    const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let name = m.pushName || conn.getName(m.sender)
    let prn = thumb
    let list = `Hi @${m.sender.split("@")[0]} 👋️\n*I'am Noxz Cry , will help you to make your work easier*\n\n*\`CATEGORY LIST\`*\n> • ${usedPrefix + command} all\n> • .menu ${daftarTag}\n\n*❗ if you find a bug immediately contact the owner*`
 const pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");

if (global.menu === 'simple') {
  m.reply(list);
} else if (global.menu === 'doc') {
 conn.sendMessage(m.chat, {
  document: {
    url: "https://wa.me"
  },
  jpegThumbnail: await conn.resize(thumb, 300, 150),
caption: list,
fileName: await conn.msToDate(process.uptime() * 1000)
,contextInfo: {
mentionedJid: [m.sender],
isForwarded: true,
    businessMessageForwardInfo: {
            businessOwnerJid: bisnis
       }}},{quoted: m});
} else if (global.menu === 'gif') {
  conn.sendMessage(m.chat, { video: { url: gif }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: list,     contextInfo: {
  mentionedJid: [m.sender],
    externalAdReply: {
        title: `Noxz Cry (ver ${version})`,
        body: wm,
        thumbnailUrl: thumb,
        sourceUrl: "https://アキラ.site/",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }}, { quoted: m})
} else if (global.menu === 'payment' ) {
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 9999999999 * 1000,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: list,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
} else if (global.menu === 'edit') {
 const arr = [
 { text: `➳ *L*`, timeout: 200 },
{ text: `➳ *L O*`, timeout: 200 },
{ text: `➳ *L O A*`, timeout: 200 },
{ text: `➳ *L O A D*`, timeout: 200 },
{ text: `➳ *L O A D I*`, timeout: 200 },
{ text: `➳ *L O A D I N*`, timeout: 200 },
{ text: `➳ *L O A D I N G*`, timeout: 200 },
{ text: `➳ *L O A D I N G .*`, timeout: 200 },
{ text: `➳ *L O A D I N G . .*`, timeout: 200 },
{ text: `➳ *L O A D I N G . . .*`, timeout: 200 },
{ text: `➳ *L O A D I N G . .*`, timeout: 200 },
{ text: `➳ *L O A D I N G .*`, timeout: 200 },
{ text: `➳ *L O A D I N G*`, timeout: 200 },
{ text: `➳ *W E L C O M E  T O  K A G U Y A*`, timeout: 200 },
{ text: list, timeout: 200 },
  ];
  
let { key } = await conn.sendMessage(m.chat, {
  document: {
    url: "https://wa.me"
  },
  jpegThumbnail: await conn.resize(thumb, 300, 150),
  caption: `➳ *Please Waif...*`,
  fileName: await conn.msToDate(process.uptime() * 1000),
  contextInfo: {
  mentionedJid: [m.sender],
    isForwarded: true,
    businessMessageForwardInfo: {
      businessOwnerJid: bisnis
    }
  }
}, { quoted: m });
  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
  await conn.sendMessage(m.chat, {
    document: {
      url: "https://wa.me"
    },
    jpegThumbnail: await conn.resize(thumb, 300, 150),
    caption: arr[i].text,
    fileName: await conn.msToDate(process.uptime() * 1000),
    edit: key,
    contextInfo: {
    mentionedJid: [m.sender],
      isForwarded: true,
      businessMessageForwardInfo: {
        businessOwnerJid: bisnis
      }
    }
  }, { quoted: m });
}
} else {
  conn.sendMessage(m.chat, {
    text: list,
    contextInfo: {
    mentionedJid: [m.sender],
externalAdReply: {
        title: `Noxz Cry (ver ${version})`,
        body: wm,
        thumbnailUrl: thumb,
        sourceUrl: "https://アキラ.site/",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
  conn.sendFile(m.chat, './mp3/menu.mp3', '', null, m, true, null);
}
  } else if (tagCount[perintah]) {
    const daftarHelp = tagHelpMapping[perintah].map((helpItem, index) => {
      return `.${helpItem}`;
    }).join('\n> • '  + '');
    const list2 =  `*\`CATEGORY${perintah.toUpperCase()}\`*\n> • ${daftarHelp}\n\n${wm}`
     const pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");

if (global.menu === 'simple') {
  m.reply(list2);
} else if (global.menu === 'doc') {
 conn.sendMessage(m.chat, {
  document: {
    url: "https://wa.me"
  },
  jpegThumbnail: await conn.resize(thumb, 300, 150),
caption: list2,
fileName: await conn.msToDate(process.uptime() * 1000)
,contextInfo: {
mentionedJid: [m.sender],
isForwarded: true,
    businessMessageForwardInfo: {
            businessOwnerJid: bisnis
       }}},{quoted: m});
} else if (global.menu === 'gif') {
  conn.sendMessage(m.chat, { video: { url: gif }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: list2,     contextInfo: {
  mentionedJid: [m.sender],
externalAdReply: {
        title: `Noxz Cry (ver ${version})`,
        body: wm,
        thumbnailUrl: thumb,
        sourceUrl: "https://アキラ.site/",
        mediaType: 1,
        renderLargerThumbnail: true
      }
      }
    }, { quoted: m})
} else if (global.menu === 'payment' ) {
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 9999999999 * 1000,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: list2,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
} else if (global.menu === 'edit') {
 const arr = [
 { text: `➳ *L*`, timeout: 200 },
{ text: `➳ *L O*`, timeout: 200 },
{ text: `➳ *L O A*`, timeout: 200 },
{ text: `➳ *L O A D*`, timeout: 200 },
{ text: `➳ *L O A D I*`, timeout: 200 },
{ text: `➳ *L O A D I N*`, timeout: 200 },
{ text: `➳ *L O A D I N G*`, timeout: 200 },
{ text: `➳ *L O A D I N G .*`, timeout: 200 },
{ text: `➳ *L O A D I N G . .*`, timeout: 200 },
{ text: `➳ *L O A D I N G . . .*`, timeout: 200 },
{ text: `➳ *L O A D I N G . .*`, timeout: 200 },
{ text: `➳ *L O A D I N G .*`, timeout: 200 },
{ text: `➳ *L O A D I N G*`, timeout: 200 },
{ text: `➳ *W E L C O M E  T O  K A G U Y A*`, timeout: 200 },
{ text: list2, timeout: 200 },
  ];
  
let { key } = await conn.sendMessage(m.chat, {
  document: {
    url: "https://wa.me"
  },
  jpegThumbnail: await conn.resize(thumb, 300, 150),
  caption: `➳ *Please Waif...*`,
  fileName: await conn.msToDate(process.uptime() * 1000),
  contextInfo: {
  mentionedJid: [m.sender],
    isForwarded: true,
    businessMessageForwardInfo: {
      businessOwnerJid: bisnis
    }
  }
}, { quoted: m });
  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
  await conn.sendMessage(m.chat, {
    document: {
      url: "https://wa.me"
    },
    jpegThumbnail: await conn.resize(thumb, 300, 150),
    caption: arr[i].text,
    fileName: await conn.msToDate(process.uptime() * 1000),
    edit: key,
    contextInfo: {
    mentionedJid: [m.sender],
      isForwarded: true,
      businessMessageForwardInfo: {
        businessOwnerJid: bisnis
      }
    }
  }, { quoted: m });
}
} else {
  conn.sendMessage(m.chat, {
    text: list2,
    contextInfo: {
    mentionedJid: [m.sender],
      externalAdReply: {
        title: `Noxz Cry (ver ${version})`,
        body: wm,
        thumbnailUrl: thumb,
        sourceUrl: "https://アキラ.site/",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
  conn.sendFile(m.chat, './mp3/menu.mp3', '', null, m, true, null);
}
          } else if (perintah === 'all') {
    let name = m.pushName || conn.getName(m.sender)
    const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)
    const allTagsAndHelp = Object.keys(tagCount).map(tag => {
      const daftarHelp = tagHelpMapping[tag].map((helpItem, index) => {
        return `.${helpItem}`;
      }).join('\n> • '  + '');
   return `*\`CATEGORY ${tag.toUpperCase()}\`*\n> ${daftarHelp}`;

    }).join('\n\n');
    
let all = `HI @${m.sender.split("@")[0]} I am Noxz Cry, I am a WhatsApp assistant who can help you with certain needs\n\n` + "*`☢️PROFILE NOXZ☢️`*" + `\n> • Name: ${namebot}\n> • Version: ver ${version} ( Latest )\n> • Uptime: ${Func.toTime(process.uptime() * 1000)}\n> • usedPrefix: [ ${usedPrefix} ]\n> • Status: ${global.opts['self'] ? 'Self' : 'Public'} > • Clock: [ ${await DateNow(new Date)} ]\n> • Count user: ${Object.keys(db.data.users).length}\n> • Category Length: ${Object.keys(tagCount).length}\n\n` + allTagsAndHelp + "\n" + wm
;
    const pp = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1ecdb5a0aee62ef17d7fc.jpg");
if (global.menu === 'simple') {
  m.reply(all);
} else if (global.menu === 'doc') {
 conn.sendMessage(m.chat, {
  document: {
    url: "https://wa.me"
  },
  jpegThumbnail: await conn.resize(thumb, 300, 150),
caption: all,
fileName: await conn.msToDate(process.uptime() * 1000)
,contextInfo: {
mentionedJid: [m.sender],
isForwarded: true,
    businessMessageForwardInfo: {
            businessOwnerJid: bisnis
       }}},{quoted: m});
} else if (global.menu === 'gif') {
  conn.sendMessage(m.chat, { video: { url: gif }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: all,     contextInfo: {
  mentionedJid: [m.sender],
      externalAdReply: {
        title: `Noxz Cry (ver ${version})`,
        body: wm,
        thumbnailUrl: thumb,
        sourceUrl: "https://アキラ.site/",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }}, { quoted: m})
} else if (global.menu === 'payment' ) {
await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 9999999999 * 1000,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: all,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
} else if (global.menu === 'edit') {
 const arr = [
 { text: `➳ *L*`, timeout: 200 },
{ text: `➳ *L O*`, timeout: 200 },
{ text: `➳ *L O A*`, timeout: 200 },
{ text: `➳ *L O A D*`, timeout: 200 },
{ text: `➳ *L O A D I*`, timeout: 200 },
{ text: `➳ *L O A D I N*`, timeout: 200 },
{ text: `➳ *L O A D I N G*`, timeout: 200 },
{ text: `➳ *L O A D I N G .*`, timeout: 200 },
{ text: `➳ *L O A D I N G . .*`, timeout: 200 },
{ text: `➳ *L O A D I N G . . .*`, timeout: 200 },
{ text: `➳ *L O A D I N G . .*`, timeout: 200 },
{ text: `➳ *L O A D I N G .*`, timeout: 200 },
{ text: `➳ *L O A D I N G*`, timeout: 200 },
{ text: `➳ *W E L C O M E  T O  A K I R A A*`, timeout: 200 },
{ text: all, timeout: 200 },
  ];
  
let { key } = await conn.sendMessage(m.chat, {
  document: {
    url: "https://wa.me"
  },
  jpegThumbnail: await conn.resize(thumb, 300, 150),
  caption: `➳ *Please Waif...*`,
  fileName: await conn.msToDate(process.uptime() * 1000),
  contextInfo: {
  mentionedJid: [m.sender],
    isForwarded: true,
    businessMessageForwardInfo: {
      businessOwnerJid: bisnis
    }
  }
}, { quoted: m });
  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
  await conn.sendMessage(m.chat, {
    document: {
      url: "https://wa.me"
    },
    jpegThumbnail: await conn.resize(thumb, 300, 150),
    caption: arr[i].text,
    fileName: await conn.msToDate(process.uptime() * 1000),
    edit: key,
    contextInfo: {
     mentionedJid: [m.sender],
      isForwarded: true,
      businessMessageForwardInfo: {
        businessOwnerJid: bisnis
      }
    }
  }, { quoted: m });
}
} else {
  conn.sendMessage(m.chat, {
    text: all,
    contextInfo: {
    mentionedJid: [m.sender],
      externalAdReply: {
        title: `Noxz Cry (ver ${version})`,
        body: wm,
        thumbnailUrl: thumb,
        sourceUrl: "https://アキラ.site/",
        mediaType: 1,
        renderLargerThumbnail: true
      },
    }
  }, { quoted: m });
  conn.sendFile(m.chat, './mp3/menu.mp3', '', null, m, true, m);
}
  } else {
  await conn.reply(m.chat, `*Category Not found:*`,m);
  }
}

menulist.help = ['menu']
menulist.tags = ['main']
menulist.command = ['menu']
menulist.register = true
module.exports = menulist

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

 function DateNow(date) {
  let offset = 7;
  let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
  let jakartaTime = new Date(utc + (3600000 * offset));  
  let month = jakartaTime.getMonth() + 1;
  let day = jakartaTime.getDate();
  let year = jakartaTime.getFullYear();
  let hours = jakartaTime.getHours() < 10 ? "0" + jakartaTime.getHours() : jakartaTime.getHours();
  let minutes = jakartaTime.getMinutes() < 10 ? "0" + jakartaTime.getMinutes() : jakartaTime.getMinutes();
  let seconds = jakartaTime.getSeconds() < 10 ? "0" + jakartaTime.getSeconds() : jakartaTime.getSeconds();
 
  return `*${hours}:${minutes}:${seconds}*`;
};