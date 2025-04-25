const inputEl = document.querySelector("#numberInput");
const hexEl = document.querySelector("#hexOutput");
const octalEl = document.querySelector("#octalOutput");
const binaryEl = document.querySelector("#binaryOutput");

const calculateValues = function () {
    const num = BigInt(inputEl.value);

    hexEl.textContent = `0x${num.toString(16)}`;
    octalEl.textContent = `0o${num.toString(8)}`;
    binaryEl.textContent = `0b${num.toString(2)}`;

    if (!emojis) {
        fetchEmojis();
    }

    else if (emojis.find(input => input.codePoint === num.toString(16).toUpperCase())) {
        const emojiObject = emojis.find(input => input.codePoint === num.toString(16).toUpperCase());
        makeEmoji(emojiObject.character)
        console.log(emojiObject.character)
        window.alert(emojiObject.character);
    }
}
function makeEmoji(emoji){
   const emojiContainer = document.createElement("div")
   emojiContainer.innerHTML = emoji
   document.body.append(emojiContainer)
}
inputEl.value = Math.round(Math.random() * 1000);
calculateValues();

inputEl.addEventListener("input", e => {
    calculateValues();
});

document.addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
        inputEl.value = Number(inputEl.value) + 1;
    }
    else if (event.deltaY > 0) {
        inputEl.value = Number(inputEl.value) - 1;
    }
    calculateValues();
});

