const inputEl = document.querySelector("#numberInput");
const hexEl = document.querySelector("#hexOutput");
const octalEl = document.querySelector("#octalOutput");
const binaryEl = document.querySelector("#binaryOutput");

inputEl.addEventListener("input", e => {
    const num = inputEl.value;

    console.log(typeof num);

    hexEl.textContent = parseInt(num).toString(16);
    octalEl.textContent = parseInt(num).toString(8);
    binaryEl.textContent = (num >>> 0).toString(2);
});