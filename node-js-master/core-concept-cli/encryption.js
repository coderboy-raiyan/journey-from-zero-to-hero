const crypto = require("crypto");

const algorithm = "aes-256-cbc";

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm);
}
