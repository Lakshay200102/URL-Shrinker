const mongoose = require("mongoose");
const shortId = require('shortid');

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function generateString(length=7) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log(result);
  return result;
}

const shortUrlSchema = new mongoose.Schema({
  fullUrl: {
    type: String,
    require: true,
  },
  shortUrl: {
    type: String,
    require: true,
    default: shortId.generate
  },
  clicks: {
    type: Number,
    require: true,
    default: 0,
  },
});

module.exports = mongoose.model("url", shortUrlSchema);
