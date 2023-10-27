const emojiGallery = document.getElementById("emoji-gallery");
const emojis = [
    "&#128512;", "&#128514;", "&#128515;", "&#128516;", "&#128525;", "&#128526;",
    "&#128536;", "&#128540;", "&#128578;", "&#128588;", "&#128591;", "&#128640;"
];

for (const emoji of emojis) {
    const emojiItem = document.createElement("div");
    emojiItem.className = "emoji-item";
    emojiItem.innerHTML = `<p>${emoji}</p><p class="emoji-code">${getEmojiCode(emoji)}</p>`;
    emojiGallery.appendChild(emojiItem);
}

function getEmojiCode(emoji) {
    const decimalCode = emoji.substring(2, emoji.length - 1);
    const hexCode = parseInt(decimalCode).toString(16);
    return hexCode;
}