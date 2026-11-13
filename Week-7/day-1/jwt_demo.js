/**
 * Week 7 - Day 1: JWT Exploration & Tamper Experiment Script
 * Demonstrates:
 * 1. Generating a standard JWT with Header, Payload, and Signature
 * 2. Decoding without secret (Header & Payload are Base64Url encoded, NOT encrypted)
 * 3. Verifying with secret
 * 4. Simulating a tampering attack (modifying payload) and observing verification failure
 */

const crypto = require("crypto");

// Secret key known only to the backend server
const JWT_SECRET = "supersecretkey123";

// Helper: Base64Url encoding
function base64UrlEncode(str) {
  return Buffer.from(str)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

// Helper: Base64Url decoding
function base64UrlDecode(str) {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  return Buffer.from(base64, "base64").toString("utf-8");
}

// Helper: Create HMAC SHA256 signature
function createSignature(headerB64, payloadB64, secret) {
  return crypto
    .createHmac("sha256", secret)
    .update(`${headerB64}.${payloadB64}`)
    .digest("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

console.log("==================================================");
console.log("       WEEK 7 DAY 1: JWT DEEP DIVE & LAB         ");
console.log("==================================================\n");

// 1. Define Header and Payload
const header = {
  alg: "HS256",
  typ: "JWT"
};

const payload = {
  id: 1,
  name: "Aman",
  role: "user",
  iat: Math.floor(Date.now() / 1000)
};

const headerEncoded = base64UrlEncode(JSON.stringify(header));
const payloadEncoded = base64UrlEncode(JSON.stringify(payload));
const signature = createSignature(headerEncoded, payloadEncoded, JWT_SECRET);

const jwtToken = `${headerEncoded}.${payloadEncoded}.${signature}`;

console.log("1. Generated Valid JWT Token:");
console.log(jwtToken);
console.log("\nStructure:");
console.log("- Header (Red):    ", headerEncoded);
console.log("- Payload (Green): ", payloadEncoded);
console.log("- Signature (Blue):", signature);

// 2. Decode Payload without Secret (Proves payload is readable by anyone)
console.log("\n2. Decoding Payload without Secret:");
const decodedHeader = JSON.parse(base64UrlDecode(headerEncoded));
const decodedPayload = JSON.parse(base64UrlDecode(payloadEncoded));
console.log("Decoded Header:", decodedHeader);
console.log("Decoded Payload:", decodedPayload);

// 3. Verification Function
function verifyToken(token, secret) {
  const parts = token.split(".");
  if (parts.length !== 3) return { valid: false, error: "Malformed token" };

  const [h, p, s] = parts;
  const expectedSig = createSignature(h, p, secret);

  if (crypto.timingSafeEqual(Buffer.from(s), Buffer.from(expectedSig))) {
    return { valid: true, payload: JSON.parse(base64UrlDecode(p)) };
  } else {
    return { valid: false, error: "Signature verification failed! Token has been tampered with." };
  }
}

console.log("\n3. Verifying Original Token:");
console.log(verifyToken(jwtToken, JWT_SECRET));

// 4. Tampering Experiment
console.log("\n4. Tampering Experiment (Attacker elevates role from 'user' to 'admin'):");
const tamperedPayload = { ...decodedPayload, role: "admin" };
const tamperedPayloadEncoded = base64UrlEncode(JSON.stringify(tamperedPayload));
const tamperedToken = `${headerEncoded}.${tamperedPayloadEncoded}.${signature}`;

console.log("Tampered Token (Payload changed, old signature kept):");
console.log(tamperedToken);

const verificationResult = verifyToken(tamperedToken, JWT_SECRET);
console.log("Verification result for tampered token:");
console.log(verificationResult);
console.log("\nOutcome: Server rejected the token because signature did not match the payload!");
