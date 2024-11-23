const puppeteer = require('puppeteer');

exports.scrapeLatestNews = async (req, res) => {
	try {
		const browser = await puppeteer.launch({
			headless: true,
			args: [
				'--no-sandbox',
				'--disable-setuid-sandbox',
				'--disable-dev-shm-usage',
				'--disable-accelerated-2d-canvas',
				'--disable-gpu'
			]
		});
		const page = await browser.newPage();

		// Go to F1 website
		await page.goto(
			'https://www.formula1.com/en/latest/all?articleFilters=News&page=1.html',
			{
				waitUntil: 'load',
				timeout: 0
			}
		);

		// Wait for the container to load
		await page.waitForSelector('ul#article-list'); // Replace with your selector's ID or container

		// Extract the data
		const newsData = await page.evaluate(() => {
			// Select all news items in the list
			const newsItems = Array.from(
				document.querySelectorAll('ul#article-list li') // Adjust this selector to target news links
			);

			return newsItems.map((item) => {
				const titleElement = item.querySelector('p'); // Extract title
				const linkElement = item.querySelector('a'); // Extract link
				const imageElement = item.querySelector('img'); // Extract image
				// Extract data
				const title = titleElement ? titleElement.innerText.trim() : null;
				const link = linkElement ? linkElement.href : null;
				const image = imageElement ? imageElement.src : null;

				return { title, link, image };
			});
		});

		await browser.close();

		return res.status(200).json({ data: newsData });
	} catch (error) {
		console.error('Error fetching latest news:', error.message);
	}
};
