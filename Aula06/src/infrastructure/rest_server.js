<<<<<<< HEAD
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

require('../port/movie_api')(app);

=======
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

require('../port/movie_api')(app);

>>>>>>> d92baf6a8178c2ba784912c2337a47f7bf3c3ecc
module.exports = app;