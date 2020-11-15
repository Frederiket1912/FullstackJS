const express = require('express')
const app = express()
const gju = require('geojson-utils');
//import {gameArea, players} from "./gameData";
const gameData = require('./gameData');
const gameArea = gameData.gameArea;
const players = gameData.players;

app.get('/', (req, res) => res.send('Geo Demo!'))

//check whether the caller is located in the game area
app.get('/geoapi/isuserinarea/:lon/:lat', (req, res) => {
    const point = {"type":"Point","coordinates":[req.params.lon,req.params.lat]}
    const result = gju.pointInPolygon(point, gameArea.geometry)
    if (result) {
        res.json({ status: true, msg: "Point was inside the tested polygon"})
    }
    else {
        res.json({ status: false, msg: "Point was NOT inside the tested polygon"})
    }
})

//find players near the caller
app.get('/geoapi/findNearbyPlayers/:lon/:lat/:rad', (req, res) => {
    const center = {"type":"Point","coordinates":[req.params.lon,req.params.lat]}
    const radius = req.params.rad;
    let players_in_radius = [];
    players.forEach( (p) => {
        if (gju.geometryWithinRadius(p.geometry, center, radius)) {
         players_in_radius.push(p);
        }
      })
    res.json(players_in_radius);
})

//find distance between called and another player
app.get('/geoapi/distanceToUser/:lon/:lat/:username', (req, res) => {
    const point = {"type":"Point","coordinates":[req.params.lon,req.params.lat]}
    let distance = false;
    players.forEach( (p) => {
        if (req.params.username === p.properties.name) {
          distance = gju.pointDistance(point, p.geometry)
        }
      })
    if (distance) {
        res.json({distance: distance, to: req.params.username});
    }
    else {
        res.status(404).send({msg: "User not found"});
    }    
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))