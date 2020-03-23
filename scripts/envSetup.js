const fs = require("fs");
const path = require("path");

const envName = ".env";

const addEnvFile = ({pathEnvSource = ".env.default", pathEnvTarget}) => {
  if (fs.existsSync(pathEnvSource) && !fs.existsSync(pathEnvTarget)) {
    // eslint-disable-next-line no-console
    console.log(`🌦 Adding .env file... [${pathEnvTarget}]`);

    fs.createReadStream(pathEnvSource).pipe(
      fs.createWriteStream(pathEnvTarget),
    );
  }
};

addEnvFile({pathEnvTarget: envName});

const packagesFolder = path.join(process.cwd(), "packages");

fs.readdirSync(packagesFolder)
  .filter((packageName) => !packageName.includes("."))
  .forEach((packageName) => {
    const pathEnvTarget = path.join(packagesFolder, packageName, envName);

    addEnvFile({pathEnvTarget});
  });
