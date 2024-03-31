let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn}) => {
	await conn.reply(m.chat, `Please Wait`, m)
    let o
    try {
        o = await exec('cd && du -h --max-depth=1')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim())
        m.reply(Func.texted("monospace", stdout))
        if (stderr.trim()) m.reply(Func.texted("monospace", stderr))
    }
}
handler.help = ['disk']
handler.tags = ['info']
handler.command = /^(disk)$/i
handler.premium = false
module.exports = handler