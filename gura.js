const { WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, WA_DEFAULT_EPHEMERAL,  ReconnectMode, ProxyAgent, ChatModification, GroupSettingChange, waChatKey, mentionedJid, processTime, Browsers, } = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request');
const crypto = require('crypto')
const fs = require("fs-extra")
const util = require('util')
const { color, bgcolor } = require('./lib/color')
const { getBuffer, getGroupAdmins, getRandom } = require('./lib/myfunc')

//●●●●●●●●●●●●●●●●●●●●●● SETTING ●●●●●●●●●●●●●●●●●●●●●●                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               //BASE ORI BY guraXD🐦        

botName = 'GuraBotz'
ownerName = 'ArulGanz' 
ownerNumber = '6281229859085'
faketeks = 'GuraBotz by ArulGanz'
publics = true
mypp = fs.readFileSync('thumbnail.jpg') // thumbnailnya

//●●●●●●●●●●●●●●●●●●●●●● DATABASE ●●●●●●●●●●●●●●●●●●●●●●

let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

//●●●●●●●●●●●●●●●●●●●●●● END JSON ●●●●●●●●●●●●●●●●●●●●●●

module.exports = gura = async (gura, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
const { Functions }= require('./lib/functions.js');
global.ky_ttt
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam🌃'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore🌅'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang🏙'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi🌁'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam🌉'
}
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]     
const typeo = Object.keys(mek.message)[0]
global.prefix
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°Z•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•Zπ÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
var body = (typeo === 'conversation') ? mek.message.conversation : (typeo === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const arg = body.substring(body.indexOf(' ') + 1)
const isCmd = body.startsWith(prefix) 
const q = args.join(' ')
const markon = "0@s.whatsapp.net"
const botNumber = gura.user.jid
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? mek.participant : mek.key.remoteJid
const senderr = mek.key.fromMe ? gura.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const totalchat = await gura.chats.all()
const groupMetadata = isGroup ? await gura.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = mek.key.fromMe ? gura.user.jid : gura.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? gura.user.name : conts.notify || conts.vname || conts.name || '-'
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByreply) : []
const isOwner = ownerNumber.includes(senderr)
const isAntiLink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? welkom.includes(from) : false

mess = {
wait: '*Tunggu Sebentar*',
success: '*Success Kak*',
error: {
stick: '*Itu Bukan Sticker*',
Iv: 'Error'
},
only: {
group: '*Group only*',
badmin: '*Saya Bukan Admin:v*',
admin: '*Khusus Leluhur Grup:v*'
}
}

selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
const sendMess = (hehe, teks) => {
gura.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? gura.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('thumbnail.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : gura.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('thumbnail.jpg')}, extendedText, { sendEphemeral: true, quoted: fstatus, contextInfo: { "mentionedJid": memberr } })
}
const reply = (teks) => { 
gura.sendMessage(from, teks, text, {quoted:mek, thumbnail: mypp})
}
const kick = function(from, orangnya){
for (let i of orangnya){
gura.groupRemove(from, [i])
}
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
gura.sendMessage(to, media, type, {quoted: fstatus, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const costum = (pesan, tipe, target, target2) => {
gura.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}

//●●●●●●●●●●●●●●●●●●●●●● FAKE ●●●●●●●●●●●●●●●●●●●●●●

const fakestatus = (teks) => { gura.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Subscribe My YT guraxD", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('thumbnail.jpg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } }} }) }
const fstatus = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Subscribe My YT guraxD", 'jpegThumbnail': fs.readFileSync('thumbnail.jpg')}}}

//●●●●●●●●●●●●●●●●●●●●●● BUTTON ●●●●●●●●●●●●●●●●●●●●●●

const sendButLocation = async (id, text1, desc1, loc1, but = [], options = {}) => {
hehe = loc1
mhan = await gura.prepareMessage(from, hehe, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "LOCATION"
}
gura.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//●●●●●●●●●●●●●●●●●●●●●● MEDIA DETECT ●●●●●●●●●●●●●●●●●●●●●●

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const { quotedMsg, isQuotedMsg, isBaileys } = mek
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isListMsg = (type == 'listResponseMessage')
const isQuotedemage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
const isQuotediudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
const isQuotedoideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
const isQuotedpticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false

//●●●●●●●●●●●●●●●●●●●●●● GROUP ●●●●●●●●●●●●●●●●●●●●●●

if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
fakestatus(`*「 GROUP LINK TERDETEKSI 」*\n\nSepertinya kamu mengirimkan link nomor, maaf kamu akan di kick:)`)
setTimeout( () => {
gura.groupRemove(from, [sender])}, 1000)
}
}
if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (budy.match(/(https:\/\/wa.me)/gi)) {
fakestatus(`*「 NOMOR LINK TERDETEKSI 」*\n\nSepertinya kamu mengirimkan link nomor, maaf kamu akan di kick:)`)
setTimeout( () => {
gura.groupRemove(from, [sender])}, 1000)
}
}

//●●●●●●●●●●●●●●●●●●●●●● CMD ●●●●●●●●●●●●●●●●●●●●●●

if (isCmd && !isGroup)
console.log(color('[ CMD ]', 'red'), color(time), color(`${command} [${args.length}]`), 'from', color(pushname))
if (isCmd && isGroup)
console.log(color('[ CMD ]', 'red'), color(time), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
if (!mek.key.fromMe && publics === false) return

//●●●●●●●●●●●●●●●●●●●●●● CASE/COMMAND ●●●●●●●●●●●●●●●●●●●●●●

switch (command) {
case 'command':
case 'menu':
const menunya = `
Hi Kak ${pushname} Saya ${botName}
➤ *List Menu GuraBotz*➤
┃❒
┃き*.leave*
┃き*.linkgroup*
┃き*.antilink*
┃き*.welcome*
┃き*.promote*
┃き*.demote*
┃き*.add*
┃き*.kick*
┃き*.closegc*
┃き*.opengc*
┃き*.chat 62xnxx|(pesannya)*
┃
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱𝒊𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂𝒌 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑𝒐𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━ 

┏ *List Menu Bot*
┃
┣${prefix}leave
┃
┣${prefix}linkgroup
┃
┣${prefix}antilink
┃
┣${prefix}welcome
┃
┣${prefix}promote
┃
┣${prefix}add
┃
┣${prefix}kick
┃
┣${prefix}opengc
┃
┣${prefix}closegc
┃
┣${prefix}hidetag
┃
┣${prefix}sticker
┃
┣${prefix}attp
┃
┣${prefix}owner
┃
┗ *more?tambahin sendiri*`
gura.sendMessage(from, mypp, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg",  "caption": faketeks,  "jpegThumbnail": fs.readFileSync('thumbnail.jpg') } } }, caption: menunya })
break
//●●●●●●●●●●●●●●●●●●●●●● GROUP MENU●●●●●●●●●●●●●●●●●●●●●●
case 'leave': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
setTimeout( () => {
gura.groupLeave(from) 
}, 2000)
setTimeout( () => {
reply('Byee...')
}, 0)
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih 1 atau 0`)
if (args[0].toLowerCase() === '1'){
if (isAntiLink) return reply(`Udah aktif`)
antilink.push(from)
fs.writeFileSync('antilink.json', JSON.stringify(antilink))
reply('*「ANTILINK AKTIF」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
} else if (args[0].toLowerCase() === '0'){
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('antilink.json', JSON.stringify(antilink))
reply('*「ANTILINK DI NONAKTIFKAN」*')
} else {
reply(`Pilih 1 atau 0`)
}
break
case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('!welcome 1/0')
if ((args[0]) === '1') {
if (isWelkom) return reply('Udah aktif')
welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
} else if ((args[0]) === '0') {
welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'link': 
case 'linkgc': 
case 'linkgrup' :
case 'linkgroup': 
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await gura.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}`
gura.sendMessage(from, yeh, text, { quoted: fstatus })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah Diterima menambahkan leluhur di grup ini'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
gura.groupMakeAdmin(from, mentioned)
} else {
mentions(`Selamat @${mentioned[0].split('@')[0]} Kamu Telah Manjadi Leluhur Di Grup Ini`, mentioned, true)
gura.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah Diterima Menurunkan Jabatan Admin'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
gura.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Maaf Ya @${mentioned[0].split('@')[0]} Kamu kuturunkan menjadi member:)`, mentioned, true)
gura.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Nomer Yg Mau Di Add Mana ?')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
gura.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
gura.groupRemove(from, [y])
reply(`Succes kick target😼`)
break
case 'opengc' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`✓Sukses Membuka Group *${groupMetadata.subject}*`)
gura.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'closegc' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`✓Sukses Menutup Group *${groupMetadata.subject}*`)
gura.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
//●●●●●●●●●●●●●●●●●●●●●● INFO MENU●●●●●●●●●●●●●●●●●●●●●●
case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = gura.contacts[i] != undefined ? gura.contacts[i].vname || gura.contacts[i].notify : undefined
inilist.push({
"displayName": `${ownerName}`,
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownerName}\n`
+ `ORG: Owner ${ownerName} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${ownerNumber}:${ownerNumber}\n`
+ 'END:VCARD'.trim()
})
}
kD = await gura.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: mek })
break


//●●●●●●●●●●●●●●●●●●●●●● TOOLS MENU●●●●●●●●●●●●●●●●●●●●●●
case 'sticker':  case 'stiker':  case 's': 
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await gura.downloadAndSaveMediaMessage(encmedia, 'media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, markon, `Jangan Lupa SUBSCRIBE YT : guraXD`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await gura.downloadAndSaveMediaMessage(encmedia, 'media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, markon, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await gura.downloadAndSaveMediaMessage(encmedia, 'media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
gura.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: kyy })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'attp': 
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
gura.sendMessage(from, buffer, sticker, { quoted: fstatus })
break
//●●●●●●●●●●●●●●●●●●●●●● OWNER MENU●●●●●●●●●●●●●●●●●●●●●●


case 'public':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (publics === true) return 
publics = true
reply(`sukses public-mode`)
break
case 'self':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
if (publics === false) return
publics = false
reply(`sukses self-mode`)
break
case 'mode':
if (!isOwner && !mek.key.fromMe) return
reply(`${publics ? 'public-mode' : 'self-mode'}`)
break

//●●●●●●●●●●●●●●●●●●●●●● END ●●●●●●●●●●●●●●●●●●●●●●

default:
if (/^=?>/.test(budy) && (isOwner || mek.key.fromMe)){
let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')
try{
let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })
return reply(require('util').format(evaluate))
 } catch(e){
 return reply(require('util').format(e))
}
}
}
if (isGroup && budy != undefined) {
} else {
console.log('[',color('Text','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
}		
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
console.log('Message : %s', color(e, 'cyan'))
}
}
}
// THANKS TO
//
// guraXD AND IKYY (CUMA ITU🗿)
// 
//
//
//
