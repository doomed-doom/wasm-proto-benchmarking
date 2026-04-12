import protobuf from "protobufjs";

const root = await protobuf.load("../proto/main.proto");
const Payload = root.lookupType("Payload");

function encode(count) {
    const payload = {
        items: Array.from({ length: count }, (_, i) => ({
            id: i,
            name: "item_" + i,
            values: Array(50).fill(0.5)
        }))
    };

    return Payload.encode(payload).finish();
}

function decode(buffer) {
    Payload.decode(buffer);
}
