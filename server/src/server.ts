import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
  return res.json([
    {
      id: 1,
      name: 'Helou'
    },
    {
      id: 2,
      name: 'Jane'
    },
    {
      id: 3,
      name: 'Lee'
    },
  ]);
});

app.listen(3333, () => {
  console.log('Listening on port 3333...');
});