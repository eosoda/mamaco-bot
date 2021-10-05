import { Client, MessageEmbed, TextChannel } from 'discord.js'
import WOKCommands from 'wokcommands'

export default (client: Client, instance: WOKCommands) => {
  // Listen for new members joining a guild
  client.on('guildMemberAdd', (member) => {
    // Access the guild that they joined
    const { guild } = member

    // Get the channel named "welcome"
    const channel = guild.channels.cache.find(
      (channel) => channel.name === 'welcome'
    ) as TextChannel

    // Ensure this channel exists
    if (!channel) {
      return
    }
    // auto role
    const role = member.guild.roles.cache.find(
      (role) => role.name == 'Spectador'
    )
    member.roles.add(`${role}`)
    // auto role end

    let welcomeGif = [
      'https://i.pinimg.com/originals/04/dd/db/04dddb24a548c4ce1069513d5cdd4d7a.gif',
      'https://68.media.tumblr.com/8b8a99492ffba7ec6b1e429d2891ee22/tumblr_ohgvn0QWcE1qkz08qo1_540.gif',
      'https://i.pinimg.com/originals/50/eb/47/50eb47c78063d41c26ab6a8556fc3976.gif',
      'https://data.whicdn.com/images/243960123/original.gif',
      'https://data.whicdn.com/images/270710058/original.gif',
    ]
    let gif = welcomeGif[Math.floor(Math.random() * welcomeGif.length)]
    const avt = member.user.displayAvatarURL()
    // console.log(avt)
    if (!channel) return
    let embed = new MessageEmbed()
      .setColor('RANDOM')
      .setThumbnail(avt)
      .setAuthor(`${member.user.tag}`, `${member.user.displayAvatarURL()}`)
      .addField(
        ':wave: | Bem-vindo(a)!',
        `<@${member}> espero que você se divirta no servidor!`
      )
      .setImage(gif)
      .setFooter(`${client.user?.username}`, client.user?.displayAvatarURL())
      .setTimestamp()
    channel.send({ embeds: [embed] })

    // Send the welcome message
    // channel.send({
    //   content: `Bem-vindo ${member} ao servidor!`,
    // })
  })
}

// Configuration for this feature
const config = {
  // The display name that server owners will see.
  // This can be changed at any time.
  displayName: 'Welcome Message',

  // The name the database will use to set if it is enabled or not.
  // This should NEVER be changed once set, and users cannot see it.
  dbName: 'WELCOME_MESSAGE',
}

export { config }
