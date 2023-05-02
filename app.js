// Requiring libraries
const path = require('path');
const express = require('express');
const app = express();

//Rising the local server
app.listen(3030, console.log('server running in port 3030'));

//Linking the public folder
app.use(express.static(path.resolve(__dirname, "./public")));

//Linking Views
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/index.html')));
app.get('/babbage', (req, res) => res.sendFile(path.resolve(__dirname, './views/babbage.html')));
app.get('/berners-lee', (req, res) => res.sendFile(path.resolve(__dirname, './views/berners-lee.html')));
app.get('/clarke', (req, res) => res.sendFile(path.resolve(__dirname, './views/clarke.html')));
app.get('/hamilton', (req, res) => res.sendFile(path.resolve(__dirname, './views/hamilton.html')));
app.get('/hopper', (req, res) => res.sendFile(path.resolve(__dirname, './views/hopper.html')));
app.get('/lovelace', (req, res) => res.sendFile(path.resolve(__dirname, './views/lovelace.html')));
app.get('/turing', (req, res) => res.sendFile(path.resolve(__dirname, './views/turing.html')));