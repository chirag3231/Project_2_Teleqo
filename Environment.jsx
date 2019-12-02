let env;
if (process.env.NODE_ENV === "production") {
   env = require("../production-env");
} else {
    env = require('../development-env');
}

export function getEnvValue(key) {
    return env[key]
}
