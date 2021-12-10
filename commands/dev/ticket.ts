import { MessageActionRow, MessageButton, MessageEmbed } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
  category: 'dev',
  description: 'Messagem com botão de ticket',
  name: 'ticket',
  ownerOnly: true,
  slash: false,
  callback: ({ message }) => {
    const tembed = new MessageEmbed()
      .setColor('BLUE')
      // .setAuthor(`${guild?.name}`)
      .setDescription(
        '> Entre em contato com o suporte!\n' + '> Clique no botão abaixo:'
      )
      .setTitle('Tickets')

    const opentic = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId('otic')
        .setLabel('Abrir Ticket!')
        .setStyle('PRIMARY')
        .setEmoji('🎫')
    )
    message.delete()
    message.channel.send({
      embeds: [tembed],
      components: [opentic],
    })
  },
} as ICommand
