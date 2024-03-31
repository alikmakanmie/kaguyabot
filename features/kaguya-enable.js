/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let handler = async (m, {
	conn,
	usedPrefix,
	command,
	args,
	isOwner,
	isAdmin,
	isROwner
}) => {
	let isEnable = /true|enable|(turn)?on|1/i.test(command)
	let chat = global.db.data.chats[m.chat]
	let user = global.db.data.users[m.sender]
	let type = (args[0] || '').toLowerCase()
	let isAll = false
	let isUser = false
	switch (type) {
		case 'welcome':
			if (!m.isGroup) {
				if (!isOwner) {
					global.dfail('group', m, conn)
					throw false
				}
			} else if (!isAdmin) {
				global.dfail('admin', m, conn)
				throw false
			}
			chat.welcome = isEnable
			break
		case 'antilink':
			if (m.isGroup) {
				if (!(isAdmin || isOwner)) {
					global.dfail('admin', m, conn)
					throw false
				}
			}
			chat.antiLink = isEnable
			break
		case 'antisticker':
			if (m.isGroup) {
				if (!(isAdmin || isOwner)) {
					global.dfail('admin', m, conn)
					throw false
				}
			}
			chat.antiSticker = isEnable
			break
case 'antipoto':
			if (m.isGroup) {
				if (!(isAdmin || isOwner)) {
					global.dfail('admin', m, conn)
					throw false
				}
			}
			chat.antiFoto = isEnable
			break
		case 'autosticker':
			if (m.isGroup) {
				if (!(isAdmin || isOwner)) {
					global.dfail('admin', m, conn)
					throw false
				}
			}
			chat.stiker = isEnable
			break
		case 'toxic':
			if (m.isGroup) {
				if (!(isAdmin || isOwner)) {
					global.dfail('admin', m, conn)
					throw false
				}
			}
			chat.antiToxic = !isEnable
			break
		case 'autolevelup':
			isUser = true
			user.autolevelup = isEnable
			break
           case 'antibot':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBot = isEnable
       break		
		case 'autoread':
			isAll = true
			if (!isROwner) {
				global.dfail('rowner', m, conn)
				throw false
			}
			global.opts['autoread'] = isEnable
			break
		case 'pconly':
		case 'privateonly':
			isAll = true
			if (!isROwner) {
				global.dfail('rowner', m, conn)
				throw false
			}
			global.opts['pconly'] = isEnable
			break
		case 'gconly':
		case 'grouponly':
			isAll = true
			if (!isROwner) {
				global.dfail('rowner', m, conn)
				throw false
			}
			global.opts['gconly'] = isEnable
			break
		case 'swonly':
		case 'statusonly':
			isAll = true
			if (!isROwner) {
				global.dfail('rowner', m, conn)
				throw false
			}
			global.opts['swonly'] = isEnable
			break
		default:
			if (!/[01]/.test(command)) return m.reply(Func.texted("monospace",`
•  List Option:

┌  ◦  welcome
│  ◦  antilink
│  ◦  antipoto
│  ◦  antisticker
│  ◦  autosticker
│  ◦  autoread
│  ◦  pconly
│  ◦  gconly
└  ◦  swonly

•  Example:

┌  ◦  ${usedPrefix}enable welcome
└  ◦  ${usedPrefix}disable welcome
`))
			throw false
	}
	m.reply(`✅ *${type}* succeeded in *${isEnable ? 'on' : 'off'}* ${isAll ? 'for this bot' : isUser ? '' : 'for this chat'}
`.trim())
}
handler.help = ['en', 'dis'].map(v => v + 'able *[options]*')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

module.exports = handler