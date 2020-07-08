const numberOfFilms = +prompt("How many movies have you seen?", "");
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const lastSeenMovie1 = prompt('Name your last seen video?', '');
const evaluation1 = prompt('Whats your rank for that movie?', '');
const lastSeenMovie2 = prompt('Name your last seen video?', '');
const evaluation2 = prompt('Whats your rank for that movie?', '');

personalMovieDb.movies[lastSeenMovie1] = evaluation1;
personalMovieDb.movies[lastSeenMovie2] = evaluation2;

console.log(personalMovieDb);