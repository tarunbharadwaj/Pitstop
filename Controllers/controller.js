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

/* To Fetch Current Year Drivers List */
/* exports.getCurrentDrivers = async (req, res) => {
	try {
		const driverList = await f1.getCurrentDrivers();
		if (driverList && driverList.length > 0) {
			// console.log(driverList);
			return res.status(200).json({ data: driverList });
		} else {
			console.log('No current driverList data found');
		}
	} catch (error) {
		console.error('Error fetching driverList:', error.message);
	}
}; */

/* To Fetch Constructor Standings for a given year and round */
/* exports.getConstructorStandings = async (req, res) => {
	try {
		const constructorStandings = await f1.getConstructorStandings(2024);
		if (constructorStandings) {
			// console.log(constructorStandings);
			return res.status(200).json({ data: constructorStandings });
		} else {
			console.log('No current constructorStandings data found');
		}
	} catch (error) {
		console.error('Error fetching constructorStandings:', error.message);
	}
}; */

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

/* To Fetch Particular Year Drivers List */
/* exports.getDrivers = async (req, res) => {
	try {
		const drivers = await f1.getDrivers(2023);
		if (drivers) {
			// console.log(drivers);
			return res.status(200).json({ data: drivers });
		} else {
			console.log('No current drivers data found');
		}
	} catch (error) {
		console.error('Error fetching drivers:', error.message);
	}
}; */

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
