const {parse} = require('csv-parse');
const fs = require('fs');

const results = [];

fs.createReadStream('kepler_data.csv', {encoding: 'utf8'})
.on('data', (data) => {
    results.push(data);
})
.on('error', (err) => {
    console.log(err);
})
.on('end', () => {
    console.log(results);
})





