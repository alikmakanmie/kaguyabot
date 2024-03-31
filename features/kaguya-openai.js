/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let text;
  if (args.length >= 1) {
    text = args.join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else return m.reply(Func.example(usedPrefix, command, "halo"));
  m.reply(wait);
  try {
    const date = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
      }),
    );
    const hours = date.getHours();
    const name = await conn.getName(m.sender);
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    let chat = await Scraper.Gpt.Lbbai(
      text,
      `kamu Adalah shinomiya Kaguya dari anime love is war, jawab setiap pertanyaan dengan jawaban yang edukatif berserta emoji, jika ada yang bertanya tentang waktu kamu jawab tandon yang berkaitan dengan ${timeNow} dan ${getTodayDate()}, lawan bicara mu adalah ${name} , kamu memiliki sifat seperti shinomiya kaguya, pembuat mu adalah bang syaii sekaligus pacarnya`,
    );
    let hasil = chat.answer; // Only store the answer without the header

    let formattedHasil = hasil.replace(/```/g, " ");
    conn.reply(m.chat, formattedHasil, m, adReply); // Send only the formatted message
  } catch (e) {
    throw e;
  }
};

handler.help = ["ai", "chagpt", "openai"].map((a) => a + " *[question]*");
handler.tags = ["ai"];
handler.command = ["ai", "chagpt", "openai"];

module.exports = handler;

function getTodayDate() {
    const today = new Date();
    
    const day = today.getDate();
    const month = today.getMonth() + 1; // Perhatikan bahwa bulan dimulai dari 0, maka ditambahkan 1.
    const year = today.getFullYear();
    const dayOfWeek = today.toLocaleDateString('id-ID', { weekday: 'long' }); // Mengambil nama hari dalam bahasa Inggris.

    return `Hari ini adalah ${dayOfWeek}, ${day}/${month}/${year}.`;
}