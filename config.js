//═══════[© 2022 Dark Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to ALLAH, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['923474187615'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['923474187615'] //another owner number
global.premium = ['923474187615'] //premium number
global.pengguna = 'Dark Asif' //username
global.botnma = 'MOON-KING' //bot name
global.ownernma = 'ASIF KHAN' //owner name
global.packname = 'ASIF KHAN🙂' //sticker package name
global.author = 'MOON KING' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','#-','❤️','] //prefix
global.sp = '🧡' //design
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'In process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 10 //free user limit
}
global.thumb = fs.readFileSync('./DarkMedia/moonkingpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})