import { Client } from 'discord.js'

export default (client: Client) => {
  const statusOptions = ['Macacos comendo Banana', 'MonkeyFlix']

  let counter = 0

  const updateStatus = () => {
    client.user?.setPresence({
      status: 'online',
      activities: [
        {
          name: statusOptions[counter],
          type: 'WATCHING',
        },
      ],
    })

    setTimeout(updateStatus, 1000 * 60 * 5)
  }
  updateStatus()
}

export const config = {
  dbName: 'STATUS_CHANGER',
  displayName: 'Status Changer',
}
