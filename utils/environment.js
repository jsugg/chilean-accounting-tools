const appPath = require('app-root-path');

function getEnvironmentPath() {
    const environment = process.env.NODE_ENV;
    const environmentMap = {
      production: { file: '.env.production', path: `config/${environment}` },
      staging: { file: '.env.staging', path: `config/${environment}` },
      development: { file: '.env.development', path: `config/${environment}` }
    };
    return `${appPath}/${environmentMap[environment].path}/${environmentMap[environment].file || '.env'}`;
  }
  
  module.exports = getEnvironmentPath;