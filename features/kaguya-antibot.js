/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

async function before(m, { isAdmin, isBotAdmin }) {
	let chat = global.db.data.chats[m.chat];
	if (chat.antiBot) {
		if (m.isBaileys === true) {
			if (m.fromMe || !isBotAdmin) {		 
			} else {
				conn.sendMessage(m.chat, { text: `*[ 🔴 ANOTHER BOT DETECTED ]*\n_Maaf @${m.sender.split("@")[0]}, kamu akan segera kick_` });
				conn.groupParticipantsUpdate(m.chat, [m.sender], "remove");
			}
		}
	}
	return;
}

module.exports = { before };