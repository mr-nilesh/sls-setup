/* eslint-disable @typescript-eslint/no-var-requires */
const AppsyncSetup = require('./appsyncSetup');
const MergeSchema = require('./mergeSchema');

module.exports = (mtDirName, lambdaFunctionsDir) => {
  console.log('hook:before:offline:start');
  AppsyncSetup(mtDirName, lambdaFunctionsDir);
  MergeSchema();
};
