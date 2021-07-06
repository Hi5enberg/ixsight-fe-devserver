const express = require('express');
const app = express();

app.get(/.*/, (req, res, next) => {

  let spaRoutes = [
      '/healthdata/',
      '/benchmarks/'
  ];

  console.log(req.url)
  const isSpaRoute = spaRoutes.includes(req.url)
  if (isSpaRoute) req.url = '/';
  next();
});

app.use(express.static('../ixsight-frontend/dist/'));
app.listen(3000);