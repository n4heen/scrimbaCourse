const emojiContainer = document.getElementById("emoji-container")
const myEmojis = ["👨‍💻", "⛷", "🍲"]

for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}

