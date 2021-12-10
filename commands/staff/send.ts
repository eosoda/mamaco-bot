import { TextChannel } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
  category: 'staff',
  description: 'Envia mensagem para um canal',
  permissions: ['MANAGE_MESSAGES'],
  minArgs: 2,
  expectedArgs: '<canal-de-texto> <texto>',
  expectedArgsTypes: ['CHANNEL', 'STRING'],
  slash: false,
  callback: ({ message, interaction, args }) => {
    const channel = (
      message
        ? message.mentions.channels.first()
        : interaction.options.getChannel('channel')
    ) as TextChannel

    // const an = client.channels.cache.get('896559857359028226') as TextChannel // canal anunciar
    if (!channel || channel.type !== 'GUILD_TEXT') {
      return 'Insira um canal de texto'
    }

    args.shift() // Remove the channel from the arguments array
    const text = args.join(' ')

    channel.send(text)

    if (interaction) {
      interaction.reply({
        content: 'Mensagem enviada!',
        ephemeral: true,
      })
    }
  },
} as ICommand
