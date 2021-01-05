const crypto = require("crypto");

// MD5
function MD5(value) {
  return crypto
    .createHash("md5")
    .update(value)
    .digest("hex");
}

// Base64
function base64(value) {
  return Buffer.from(value).toString("base64");
}

// hmacsha1
function hmacsha1(secret, value) {
  return crypto.createHmac('sha1', secret).update(value, 'utf-8').digest().toString('base64');
}

const bucketname = "111";  // 空间名
const key = "123"; // 操作员
const secret = "321"; // 密码
const upyunUrl = 'http://v0.api.upyun.com/'

let expiration = ((Date.now() / 1000) >>> 0) + 30 * 60;
let method = "POST";

let policy = base64(
  JSON.stringify({
    bucket: bucketname,
    "save-key": "/{filename}{.suffix}",
    expiration: expiration
  })
);

let authorization =
  "UPYUN " +
  key +
  ":" +
  hmacsha1(MD5(secret), method + "&/" + bucketname + "&" + policy);

console.log({
  authorization,
  policy
})


