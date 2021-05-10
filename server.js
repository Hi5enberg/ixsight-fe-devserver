const express = require('express');
const app = express();
app.use(express.static('../ixsight-frontend/dist/'))
app.listen(3000)