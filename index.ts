import DiscordJS, { Intents } from "discord.js"
import dotenv from "dotenv"
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on("ready", () => {
    console.log("Der Bot ist online")
})

client.on("messageCreate", (message) => {
    if(message.content === "ping") {
        message.reply({
            content: "pong", 
    })
    }
})

client.on("messageCreate", (message) => {
    if(message.content === "m- test") {
        message.reply({
            content: "Ich bin der beste Bot der Welt", 
    })
    }
})

client.login(process.env.TOKEN)