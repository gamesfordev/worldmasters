const path = require('path');
const express = require('express');
const app = express();
const cors = require("cors");
app.use('/', express.static(path.join(__dirname, 'wm-client/dist/wm-client')))
app.use(cors());
module.exports = app;