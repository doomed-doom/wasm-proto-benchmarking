import payload from "./proto.js";
import { encode, decode } from "wasm-js";
import "./style.css";

const Payload = payload.main.Payload;

let isBenchRunning = false;

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("mainInput");
    const button = document.getElementById("acceptButton");
    const output = document.getElementById("testOutput");

    input.addEventListener("input", () => handleInput(input));
    button.addEventListener("click", async () => {
        await handleButtonPress(input, output);
    });
});

const handleInput = (input) => {
    input.value = input.value.replace(/[^0-9]/g, "");
};

const handleButtonPress = async (input, output) => {
    if (!input.value.trim() || isBenchRunning) return;

    isBenchRunning = true;
    output.innerText = "Running...";

    const count = Number(input.value);
    const result = benchmark(count);

    output.innerText = `${result.toFixed(3)} ms`;
    isBenchRunning = false;
};

function benchmark(count) {
    const t0 = performance.now();
    const buf = encode(Payload, count);
    decode(Payload, buf);
    const t1 = performance.now();

    return t1 - t0;
}