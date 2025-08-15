const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Hf5gQTKZ#abji5cg-MCGKYc66cMu-970LO9PwUd-PQ9tCpdUT8XU",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/1thilina/thila-wa-bot/blob/main/images/bot.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 THILA-MD Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
