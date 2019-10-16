# Instructions for students

## MovieDB - The Movie Database

Create a file "movie-db.js" which defines an array of movies at the top.

Each movie in our array should be an object of this format:
`{ id: <unique-number>, title: <title> }`

So a final list could look like this:

```
[
  {id: 1, title: "One flew over the cuckoo's nest"},
  {id: 2, title: "The Shawshank Redemption"},
  {id: 3, title: "Alice in Wonderland"},
  {id: 4, title: "Vertigo"},
]
```

Please provide and export two functions that people importing our module can use: showMovies() and addMovie()

- addMovie(title)
  - this function adds a new movie to our array (= our database) of movies
  - Give each new movie a unique ID. For now: Just use the length of the movies array and add one. Example: We have 3 movies in our DB. So the fourth movie we add gets the id 3 (=current amount of movies) + 1 = 4. This way we assure each new movie will get its own, unique identifier

- showMovies()
  - this prints all our movies in our array to the console

Important: Don't export the movie array itself!! It should be kept private to the module. Nobody should be able to access our movies directly from outside.

Part 2 - using our movie library:

Create a file index.js. This file imports our movie library with its functions.

Add a first movie by using the addMovie() function.

Afterwards print the list of movies using showMovies().

Now add three more movies.

Afterwards: Print the list of movies again.

Example calls and output:
(add your favorite movies to your DB please ;-)):

```
addMovie("One flew over the cuckoo's nest")
showMovies()
// will print:
// [ {id: 1, title: "One flew over the cuckoo's nest"} ]


addMovie("The Shawshank Redemption")
addMovie("Alice in Wonderland")
addMovie("Vertigo")

showMovies()
// will print:
[
  {id: 1, title: "One flew over the cuckoo's nest"},
  {id: 2, title: "The Shawshank Redemption"},
  {id: 3, title: "Alice in Wonderland"},
  {id: 4, title: "Vertigo"},
]
*/
```

That's it for now! More to come. Enjoy!