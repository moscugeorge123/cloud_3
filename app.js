const app = require('express')();

app.use('/', (req, res) => {
  res.statusCode = 200;
  res.send({ dene: true });
});

app.listen(8080, () => console.log('SERVER UP ON PORT 8080'));
