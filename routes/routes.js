const express = require('express');
const router = express.Router();
const {
	getSeasonRacesSchedule,
	getCurrentDrivers,
	getConstructorStandings,
	getCurrentConstructorStandings,
	getCurrentDriverStandings,
	getDrivers,
	getDriverStandings,
	anySeasonRaceSchedule
} = require('../Controllers/controller');

router.get('/raceschedule', getSeasonRacesSchedule);
// router.get('/driverlist', getCurrentDrivers);
// router.get('/constructorstandings', getConstructorStandings);
router.get('/currentconstructorstandings', getCurrentConstructorStandings);
router.get('/currentdriverstandings', getCurrentDriverStandings);
// router.get('/drivers', getDrivers);
// router.get('/driverstandings', getDriverStandings);

router.post('/anySeasonRaceSchedule', anySeasonRaceSchedule);

module.exports = router;
