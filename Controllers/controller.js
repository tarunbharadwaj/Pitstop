const f1Api = require('f1-api-node'); //Web scapper
const f1 = require('f1-api'); //Node package built over eargst api

/* To Fetch 2024 Race Schedule List */
exports.getSeasonRacesSchedule = async (req, res) => {
	try {
		const schedule = await f1.getSeasonRacesSchedule(2024); //Do not change this year
		if (schedule && schedule.length > 0) {
			// schedule = res.json(schedule)
			// console.log(schedule);
			return res.status(200).json({ data: schedule });
		} else {
			console.log('No current schedule data found');
		}
	} catch (error) {
		// res.status(500).json({ error: 'Failed to fetch driver data' });
		console.error('Error fetching driver standings:', error.message);
	}
};

/* To Fetch Current Year Constructor Standings */
exports.getCurrentConstructorStandings = async (req, res) => {
	try {
		const currentconstructorStandings =
			await f1.getCurrentConstructorStandings();
		if (currentconstructorStandings) {
			// console.log(currentconstructorStandings);
			return res.status(200).json({ data: currentconstructorStandings });
		} else {
			console.log('No current currentconstructorStandings data found');
		}
	} catch (error) {
		console.error(
			'Error fetching currentconstructorStandings:',
			error.message
		);
	}
};

/* To Fetch Current Year Drivers Standings */
exports.getCurrentDriverStandings = async (req, res) => {
	try {
		const currentDriverStandings = await f1.getCurrentDriverStandings();
		if (currentDriverStandings) {
			// console.log(currentDriverStandings);
			return res.status(200).json({ data: currentDriverStandings });
		} else {
			console.log('No current currentDriverStandings data found');
		}
	} catch (error) {
		console.error('Error fetching currentDriverStandings:', error.message);
	}
};

/* To Fetch Any Year Race Schedule List :: Max Year 1950 */
exports.anySeasonRaceSchedule = async (req, res) => {
	try {
		const selectedYear = req.body.year;
		const schedule = await f1.getSeasonRacesSchedule(selectedYear);
		if (schedule && schedule.length > 0) {
			console.log(schedule);
			return res.status(200).json({ data: schedule });
		} else {
			console.log('No current schedule data found');
		}
	} catch (error) {
		// res.status(500).json({ error: 'Failed to fetch driver data' });
		console.error('Error fetching driver standings:', error.message);
	}
};

/* To Fetch Drivers names for the particular season */
exports.getDriverScores = async (req, res) => {
	try {
		const drivers = await f1.getDrivers(2024);
		if (drivers) {
			// console.log(drivers);
			return res.status(200).json({ data: drivers });
		} else {
			console.log('No current drivers data found');
		}
	} catch (error) {
		console.error('Error fetching drivers:', error.message);
	}
};

/* To Fetch Driver Stats */
exports.getDriverStats = async (req, res) => {
	try {
		const driverStats = await f1.getCurrentDriverStandings();
		// const driverStats = await f1.getDriverStandings(2023);
		if (driverStats) {
			// console.log(constructorStandings);
			return res.status(200).json({ data: driverStats });
		} else {
			console.log('No driverStats data found');
		}
	} catch (error) {
		console.error('Error fetching driverStats:', error.message);
	}
};


/* To Fetch Particular Year Drivers Standing List */
// exports.getDriverStandings = async (req, res) => {
// 	try {
// 		const drivers = await f1.getDriverStandings(2023);
// 		if (drivers) {
// 			return res.status(200).json({ data: drivers });
// 		} else {
// 			console.log('No current drivers data found');
// 		}
// 	} catch (error) {
// 		console.error('Error fetching drivers:', error.message);
// 	}
// };

/* DEMO API */
exports.getDemo = async (req, res) => {
	try {
		// const demoList = await f1.getDriverStandings(2020);
		const demoList = await f1.getDrivers(2024);
		if (demoList) {
			// console.log(demoList);
			return res.status(200).json({ data: demoList });
		} else {
			console.log('No current demoList data found');
		}
	} catch (error) {
		console.error('Error fetching demoList:', error.message);
	}
};
