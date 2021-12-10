// import { movies as array } from './data.js';
array = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  console.log("EXERCISE 1 ->", result);

  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  console.log("EXERCISE 2 ->", result);

  return result;
}

// Exercise 3 bis: Calculate Any Average.
function moviesAverage(array) {
  let moviesWithScore = array.filter(movie => Number.isFinite(movie.score));
  let moviesScoreSum = moviesWithScore.reduce((acc, movie) => acc + movie.score, 0);
  let moviesScoreAverage = moviesScoreSum / moviesWithScore.length;
  let result = +moviesScoreAverage.toFixed(2);
  console.log("EXERCISE 3 moviesAverage() ->", result);
  
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorMovies = array.filter(movie => movie.director === director);
  let result = moviesAverage(directorMovies);
  console.log("EXERCISE 3 ->", result);

  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let result = array.slice(0).sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20).map(movie => movie.title);
  console.log("EXERCISE 4 ->", result);

  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let orderedMoviesByYear = array.slice(0).sort((a, b) => {
    let aDate = a.year; let bDate = b.year; let compareDate = aDate - bDate;
    if (compareDate === 0) {
      compareDate = a.title.localeCompare(b.title);
    }
    return compareDate;
  });
  let result = orderedMoviesByYear;
  console.log("EXERCISE 5 ->", result);

  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let categoryMovies = array.filter(movie => movie.genre.includes(category))
  let result = moviesAverage(categoryMovies);
  console.log("EXERCISE 6 ->", result);

  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let moviesWithDurationInMinutes = movies.map(movie => {
    let duration = movie.duration;
    let hours = (/(\d*)h/.exec(duration) && +/(\d*)h/.exec(duration)[1]);
    let minutes = (/(\d*)min/.exec(duration) && +/(\d*)min/.exec(duration)[1]);
    let hoursAsMinutes = hours * 60;
    let totalMinutes = hoursAsMinutes + minutes;
    return {
      ...movie,
      duration: totalMinutes,
      oldDuration: movie.duration
    }
  })
  console.log("EXERCISE 7 ->", moviesWithDurationInMinutes);

  return moviesWithDurationInMinutes;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let moviesFromYear = array.slice(0).filter(movie => movie.year === year);
  let result = moviesFromYear.sort((a, b) => a.score > b.score).slice(0, 1);
  console.log("EXERCISE 8 ->", year, result);

  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}