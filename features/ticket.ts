import {
  ButtonInteraction,
  Client,
  Guild,
  GuildChannel,
  GuildMember,
  Interaction,
  Message,
  MessageActionRow,
  MessageButton,
  MessageEmbed,
  TextChannel,
} from 'discord.js'

export default (client: Client) => {
  client.on('interactionCreate', async (interaction) => {
    if (interaction.isButton()) {
      if (interaction.customId == 'otic') {
        const ch = await interaction.guild?.channels.create(
          `ticket-${interaction.user.username}`,
          {
            type: 'GUILD_TEXT',
            parent: '902183007396462663',
            topic: `ticket-${interaction.user.id}`,
            permissionOverwrites: [
              {
                id: interaction.guild.id,
                deny: ['VIEW_CHANNEL'],
              },
              {
                id: interaction.user.id,
                allow: [
                  'VIEW_CHANNEL',
                  'SEND_MESSAGES',
                  'READ_MESSAGE_HISTORY',
                  'ATTACH_FILES',
                  'EMBED_LINKS',
                ],
              },
            ],
          }
        )

        interaction.reply({
          content: `Seu ticket foi aberto com sucesso no canal <#${ch}>`,
          ephemeral: true,
        })

        const cembed = new MessageEmbed()
          .setColor('BLUE')
          // .setAuthor(`${guild?.name}`)
          .setDescription('>  Clique no botão abaixo para fechar o ticket:')
          .setTitle('Tickets')
        const close = new MessageActionRow().addComponents(
          new MessageButton()
            .setCustomId('cticket')
            .setLabel('Fechar Ticket')
            .setStyle('PRIMARY')
            .setEmoji('❌')
        )

        ch?.send({
          embeds: [cembed],
          components: [close],
        })
      } //end tic
      else if (interaction.customId == 'cticket') {
        // if (btnInt.customId.startsWith('cticket')) {
        // console.log(interaction.message)

        interaction.reply({
          content: 'Deletando ticket em 5s',
          ephemeral: true,
        })

        setTimeout(() => interaction.channel?.delete(), 5000)
      }
    } //end isButton
  })
}

export const config = {
  dbName: 'TICKET',
  displayName: 'Ticket',
}
