import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
})
client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`)

  const dbOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
  new WOKCommands(client, {
    commandDir: path.join(__dirname, 'commands'),
    featureDir: path.join(__dirname, 'features'),
    typeScript: true,
    showWarns: true,
    defaultLanguage: 'portuguese',
    ignoreBots: true,
    testServers: ['890191286152355861', '245638302839865345'],
    dbOptions,
    mongoUri: process.env.MONGO_URI,
  })
    .setBotOwner('136460373564981248')
    .setDefaultPrefix('?')
    .setColor(0xff0000)
})

client.login(process.env.TOKEN)
