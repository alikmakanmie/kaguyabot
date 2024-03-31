/*####################################
                 KAGUYA SAMA
             MADE BY LEXIC TEAM
       
✅ WhatsApp: wa.me/6281389103794
👥 Github: https://github.com/LEXIC-TEAM
#####################################*/

let baileys = require("@whiskeysockets/baileys");
let {
  useMultiFileAuthState,
  DisconnectReason,
  makeInMemoryStore,
  jidNormalizedUser,
  makeCacheableSignalKeyStore,
  PHONENUMBER_MCC,
} = baileys;
let { Boom } = require("@hapi/boom");
let NodeCache = require("node-cache");
let Pino = require("pino");
let simple = require("../function/simple");
let fs = require("fs");

if (global.conns instanceof Array) console.log();
else global.conns = [];

let handler = async (m, { conn, args, usedPrefix, command, isOwner, text }) => {
  let conns = global.conn;
  let user = global.db.data.users[m.sender];

  let authFile = "function/jadibot/" + m.sender.split("@")[0];
  let isInit = !fs.existsSync(authFile);
  let { state, saveCreds } = await useMultiFileAuthState(authFile);
  let msgRetryCounterCache = new NodeCache();

  const config = {
    logger: Pino({ level: "fatal" }).child({ level: "fatal" }),
    printQRInTerminal: false,
    mobile: false,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(
        state.keys,
        Pino({ level: "fatal" }).child({ level: "fatal" }),
      ),
    },
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    msgRetryCounterCache,
    defaultQueryTimeoutMs: undefined,
  };
  conn = simple.makeWASocket(config);
  let ev = conn.ev;

  if (!conn.authState.creds.registered) {
    setTimeout(async () => {
      let phoneNumber = m.sender.split("@")[0];
      let code = await conn.requestPairingCode(phoneNumber);
      let hasilcode = code?.match(/.{1,4}/g)?.join("-") || code;
      let key = await conns.reply(
        m.chat,
        "*± KAGUYA CLONE*\n\nMasukan code dibawah ini untuk menjadi bot clone\n\n1. Klik titik tiga : di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomer telepon saja\n5. Masukan code di atas\n\n*⏱️ Code Expired 60 seconds*",
        m,
      );
      await conns.reply(m.chat, hasilcode, key);
    }, 3000);
  }

  async function connectionUpdate(update) {
    const { connection, lastDisconnect } = update;
    console.log(update);
    if (connection == "connecting") {
      console.log(connection);
    } else if (connection == "open") {
      conns.reply(
        m.chat,
        `*[ CONNECTION SUCCESS ✅ ]*\n\nHai *@${m.sender.split("@")[0]}, Kini Anda menjadi bot clone dari Kaguya sama*\n\n*Ingat Hanya bot Clone, Jadi ada beberapa fitur yang tidak dapat di akses oleh pengguna bot clone*`,
        m,
      );
      global.conns.push(conn);
    }
    if (
      lastDisconnect &&
      lastDisconnect.error &&
      lastDisconnect.error.output &&
      lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut
    ) {
      console.log(reloadHandler(true));
    }
  }

  reloadHandler = function (restatConn) {
    let Handler = require("../handler");
    let handler = require("../handler");
    if (Object.keys(Handler || {}).length) handler = Handler;
    if (restatConn) {
      try {
        conn.ws.close();
      } catch {}
      conn = {
        ...conn,
        ...simple.makeWASocket(config),
      };
    }
    if (!isInit) {
      conn.ev.off("messages.upsert", conn.handler);
      conn.ev.off("group-participants.update", conn.onParticipantsUpdate);
      conn.ev.off("connection.update", conn.connectionUpdate);
      conn.ev.off("creds.update", conn.credsUpdate);
    }

    conn.welcome = "Hai, @user!\nSelamat datang di grup *@subject*\n\n@desc";
    conn.bye = "Selamat tinggal @user!";
    conn.spromote = "@user sekarang admin!";
    conn.sdemote = "@user sekarang bukan admin!";
    conn.handler = handler.handler.bind(conn);
    conn.onParticipantsUpdate = handler.participantsUpdate.bind(conn);
    conn.connectionUpdate = connectionUpdate.bind(conn);
    conn.credsUpdate = saveCreds.bind(conn);

    conn.ev.on("messages.upsert", conn.handler);
    conn.ev.on("group-participants.update", conn.onParticipantsUpdate);
    conn.ev.on("connection.update", conn.connectionUpdate);
    conn.ev.on("creds.update", conn.credsUpdate);
    isInit = false;
    return true;
  };
  reloadHandler();
};
handler.help = ["jadibot"].map((a) => a + " *[bot clone kaguya]*");
handler.tags = ["jadibot"];
handler.command = /^jadibot$/i;
handler.premium = true;
handler.limit = true;
handler.private = false;
module.exports = handler;