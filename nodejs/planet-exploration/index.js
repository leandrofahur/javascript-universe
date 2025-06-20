const {parse} = require('csv-parse');
const fs = require('fs');
const { type } = require('os');

const results = [];
const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}


fs.createReadStream('kepler_data.csv')
.pipe(parse(
    {
        comment: '#',
        columns: true,
    }
))
.on('data', (data) => {
    results.push(data);
    if(isHabitablePlanet(data)) {
        habitablePlanets.push(data);
    }
})
.on('error', (err) => {
    console.log(err);
})
.on('end', () => {
    // console.log(results);
    console.log(`${habitablePlanets.length} habitable planets found!`);
    console.log(habitablePlanets);
})


