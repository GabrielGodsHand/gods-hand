// Import this at the top of your component
if (typeof global === "undefined") {
  (globalThis as any).global = globalThis;
}

if (typeof Buffer === "undefined") {
  const { Buffer } = require("buffer");
  (globalThis as any).Buffer = Buffer;
}
