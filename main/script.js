const inputEl = document.querySelector("#numberInput");
const hexEl = document.querySelector("#hexOutput");
const octalEl = document.querySelector("#octalOutput");
const binaryEl = document.querySelector("#binaryOutput");

inputEl.value = Math.round(Math.random() * (Math.random() * (Math.random() * 1000) * Math.random()));

inputEl.addEventListener("input", calculate(Number(inputEl.value)));

function calculate(num){
    hexEl.textContent = `0x${Number(num).toString(16)}`;
    octalEl.textContent = `0o${Number(num).toString(8)}`;
    binaryEl.textContent = `0b${Number(num).toString(2)}`;
};
document.addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
        inputEl.value = Number(inputEl.value) + 1;
    }
    else if (event.deltaY > 0) {
        inputEl.value = Number(inputEl.value) - 1;
    }
})