const { WAConnection, Browsers, MessageType } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { getBuffer, getGroupAdmins, getRandom } = require('./lib/myfunc')
const { uncache, nocache } = require('./lib/loader')
const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./gura.js')
nocache('../gura.js', module => console.log(color('[WATCH]', 'red'), color(`'${module}'`, 'green'), 'File is updated!'))
require('./main.js')
nocache('../main.js', module => console.log(color('[WATCH]', 'red'), color(`'${module}'`, 'green'), 'File is updated!'))

const starts = async (gura = new WAConnection()) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               //BASE ORI BY guraXD        
gura.logger.level = 'warn'
gura.version = [2, 2140, 14]
console.log(color(figlet.textSync('GuraBotz Official', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'red'))
gura.browserDescription = ["ArulBotz", "Safari", "3.0.0"];
gura.on('qr', () => {
console.log(color('[ Gura ]', 'red'), color('Scan Syang'))
})
fs.existsSync(`./session.json`) && gura.loadAuthInfo(`./session.json`)
gura.on('connecting', () => {
console.log(color('[ Gura ]', 'red'), color('Menyambungkan...'))
})
gura.on('open', () => {
console.log(color('[ Gura ]', 'red'), color('Tersambung'))
})
await gura.connect({
timeoutMs: 30 * 1000
})
fs.writeFileSync(`./session.json`, JSON.stringify(gura.base64EncodedAuthInfo(), null, '\t'))
gura.on('chat-update', async (message) => {
require('./gura.js')(gura, message)
})
gura.on("group-participants-update", async (anu) => {
const isWelkom = welkom.includes(anu.jid)
try {
groupMet = await gura.groupMetadata(anu.jid)
groupMembers = groupMet.participants
mem = anu.participants[0]
console.log(anu)
try {
ppimg = await gura.getProfilePicture(mem)
} catch (e) {
ppimg = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
}
if (!isWelkom) return
if (anu.action == 'add' && !mem.includes(gura.user.jid)) {
num = anu.participants[0]
ini_user = gura.contacts[num]
mdata = await gura.groupMetadata(anu.jid)
try {
ppimg = await gura.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `*Hi @${num.split('@')[0]}*\n*selamat datamg di grup*`
let buffer = await getBuffer(ppimg)
gura.sendMessage(mdata.id, buffer, MessageType.image, { caption: teks, contextInfo: { "mentionedJid": [num] } })
} else if (anu.action == 'remove') {
num = anu.participants[0]
ini_user = gura.contacts[num]
namaewa = ini_user.notify
mdata = await gura.groupMetadata(anu.jid)
try {
ppimg = await gura.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `*babay* *@${num.split('@')[0]}👋*`
let buffer = await getBuffer(ppimg)
gura.sendMessage(mdata.id, buffer, MessageType.image, { caption: teks, contextInfo: { "mentionedJid": [num] } })
}
} catch (e) {
console.log("Error : %s", color(e, "red"))
}
})
}
starts()
