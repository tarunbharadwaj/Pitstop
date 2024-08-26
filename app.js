const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const axios = require('axios');
// const cheerio = require('cheerio');
// const path = require('path');

const app = express();
const apiRoutes = require('./routes/routes');
const port = process.env.PORT || 3000;

// const F1_URL = 'https://www.formula1.com/en/latest/all';

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use('/', apiRoutes);

/* axios
	.get(F1_URL)
	.then((response) => {
		const $ = cheerio.load(response.data);
		const headlines = [];

		$('.bg-warmWhite').each((index, element) => {
			headlines.push($(element).text().trim());
		});
		console.log(headlines);
	})
	.catch((error) => {
		console.error('Error fetching news:', error);
	}); */

/* app.get('/news', async (req, res) => {
	try {
		const { data } = await axios.get(F1_URL);
		const $ = cheerio.load(data);
		const drivers = [];

		$('.bg-brand-white').each((index, element) => {
			const driver = {
				position: $(element).find('td:nth-child(2)').text().trim(),
				name: $(element).find('td:nth-child(3)').text().trim(),
				nationality: $(element).find('td:nth-child(4)').text().trim(),
				car: $(element).find('td:nth-child(5)').text().trim(),
				points: $(element).find('td:nth-child(6)').text().trim()
			};
			drivers.push(driver);
			console.log(drivers);
		});

		res.json(drivers);
		// console.log(res.json(drivers));
	} catch (error) {
		console.error(error);
		res.status(500).send('Error fetching data');
	}
}); */


// app.use(express.static(path.join(__dirname, 'frontend/dist/f1-app')));

// Catch-all route to handle Angular routing
/* app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/f1-app/index.html'));
}); */



app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`App listening at ${port}`);
});
