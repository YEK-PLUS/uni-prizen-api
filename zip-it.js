const { zipFunctions } = require('@netlify/zip-it-and-ship-it');

zipFunctions('modules', 'zips', {
  archiveFormat: 'zip',
});
