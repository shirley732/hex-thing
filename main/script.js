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
    }
}

const makeEmoji = function (emojiObject){
   const emojiContainer = document.createElement("div");
   emojiContainer.className = "emojiContainer";
   emojiContainer.innerHTML = emojiObject;
   emojiContainer.style.left = Math.round(Math.random() * window.innerWidth) + "px";
   emojiContainer.style.top = Math.round(Math.random() * window.innerHeight) + "px";
   emojiContainer.style.opacity = 0;
   console.log(emojiContainer);
   document.body.append(emojiContainer);
}

//inputEl.value = Math.round(Math.random() * 1000);
inputEl.value = "128512";

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

