const movieArr = [];

class Movie {
    constructor(title, actor = "not defind"){
        this.title = title;
        this.actor = actor;
    }
    add(){
        movieArr.push(this);
    }
};

module.exports = { Movie, movieArr};