const express = require('express')
const app = express()
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const port = new SerialPort('COM5', { baudRate: 9600 })

const parser = new Readline()
port.pipe(parser)
var value

parser.on('data', line => {
  console.log('Recebido: ' + line)
  value = line
})
// port.write('ROBOT POWER ON\n')

app.get('/', function (req, res) {
  res.json({ value });
})

app.listen(3000, function () {
  console.log('Servidor rodando na localhost:3000!');
})