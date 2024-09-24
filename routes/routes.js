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
	anySeasonRaceSchedule
} = require('../Controllers/controller');

router.get('/raceschedule', getSeasonRacesSchedule);
// router.get('/driverlist', getCurrentDrivers);
router.get('/driverstats', getDriverStats);
router.get('/currentconstructorstandings', getCurrentConstructorStandings);
router.get('/currentdriverstandings', getCurrentDriverStandings);
router.get('/driver-score', getDriverScores);
// router.get('/driverstandings', getDriverStandings);

router.post('/anySeasonRaceSchedule', anySeasonRaceSchedule);

module.exports = router;
