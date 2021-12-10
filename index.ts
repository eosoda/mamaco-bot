import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Intents.FLAGS.GUILD_INTEGRATIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
  allowedMentions: {
    parse: ['roles', 'users', 'everyone'],
    repliedUser: true,
  },
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`)

  const dbOptions = {
    keepAlive: true,
  }
  new WOKCommands(client, {
    commandDir: path.join(__dirname, 'commands'),
    featureDir: path.join(__dirname, 'features'),
    typeScript: true,
    showWarns: true,
    defaultLanguage: 'portuguese',
    ignoreBots: true,
    testServers: ['896559856746627082'],
    dbOptions,
    mongoUri: process.env.MONGO_URI,
    botOwners: ['136460373564981248'],
    debug: false,
  })
    .setDefaultPrefix('!')
    .setColor(0xff0000)
})

client.login(process.env.TOKEN)
