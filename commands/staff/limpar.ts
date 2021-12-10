import { ICommand } from 'wokcommands'

export default {
  category: 'staff',
  description: 'Limpa Mensagens',
  slash: true,
  requiredPermissions: ['MANAGE_MESSAGES'],
  expectedArgs: '[qnt]',

  callback: async ({ message, interaction, channel, args }) => {
    const amout = args.length ? parseInt(args.shift()!) : 10

    if (message) {
      await message.delete()
    }
    // fetch and then delete messages
    const messages = await channel.messages.fetch({ limit: amout })
    const { size } = messages

    messages.forEach((message) => message.delete())

    const reply = `${size} mensagens deletadas!`

    if (interaction) {
      return interaction.reply({ content: reply, ephemeral: true })
    }

    // channel.send(reply)
  },
} as ICommand
