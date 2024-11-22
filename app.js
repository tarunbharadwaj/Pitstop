const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./utils/cron'); //to initialise Cron-job

const app = express();
const apiRoutes = require('./routes/routes');
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use('/', apiRoutes);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`App listening at ${port}`);
});
