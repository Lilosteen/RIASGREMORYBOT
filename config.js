//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2348086541281";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlEWmM4N0w0RG11M3lDOSs3c1hnRWxuQngzb09GVE9raXp0V0dCeEFVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHRwUVZ3VG1UOEhIVzZrZDhuRFhtM0cxU3laWittTmhmeTUrNVNMek8wWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTzRIZEpCVkhDdzQ2ZTdTeVNITUV2K0NiNEFpZm1QM09SOENYSjdMdVdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5WjVDajdLU3YwQUZsanAzbGVNZmZSMDNSSmRob3YvWXdGcXlGbytTNmg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNVGJUTXBXeWhYZnJqM213VktnMGVGSlhzcTVYdVFtbTJOU1llTVFmMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJWWxKaFdXMFJSSTlUNnJ5K0lOeWlPNXdvdnpOZ3dtamgvbDVMeHIvazQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9XZ0ZYalVsaUVPcmE4OHdJS242eTArY3FJQWwzdnJMTFN4Si9VYVVXUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnNoWVhqUkltQ2NJZEtnN0o3bjhWTTRkeUorSVZ0YWFGa1ByUWF6Z2hWND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFrMEE4ZzUzd2RjN3JCdDhsaHpiUGtobzNqemlhb0Y4V0FiRTJIVHc4SC8xZ0R2cGhrdVJjWWFLVkJhYVhnQXlYemZCalZ0S0d6L1kxMTRuMjBpR2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE1LCJhZHZTZWNyZXRLZXkiOiJYU1NtaTBBYnNsQjUwME5PMVl1cXRuRUVnTTNWNVZvUkpOZjFNRGVKOFdNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5Njc5MDkzOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRTRERDUyQzZBOUNFOTk1MEY1RkFEQjFFRUIwNjcwOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNTg3OTc0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzWERmSEtpUFQ3MjBQMXNaVUc5RjlRIiwicGhvbmVJZCI6IjExOTU1NjRhLWY0MzEtNDBkYi04ZGIxLTYwZjA5NDIxNWIxNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjZkJIODE2WFIzS1pIVVAyRzVaYklSd096eUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZG95ZnNhQkhtaHh2WGtHZUxuOTZiYUNBWFZnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkgxU0E5VFhFIiwibWUiOnsiaWQiOiIyNTQ3OTY3OTA5Mzg6N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUgzcXVNRkVMTzJzclVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM0owQkNOZjRQWks2UXNXZEg3c0NrRlFDUlRvaFAzY2c3S0IxdnVqWGNYOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQWlhYnFRY1FVYXZxbEczbVlWTndGOXNSZkY4bGFDL0FQcXJqRjFEc3Jka2hlQ1NlcGRjNVR3eXl5OVVaQlVDb0xQUTNnZGl3VmF5MlV1eHFYRms0QkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjVPOVUvU3VucDltUW1CVFBkVnFKQlZpbjBJYmRXZHVPb3dyajRQVDBFMzROZVo0TlRpS041MDdkQlRucnZSdHNBZFR6NzVtQi9OM3N2UEkvQm9xdmlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk2NzkwOTM4OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHlkQVFqWCtEMlN1a0xGblIrN0FwQlVBa1U2SVQ5M0lPeWdkYjdvMTNGLyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjU4Nzk2OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNNmcifQ==
eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9EbHZ2ZUE1cUFrc1dRMy9UMzd4c3B6WW9ESS9kTW1BS29RdWVjUGJFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibE1uZko2bkRGdER5bngrQ0xiWkhDbzlZaGNuRUgyd1FOVTRsdlhUQjZFOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQmJNRWFQOFRyVjNMTThzejVUaVVSSjhXN1ZMdUxFMXRGajRGQ3NTUzFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvaGZLNnM5K0JqTlRmSnlFQ0d0d3FzOGpqNVFvWFV5RW5vQXlIempva1QwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVNYm9wY1M1bVFRcCsxOVZ1aE1wZ1pldEpSQVY1eklxYm83aWxCaGdHVlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJVY0srOTRUWHRNSGZBa3J6UytSRkNzSVFwOExGNFBaUkI5OXhZNW55ejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1BiNUJ6RE5VTHAwNmVoNzMvakFKMEUzSFEzTDZMMFFyQllMYnRKYXRFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFA3WXV1cTdCY01la3NELzVRMlhlMG9GZDNoS1FNR3NQWEFJeFlwaklqOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJBcmdKN1BGalR3OFJMVTN3ZGZFVG1rYzk4RUxRZEhZdDdyUFZtbitMaC96dkRFUGRaOUtSbzJuZHdKUnJzVHJRZ0RKZTFERGdxdWFKM2ZManJtMEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IjdEQmdEZzBMVHFTZUlBYTFqTktvazVZZzA3SkFEeTd2bHVtRVdWOUZWZjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZDYllzOFp3U2pXdTFyczJ1V0RUZ0EiLCJwaG9uZUlkIjoiYWQwN2ZhOTMtMjhkOC00Y2I4LTkyNzctMGM5MWUzYTQzYjA0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBxaVJNRWJHeFFtUDdhTjBXNGVsVW5KTHpyTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnOWdGMVJXM2dwK1RXcnZwOFM0dzJUZGRMOFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNjI0VDVWVzgiLCJtZSI6eyJpZCI6IjI1NDc5Njc5MDkzODoxOEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVgzcXVNRkVLejYzYlVHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM0owQkNOZjRQWks2UXNXZEg3c0NrRlFDUlRvaFAzY2c3S0IxdnVqWGNYOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQzBLN1hQRU00cS9hVFZ2MThGK3UzV2F2UTRNVjJzS0tNbWxSRHh0dXc0WWZ0d3RKVG1QNG05WU9zckxZWS9YaEk1bzMyVVFmL2I3TXVra1JNMExSQmc9PSIsImRldmljZVNpZ25hdHVyZSI6ImFOOWNFR3YwRzhxUm9ER1E5cU5udDFVRE15OVoxMC9lOEI2eHh0UElUaDFJbUJlN21DU21zdVRUZS9DajE5Mk1ZUmxKK25pMnUzc1RpYkhIYklWdUJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk2NzkwOTM4OjE4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmR5ZEFRalgrRDJTdWtMRm5SKzdBcEJVQWtVNklUOTNJT3lnZGI3bzEzRi8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMzMDExNzYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRlpZIn0=
