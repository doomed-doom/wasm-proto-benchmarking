use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello_user(name: &str) -> String {
    format!("Hello, {}", name)
}
