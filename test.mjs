const bin = await (await fetch('http://127.0.0.1:8080/add.wasm')).arrayBuffer();
//const bin = Deno.readFileSync("./add.wasm");
const wasm = await WebAssembly.instantiate(bin);
const ex = wasm.instance.exports;
const add = ex.add;
console.log(add(1, 2));
