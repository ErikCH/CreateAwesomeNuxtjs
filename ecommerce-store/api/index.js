var express = require('express');
var app = express();

app.get('/', (req, res) => {
  const gameInfo = [
    {
      title: 'Ori And The Will Of The Wisps',
      description: 'This is a description for Ori'
    },
    {
      title: 'Life Is Strange 2',
      description:
        'This is a description for Life is Strange'
    },
    {
      title: 'Call of Duty',
      description: 'This is a description of Call of Duty'
    },
    {
      title: 'World Of Warcraft',
      description: 'This is a description World Of Warcraft'
    }
  ];
  const found = gameInfo.filter(game => {
    return game.title === req.query.title;
  });
  res.json(found[0].description);
});

module.exports = {
  path: '/api/',
  handler: app
};
