import { MessageEmbed } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
  category: 'Testing',
  description: 'Sends an embed',
  permissions: ['ADMINISTRATOR'],
  expectedArgs: '<nivel1> <meta1> <nivel2> <meta2> <data inicio> <data fim>',
  slash: false,
  minArgs: 4,
  callback: async ({ message, channel, args }) => {
    message.delete()

    const nivel1 = args[0]
    const meta1 = args[1]
    const nivel2 = args[2]
    const meta2 = args[3]
    const data = {
      inicio: args[4],
      fim: args[5],
    }

    if (!nivel1 && !meta1) {
      return 'Digite pelo menos um nível e uma meta'
    }

    const embed = new MessageEmbed()
      .setDescription(
        'Confira as metas de nível para essa semana:\n' +
          `(**${data.inicio}** - **${data.fim}**)`
        // '(do dia 07/12 até 15/12)'
      )
      .setTitle('Metas')
      .setColor('#9b59b6')
    if (nivel1 && meta1) {
      embed
        .addField(`Nivel`, `${nivel1}`, true)
        .addField(`Meta`, `${meta1}`, true)
        .addField('\u200B', '\u200B', true)
    }
    if (nivel2 && meta2) {
      embed
        .addField(`Nivel`, `${nivel2}`, true)
        .addField(`Meta`, `${meta2}`, true)
        .addField('\u200B', '\u200B', true)
    }
    channel.send({ embeds: [embed] })
  },
} as ICommand
