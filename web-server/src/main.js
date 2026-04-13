import payload from "./proto.js";
import { encode as jsEncode, decode as jsDecode } from "wasm-js";
import init, { encode as rustEncode, decode as rustDecode, hello_user } from "wasm-rs";
import "./style.css";

const Payload = payload.main.Payload;

let isBenchRunning = false;

document.addEventListener("DOMContentLoaded", async () => {
    await init();

    const input = document.getElementById("mainInput");
    const button = document.getElementById("acceptButton");
    const output = document.getElementById("testOutput");
    const select = document.getElementById("wasmSelect");

    input.addEventListener("input", () => handleInput(input));
    button.addEventListener("click", async () => {
        await handleButtonPress(input, output, select);
    });
    
    console.log("All loaded successfully!");
});

const handleInput = (input) => {
    input.value = input.value.replace(/[^0-9]/g, "");
};

const handleButtonPress = async (input, output, select) => {
    if (!input.value.trim() || !select.value.trim() || isBenchRunning) return;

    isBenchRunning = true;
    output.innerText = "Running...";

    const count = Number(input.value);
    const type = select.value.trim();
    const result = benchmark(count, type);

    output.innerText = `${result} ms`;
    isBenchRunning = false;
};

function benchmark(count, type) {
    if (type == "js") {
        const t0 = performance.now();
        const buf = jsEncode(Payload, count);
        jsDecode(Payload, buf);
        const t1 = performance.now();

        return t1 - t0;
    } else if (type == "rust") {
        const t0 = performance.now();
        const buf = rustEncode(count);
        rustDecode(buf);
        const t1 = performance.now();

        return t1 - t0;
    }
}