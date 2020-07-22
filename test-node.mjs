import fs from "fs";

(async () => {
  const bin = fs.readFileSync("./add.wasm");
  const wasm = await WebAssembly.instantiate(bin);
  const ex = wasm.instance.exports;
  const add = ex.add;
  console.log(add(1, 2));
})();
