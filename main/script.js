const inputEl = document.querySelector("#numberInput");
const hexEl = document.querySelector("#hexOutput");
const octalEl = document.querySelector("#octalOutput");
const binaryEl = document.querySelector("#binaryOutput");

const calculateValues = function () {
    const num = inputEl.value;

    hexEl.textContent = `0x${parseInt(num).toString(16)}`;
    octalEl.textContent = `0o${parseInt(num).toString(8)}`;
    binaryEl.textContent = `0b${(num >>> 0).toString(2)}`;
}

inputEl.value = Math.round(Math.random() * 1000000000);
calculateValues();

inputEl.addEventListener("input", e => {
    calculateValues();
});

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
    calculateValues();
})