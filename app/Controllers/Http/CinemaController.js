'use strict'

const Cinema = use('App/Models/Cinema');
const Genre = use('App/Models/Genre');
const moment = require('moment');
class CinemaController {
    async allCinema({response}){
        const cinemas = await Cinema.query().withCount('rooms as number');

    }
}

module.exports = CinemaController
