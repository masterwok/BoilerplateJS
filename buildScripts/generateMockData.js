
// This script gernates mock data for local development.
// This way you don't have to point to an actual API.


import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

/* eslint-disable  no-console */

// stringify the fake data generated by json schema faker that was run
// on the mock schema.
const json = JSON.stringify(jsf(schema));

// Save the stringified fake data database
fs.writeFile('./src/server/api/db.json', json, (error) => {
   if(error) {
      return console.log(chalk.red(error));
   }

   console.log(chalk.green('Mock data generated.'));
});
