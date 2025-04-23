const inputEl = document.querySelector("#numberInput");
const hexEl = document.querySelector("#hexOutput");
const octalEl = document.querySelector("#octalOutput");
const binaryEl = document.querySelector("#binaryOutput");

inputEl.addEventListener("input", e => {
    const num = inputEl.value;

    hexEl.textContent = `0x${parseInt(num).toString(16)}`;
    octalEl.textContent = `0o${parseInt(num).toString(8)}`;
    binaryEl.textContent = `0b${(num >>> 0).toString(2)}`;
});

document.addEventListener("scroll", e => {
    console.log(e);
});