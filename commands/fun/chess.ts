import { ICommand } from 'wokcommands'
import { DiscordTogether } from 'discord-together'
import DiscordJS, { TextChannel } from 'discord.js'
export default {
  category: 'fun',
  description: 'Xadrez',
  name: 'chess',
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
    const channel = interaction.guild?.channels.cache.get(
      channelID
    ) as TextChannel
    // @ts-ignore: Object is possibly 'null'.
    if (channel.type !== 'GUILD_VOICE')
      return interaction.reply({ content: 'Please choose a voice channel' })

    discordTogether
      .createTogetherCode(channelID, 'chess')
      .then((x) => interaction.reply(x.code))
  },
} as ICommand
