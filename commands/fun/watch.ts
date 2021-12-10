import { ICommand } from 'wokcommands'
import { DiscordTogether } from 'discord-together'
import DiscordJS, { Channel } from 'discord.js'
export default {
  category: 'fun',
  description: 'Watch Together',
  name: 'watch',
  slash: true,
  options: [
    {
      name: 'channel',
      description: 'Canal de Voz',
      required: true,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.CHANNEL,
    },
  ],
  callback: ({ client, args, interaction }) => {
    const discordTogether = new DiscordTogether(client)
    const [channelID] = args
    const channel = interaction.guild?.channels.cache.get(channelID) as Channel

    if (channel.type !== 'GUILD_VOICE')
      return interaction.reply({ content: 'Please choose a voice channel' })

    discordTogether
      .createTogetherCode(channelID, 'youtube')
      .then((x) => interaction.reply(x.code))
  },
} as ICommand
