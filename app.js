const app = require('express')();

app.use('/', (res, req) => {
  res.statusCode = 200;
  res.send({ dene: true });
});

app.listen(8080, () => console.log('SERVER UP ON PORT 8080'));
