<<<<<<< HEAD
require('./src/infrastructure/database');
const app = require('./src/infrastructure/rest_server');

app.listen(4400, () => {
    console.log('REST server running on port 4400...');
=======
require('./src/infrastructure/database');
const app = require('./src/infrastructure/rest_server');

app.listen(4400, () => {
    console.log('REST server running on port 4400...');
>>>>>>> d92baf6a8178c2ba784912c2337a47f7bf3c3ecc
});