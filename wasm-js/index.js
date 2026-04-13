import protobuf from "protobufjs";

export async function initProto(fileurl = "../proto/main.proto") {
    const root = await protobuf.load(fileurl);
    return root.lookupType("Payload");
}

export function encode(payload, count) {
    if (!payload) throw new Error("Proto not initialized");

    const items = {
        items: Array.from({ length: count }, (_, i) => ({
            id: i,
            name: "item_" + i,
            values: Array(50).fill(0.5)
        }))
    };

    return payload.encode(items).finish();
}

export function decode(payload, buffer) {
    if (!payload) throw new Error("Proto not initialized");
    payload.decode(buffer);
}
