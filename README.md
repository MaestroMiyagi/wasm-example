# TypeScript + Rust WebAssembly Example

A simple web application demonstrating how to call Rust functions compiled to WebAssembly from TypeScript.

## Overview

This project showcases:
- Rust code compiled to WebAssembly
- TypeScript frontend interacting with WebAssembly
- Simple arithmetic operations (addition and multiplication) performed in Rust

## Prerequisites

Before running this project, you need to have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [Rust](https://www.rust-lang.org/tools/install)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)
- [TypeScript](https://www.typescriptlang.org/download) (global install recommended)

## Installation

1. Clone this repository or create the files as shown in the project structure
2. Install dependencies:
```bash
npm install
```
3. Install wasm-pack (if not already installed):
```bash
cargo install wasm-pack
```

# Build and Run

## Development Workflow

1. Compile Rust to WebAssembly:
```bash
npm run build:rust
```
2. Compile TypeScript:
```bash
npm run build:ts
```
3. Start the development server:
```bash
npm run serve
```
The application will be available at http://localhost:3000

## Single Command Build
You can also build everything with:
```bash
npm run build
```
Project Structure
```bash
wasm-example/
├── index.html            # Main HTML file
├── style.css             # CSS styles
├── src/
│   ├── main.ts           # TypeScript entry point
│   ├── lib.rs            # Rust source code
├── pkg/                  # Generated WASM package (created by wasm-pack)
├── package.json          # Node.js dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── Cargo.toml            # Rust package configuration
```

## How It Works
1. The Rust code (`lib.rs`) defines two simple arithmetic functions marked with `#[wasm_bindgen]` to make them available to JavaScript.
2. `wasm-pack` compiles the Rust code to WebAssembly.
3. The TypeScript code (`main.ts`) imports and initializes the WebAssembly module.
4. The web interface allows users to input two numbers and see the results of the Rust functions.

## Customizing
To add more Rust functions:
1. Add new functions in lib.rs with `#[wasm_bindgen]` attribute
2. Recompile with npm run build:rust
3. Import and use the new functions in main.ts

## Troubleshooting
If you encounter issues:
- Make sure all prerequisites are installed
- Check that wasm-pack is in your PATH
- Verify Node.js and npm versions are up to date
- Clear browser cache if changes aren't appearing