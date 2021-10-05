import { ICommand } from 'wokcommands'

export default {
  category: 'Testing',
  description: 'Replies with pong',
  slash: false,

  callback: ({ message }) => {
    return 'Pong'
  },
} as ICommand
