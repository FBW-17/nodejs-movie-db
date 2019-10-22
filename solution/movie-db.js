let movies = [];

module.exports.addMovie = (title) => {
  let objMovieNew = {
    id: movies.length + 1,
    title: title
  }
  movies.push(objMovieNew);
}

module.exports.showMovies = () => {
  console.log("Current movie list:")
  console.log(movies);
  console.log()
}
