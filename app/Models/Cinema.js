'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cinema extends Model {

    static get createdAtColumn(){
        return null;
    }
    static get updatedAtColumn(){
        return null;
    }

    movie_showing(){
        return this.hasMany('App/Models/MovieShowing');
    }

    rooms(){
        return this.hasMany('App/Model/Room');
    }

}

module.exports = Cinema
