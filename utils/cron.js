const cron = require('node-cron');
const axios = require('axios');

// Schedule the job to run every hour
cron.schedule('* * * * *', async () => {
	// console.log('Running the scraping job at:', new Date());

	try {
		const response = await axios.get('http://localhost:3000/latestnews');
		// console.log('Scraped Data:', response.data);
	} catch (error) {
		console.error('Error during scraping:', error.message);
	}
});
