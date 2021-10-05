import { ICommand } from 'wokcommands'

export default {
  category: 'info',
  description: 'Calcula Idade',
  name: 'idade',
  expectedArgs: '<ano>',
  minArgs: 1,
  slash: false,
  callback: ({ message, args }) => {
    const year = new Date().getFullYear()
    const ano = parseInt(args[0])
    // Reply with the sum
    const reply = `${message.author.username} tem ${year - ano} anos`
    if (message) {
      message.reply({
        content: reply,
      })
    }
  },
} as ICommand
