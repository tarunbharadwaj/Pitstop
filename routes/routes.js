const express = require('express');
const router = express.Router();
const {
	getSeasonRacesSchedule,
	getCurrentDrivers,
	getDriverStats,
	getCurrentConstructorStandings,
	getCurrentDriverStandings,
	getDriverScores,
	getDriverStandings,
	anySeasonRaceSchedule,
	getDemo
} = require('../Controllers/controller');
const { scrapeLatestNews } = require('../Controllers/webScraper');

router.get('/raceschedule', getSeasonRacesSchedule);
router.get('/driverstats', getDriverStats);
router.get('/currentconstructorstandings', getCurrentConstructorStandings);
router.get('/currentdriverstandings', getCurrentDriverStandings);
router.get('/driver-score', getDriverScores);

router.get('/latestnews', scrapeLatestNews);

// router.get('/driverstandings', getDriverStandings);
router.get('/demolist', getDemo);

router.post('/anySeasonRaceSchedule', anySeasonRaceSchedule);

module.exports = router;
