//════════════════════════════//
//If you want to recode, reupload
//or copy the codes/script,
//pls give credit
//no credit? i will take action immediately
//© 2022 Xeon Bot Inc. Cheems Bot MD
//Thank you to Lord Buddha, Family and Myself
//════════════════════════════//
//recode kar ke youtube pe upload kar rhe ya
//codes copy kar ke apne script me dal rhe
//hai to, description me xeon ka yt channel
// ka link paste kr dena as a cradit or github 
//repo me bhi tag kardena baki jo
//bhi karna hai apki marzi, thank you!🦄
//════════════════════════════//
//If you recode and uploading on your channel
//or copy pasting the codes in ur script, 
//i give permission to do as long as you
//put Xeons youtube channel link in the video
//description and tag me on githuh repo, 
//thank you🦄
//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = false // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6282252285143'] //ur owner number
global.ownername = "ʀʏᴀɴ | 404"
global.ytname = "ʏᴏᴜᴛᴜʙᴇ : xxxxx" //ur yt chanel name
global.socialm = "ɢɪᴛʜᴜʙ : ʀʏᴀɴsᴛᴏʀᴇ" //ur github or insta name
global.location = "ɪɴᴅᴏɴᴇsɪᴀ, ʙᴀɴᴅᴜɴɢ, ᴊᴀᴡᴀ ʙᴀʀᴀᴛ" //ur location

//bot bombdy
global.botname = "ʏᴀɴɴ-ʙᴏᴛᴢ" //ur bot name
global.websitex = "https://yann-executed-team.blogspot.com" //ur website
global.vidmenu = { url: 'https://a.uguu.se/zlzQZvXH.mp4' } //gif and video menu
global.packname = "ʏᴀɴɴ-ʙᴏᴛ\nsᴛɪᴄᴋᴇʀ"
global.author = "Owner Number ➪ : (Ryan) 6282252285143\n"
global.themeemoji = "♲︎︎︎"
global.reactmoji = "😼"
global.ownertag = ['999999999999'] //ur owner tag
global.ownernummenu = ['6282252285143'] //ur owner number in menu and all
global.watermark = "✯ ʏᴀɴɴ-ʙᴏᴛᴢ" //ur watermark
global.botscript = "https://github.com/RyanStore/CheemsBot-MD3"
global.linkz1 = "https://chat.whatsapp.com/B9cQxA0NWrXHtFclMS5awJ"
global.linkz2 = "https://chat.whatsapp.com/B9cQxA0NWrXHtFclMS5awJ"

//Bot theme media
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: '*ᴅᴏɴᴇ🤖*',
    admin: 'ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴜᴘ!😼',
    botAdmin: 'ᴊᴀᴅɪᴋᴀɴ ʙᴏᴛ sᴇʙᴀɢᴀɪ ᴀᴅᴍɪɴ ᴜɴᴛᴜᴋ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ғɪᴛᴜʀ ɪɴɪ😈',
    owner: 'ғɪᴛᴜʀ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ ʙᴏᴛ😼',
    group: 'ᴋʜᴜsᴜs ᴅɪ ɢʀᴜᴘ😼',
    private: 'ᴋʜᴜsᴜs ᴘʀɪᴠᴀᴛᴇ ᴍᴇssᴀɢᴇ😼',
    bot: 'ғɪᴛᴜʀ ᴋʜᴜsᴜs ʙᴏᴛ👿',
    wait: 'sᴇᴅᴀɴɢ ᴅɪ ᴘʀᴏsᴇs....😈',
    linkm: 'ᴍᴀsᴜᴋᴋᴀɴ ʟɪɴᴋ ɴʏᴀ👿',
    error: 'ᴇʀʀᴏʀ!!👹',
    ban: 'ᴍᴀᴀғ,ᴋᴀᴍᴜ ᴛᴇʟᴀʜ ᴅɪ ʙᴀɴɴᴇᴅ ᴏʟᴇʜ ᴏᴡɴᴇʀ!!,ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜᴋᴀ ʙᴀɴɴᴇᴅ!😈',
    nsfw: 'ғɪᴛᴜʀ ɴsғᴡ ʙᴇʟᴜᴍ ᴀᴋᴛɪғ !! ,ᴍɪɴᴛᴀ ᴀᴅᴍɪɴ ɢʀᴜᴘ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋᴛɪғᴋᴀɴ😈',
    banChat: 'ʙᴏᴛ ᴛᴇʟᴀʜ ᴅɪ ʙᴀɴɴᴇᴅ ᴜɴᴛᴜᴋ ᴄʜᴀᴛ ɪɴɪ-ᴍɪɴᴛᴀ ᴏᴡɴᴇʀ ᴜɴᴛᴜᴋ ᴜɴʙᴀɴɴᴇᴅ👽'
}
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': '4362963afa95',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
