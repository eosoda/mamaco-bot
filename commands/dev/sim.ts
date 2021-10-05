import { ICommand } from 'wokcommands'

export default {
  category: 'dev',
  description: 'Add member',
  name: 'sim',
  testOnly: true,
  slash: false,
  callback: ({ member, client }) => {
    client.emit('guildMemberAdd', member)
    return 'Join Simulated'
  },
} as ICommand
