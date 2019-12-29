module.exports.run = async(client, message, args) => {
  if(!args) return message.channel.send("Vous devez donner un message a dire")
  message.channel.send(args.join(" ")
}
