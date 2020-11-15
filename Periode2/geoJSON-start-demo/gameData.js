const gameArea = 
    {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            12.616939544677733,
            55.6608359614475
          ],
          [
            12.584152221679688,
            55.6635471794298
          ],
          [
            12.570419311523438,
            55.658996099428364
          ],
          [
            12.561664581298828,
            55.64127089506216
          ],
          [
            12.636165618896484,
            55.63749235525952
          ],
          [
            12.604236602783201,
            55.64756765150652
          ],
          [
            12.616939544677733,
            55.6608359614475
          ]
        ]
      ]
    }
  }

  const players = [
    {
        "type": "Feature",
        "properties": {"name":"Peter"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.616939544677733,
            55.64902060538697
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"Hans"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.60457992553711,
            55.65802771626143
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"Jacob"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.612476348876953,
            55.642142814028084
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"Emilie"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.583637237548828,
            55.64776138180531
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"Laura"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.580032348632812,
            55.65560665353519
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name":"Gurli"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.58260726928711,
            55.637686135397544
          ]
        }
      }
    ]

  module.exports = {
    gameArea,
    players
  }