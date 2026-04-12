use prost::Message;
use wasm_bindgen::prelude::*;

pub mod proto {
    pub mod main {
        include!(concat!(env!("OUT_DIR"), "/main.rs"));
    }
}

use proto::main::*;

#[wasm_bindgen]
pub fn encode(count: usize) -> Vec<u8> {
    let items = (0..count)
        .map(|i| Item {
            id: i as i32,
            name: format!("item_{}", i),
            values: vec![0.5; 50],
        })
        .collect();

    let payload = Payload { items };

    let mut buf = Vec::new();
    payload.encode(&mut buf).unwrap();

    buf
}

#[wasm_bindgen]
pub fn decode(ptr: *const u8, len: usize) {
    let bytes = unsafe { std::slice::from_raw_parts(ptr, len) };
    let _ = Payload::decode(bytes).unwrap();
}

#[wasm_bindgen]
pub fn hello_user(name: &str) -> String {
    format!("Hello, {}", name)
}
