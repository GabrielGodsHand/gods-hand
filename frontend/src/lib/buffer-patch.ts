// src/lib/buffer-patch.ts
import { Buffer as NodeBuffer } from "buffer";

// Ensure global exists
if (typeof global === "undefined") {
  (globalThis as any).global = globalThis;
}

// Create extended buffer with all methods
const ExtendedBuffer = NodeBuffer;

// Add missing BigInt methods if they don't exist
if (!ExtendedBuffer.prototype.writeBigUInt64BE) {
  ExtendedBuffer.prototype.writeBigUInt64BE = function (
    value: bigint,
    offset: number = 0
  ) {
    const buf = this as any;
    const hi = Number(value >> 32n);
    const lo = Number(value & 0xffffffffn);
    buf.writeUInt32BE(hi, offset);
    buf.writeUInt32BE(lo, offset + 4);
    return offset + 8;
  };
}

if (!ExtendedBuffer.prototype.readBigUInt64BE) {
  ExtendedBuffer.prototype.readBigUInt64BE = function (offset: number = 0) {
    const buf = this as any;
    const hi = buf.readUInt32BE(offset);
    const lo = buf.readUInt32BE(offset + 4);
    return (BigInt(hi) << 32n) | BigInt(lo);
  };
}

if (!ExtendedBuffer.prototype.writeBigUInt64LE) {
  ExtendedBuffer.prototype.writeBigUInt64LE = function (
    value: bigint,
    offset: number = 0
  ) {
    const buf = this as any;
    const lo = Number(value & 0xffffffffn);
    const hi = Number(value >> 32n);
    buf.writeUInt32LE(lo, offset);
    buf.writeUInt32LE(hi, offset + 4);
    return offset + 8;
  };
}

if (!ExtendedBuffer.prototype.readBigUInt64LE) {
  ExtendedBuffer.prototype.readBigUInt64LE = function (offset: number = 0) {
    const buf = this as any;
    const lo = buf.readUInt32LE(offset);
    const hi = buf.readUInt32LE(offset + 4);
    return BigInt(lo) | (BigInt(hi) << 32n);
  };
}

// Add more missing methods that Aztec might need
if (!ExtendedBuffer.prototype.writeBigInt64BE) {
  ExtendedBuffer.prototype.writeBigInt64BE = function (
    value: bigint,
    offset: number = 0
  ) {
    const buf = this as any;
    const hi = Number(value >> 32n);
    const lo = Number(value & 0xffffffffn);
    buf.writeInt32BE(hi, offset);
    buf.writeUInt32BE(lo, offset + 4);
    return offset + 8;
  };
}

if (!ExtendedBuffer.prototype.readBigInt64BE) {
  ExtendedBuffer.prototype.readBigInt64BE = function (offset: number = 0) {
    const buf = this as any;
    const hi = buf.readInt32BE(offset);
    const lo = buf.readUInt32BE(offset + 4);
    return (BigInt(hi) << 32n) | BigInt(lo);
  };
}

if (!ExtendedBuffer.prototype.writeBigInt64LE) {
  ExtendedBuffer.prototype.writeBigInt64LE = function (
    value: bigint,
    offset: number = 0
  ) {
    const buf = this as any;
    const lo = Number(value & 0xffffffffn);
    const hi = Number(value >> 32n);
    buf.writeUInt32LE(lo, offset);
    buf.writeInt32LE(hi, offset + 4);
    return offset + 8;
  };
}

if (!ExtendedBuffer.prototype.readBigInt64LE) {
  ExtendedBuffer.prototype.readBigInt64LE = function (offset: number = 0) {
    const buf = this as any;
    const lo = buf.readUInt32LE(offset);
    const hi = buf.readInt32LE(offset + 4);
    return BigInt(lo) | (BigInt(hi) << 32n);
  };
}

// Force global setup - do this aggressively to override any other buffer setups
if (typeof window !== "undefined") {
  (window as any).Buffer = ExtendedBuffer;
  (window as any).global = window;
}

if (typeof global !== "undefined") {
  (global as any).Buffer = ExtendedBuffer;
}

(globalThis as any).Buffer = ExtendedBuffer;

// Also ensure the buffer constructor has the methods
Object.setPrototypeOf(Buffer.prototype, ExtendedBuffer.prototype);

export { ExtendedBuffer as Buffer };
