// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (movies) => {
  return movies.map((movie) => movie.director);
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const noDuplicates = (movies) => {
  const directors = getAllDirectors(movies)
  return directors.filter((movie, index) => 
    directors.indexOf(movie) === index);
  };

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/*
const howManyMovies = (movies) => {
  movies.filter(
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"){
      return true;
    )
  } return movies.filter.length;
}
*/

const howManyMovies = (movies) => {
  return movies.filter((movie) => {
      const isDirectedByStevenSpielberg = movie.director === 'Steven Spielberg';
      const isDramaMovie = movie.genre.includes('Drama');
      return isDirectedByStevenSpielberg && isDramaMovie;
    }).length;
  };



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (movies)  => {
  if (!movies.length) {
    return 0;
  }
  const rates = movies
    .map((movie) => movie.rate)
    .map((rate) => {
      if (typeof rate === 'number') {
        return rate;
      } else {
        return 0;
      }
    });
  const sum = rates.reduce((accumulator, rate) => + accumulator + rate, 0);
  const average = sum / rates.length;
  return Math.round(average *100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
  const isDramaMovie = movies.filter((movie) => movie.genre.includes('Drama'));
  if (!isDramaMovie.length) {
    return 0;
  }
  const rates = isDramaMovie
    .map((movie) => movie.rate)
    .map((rate) => {
      if (typeof rate === 'number') {
        return rate;
      } else {
        return 0;
      }
    });
  const sum = rates.reduce((accumulator, rate) => accumulator + rate, 0);
  const average = sum / rates.length;
  return Math.round(average *100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
