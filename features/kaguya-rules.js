/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let fetch = require('node-fetch')
let { MessageType } = require('@whiskeysockets/baileys')
let handler = async(m, { conn }) => {
    let text = `_*RULES FOR ALL BOT USERS*_

•Don't spam bots, if the bot doesn't respond, don't spam it *(1 day-permanet ban)*
•Don't call bots carelessly *(blocking sanctions)*
•Reduce the use of the Ah ah ah feature (18+), Get caught *(Banned 3 days-permanent)*
• Don't beg if you want to ask for something normal, don't ask for something strange
• Don't play with the Report Feature. Requests to play will not be answered
•Owner's hobby is Satir (lightning sate) so he's familiar

*RULES IN THE GROUP*
•Don't spam, let alone spam tags carelessly for no reason *(Warning 1 sanction)*
•Don't spam Lb/Leaderboard carelessly *(contains Spam tags)* *(Warning 1 sanction)*
•prohibited from sending links to other groups *(Kick sanction)*
•The bot will exit automatically if the rental period expires/the rental user is not in the group
_______________________________________

- *RULES FOR PREMIUM*
- Premium users can only add bots to a maximum of 3 groups
- premium users can only use Premlimit/premexp a maximum of 5 times/day (avoids delays/slowness on bots)

- *RULES FOR MODERATORS*
- User Moderator can only add bots to a maximum of 5 groups
- Moderator users can only use addlimit/addxp a maximum of 5 times/day (avoiding delays/slowness on bots)
- User Moderators are prohibited from banning any user unless there is clear permission/reason
__________________________________________________

The rules above are absolute and if anyone violates them more than 3-5 times the bot owner can delete your rank on the bot. If anyone violates the rules, type *.report*

- That's all
`.trim()

    conn.reply(m.chat, text, m ,adReply)
}

handler.tags = ['main','info']
handler.command = /^(rules|rule)$/i
handler.help = ['rules'].map(a => a + " *[T.O.S Kaguya sama]*")
module. exports = handler