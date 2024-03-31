/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

const { question, image } = require("../scrape/bardie.js")
const uploadImage = require("../function/uploadFile")
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
	let text
	if (args.length >= 1) {
		text = args.slice(0).join(" ")
	} else if (m.quoted && m.quoted.text) {
		text = m.quoted.text
	} else return m.reply("• *Example:* .bard halo")
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ""
	await m.reply(wait)
	if (!mime) {
		try {
			let res = await GoogleBard(text)
			await m.reply(res.content);
			
				} catch (e) {
console.log(e)
await m.reply(eror)
		}
	} else {
		let media = await q.download()
		let isTele = /image\/(png|jpe?g)/.test(mime)
		let link = await uploadImage(media)
		let res = await GoogleBardImg(text, link)
		await m.reply(res.content);
}
  }
handler.help = ["bard"].map(a => a + " *[query]*")
handler.tags = ["ai"]
handler.command = /^(bard)$/i
handler.premium = true
module.exports = handler

async function GoogleBard(query) {
	return question({ ask: query })
};

async function GoogleBardImg(query, url) {
	return image({ ask: query, image: url })
};