import { MessageEmbed } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
  category: 'dev',
  description: 'wembed',
  name: 'wembed',
  slash: false,
  callback: ({ message, channel }) => {
    const { member } = message

    let welcomeGif = [
      'https://i.pinimg.com/originals/04/dd/db/04dddb24a548c4ce1069513d5cdd4d7a.gif',
      'https://68.media.tumblr.com/8b8a99492ffba7ec6b1e429d2891ee22/tumblr_ohgvn0QWcE1qkz08qo1_540.gif',
      'https://i.pinimg.com/originals/50/eb/47/50eb47c78063d41c26ab6a8556fc3976.gif',
      'https://data.whicdn.com/images/243960123/original.gif',
      'https://data.whicdn.com/images/270710058/original.gif',
    ]

    let gif = welcomeGif[Math.floor(Math.random() * welcomeGif.length)]
    let embed = new MessageEmbed()
      .setColor('RANDOM')
      .addField(':bust_in_silhouette: | Nome : ', `${member?.displayName}`)
      .addField(
        ':microphone2: | Bem-vindo!',
        `Bem-vindo ao servidor, <@${member}>`
      )
      .setImage(gif)
      .setTimestamp()
    channel.send({ embeds: [embed] })
    // return embed
  },
} as ICommand
