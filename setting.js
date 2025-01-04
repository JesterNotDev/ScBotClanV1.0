/* SC JESTER 🔥
BASE : HW MODS
RECODE : JESTER 🔥
BUY SC 10K CHAT WA JASAPOST
*/

const fs = require('fs')
const chalk = require('chalk')


//====SettingOwner====\\
global.owner = "601153232217"
global.namabot = "Jester Push"
global.botname = "Jester Push V4"
global.namaowner = "Jester"
global.thum = fs.readFileSync('./image/clan.png')

const mess = {
   owner: `\`ᴏᴡɴᴇʀ\`\nThis Command For Owner`,
   premium: `\`ᴘʀᴇᴍɪᴜᴍ\`\nThis Kode For Premium User`,
   succes: `\`sᴜᴄᴄᴇs\`\nSuccess in Making Perin`, 
   badmin: `\`ʙᴏᴛ ᴀᴅᴍɪɴ\`\n Sorry Bot Not Admin`
   admin: `\`ᴀᴅᴍɪɴ\`\n Sorry, this command is for admin.`
   }

global.mess = mess
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})