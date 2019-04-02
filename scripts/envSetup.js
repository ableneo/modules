const fs = require("fs");

const example = ".env.default";
const env = ".env";

if (fs.existsSync(example) && !fs.existsSync(env)) {
  // eslint-disable-next-line no-console
  console.log(`🌦 Adding .env file...`);

  fs.createReadStream(example).pipe(fs.createWriteStream(env));
}
