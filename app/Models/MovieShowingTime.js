'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MovieShowingTime extends Model {
    static get createdAtColumn () {
        return null;
    }

    static get updatedAtColumn () {
        return null;
    }

    movie_showing(){
        return this.belongsTo('App/Models/MovieShowing');
    }

    booking(){
        return this.hasMany('App/Models/Booking');
    }
}

module.exports = MovieShowingTime
