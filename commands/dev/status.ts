import { ICommand } from 'wokcommands'

export default {
  category: 'staff',
  description: 'Define status do bot',

  minArgs: 1,
  expectedArgs: '<status>',
  ownerOnly: true,
  slash: false,

  callback: ({ client, text }) => {
    client.user?.setPresence({
      status: 'dnd',
      activities: [
        {
          name: text,
        },
      ],
    })
  },
} as ICommand
