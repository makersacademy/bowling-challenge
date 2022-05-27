const express = require('express');
const Thermostat = require('./bowling');

const app = express();
const port = 3000;
const thermostat = new Thermostat();

app.get('/ temperature', (req, res) => {
  res.send(`Current temperature is ${thermostat.getTemperature()} degrees.`);
});

app.post('/up ', (req, res) => {
  res.send(`You increased temperature to ${thermostat.up()} degrees.`);
});

app.post('/down', (req, res) => {
  res.send(`You decreased temperature to ${thermostat.down()} degrees.`);
});

app.delete('/temperature', (req, res) => {
  res.send(`You reset the temperature to ${thermostat.reset()} degrees.`);
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);
