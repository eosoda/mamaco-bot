import DiscordJS, { Channel, MessageEmbed, TextChannel } from 'discord.js'
import { ICommand } from 'wokcommands'
import ms from 'ms'

export default {
  category: 'staff',
  description: 'Limpa Mensagens',
  slash: true,
  requiredPermissions: ['MANAGE_MESSAGES'],
  options: [
    {
      name: 'amount',
      description: 'Quantidade de mensagens para deletar.',
      required: true,
      type: DiscordJS.Constants.ApplicationCommandOptionTypes.INTEGER,
    },
  ],
  callback: async ({ message, interaction, channel }) => {
    const amount = interaction.options.getInteger('amount')
    // @ts-ignore: Object is possibly 'null'.
    if (amount > 100) {
      return {
        custom: true,
        content: 'Só consigo deletar até 100 mensagens',
        ephemeral: true,
      }
    }
    // @ts-ignore: Object is possibly 'null'.
    const messages = await channel?.messages.fetch({
      limit: amount,
    })
    const filtered = messages.filter(
      (msg) => Date.now() - msg.createdTimestamp < ms('14 days')
    )

    await channel.bulkDelete(filtered)

    return {
      custom: true,
      content: `${filtered.size} deletadas`,
      ephemeral: true,
    }
  },
} as ICommand
