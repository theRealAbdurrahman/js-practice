class MovieCollection extends Array {
    constructor(name, ...movies) { // the rest operator to pass all the the args 
        super(...movies); // spread operator to spread the returned array
        this.name = name;
    }
    add(movie) {
        this.push(movie)
    }
    topMovies(limit = 10) { // returns the movies sorted according to its stars. passing 2 as a limit param will return the top 2
        return console.table(this.sort((a,b) => a.stars > b.stars ? 1 : -1).slice(0,limit));
    }
}

const movies = new MovieCollection('Bedo\'s favs', 
{
    name: "Fight club",
    stars: 9.8
}, 
{
    name: "In time",
    stars: 9.5
}, 
{
    name: "Into the Wild",
    stars: 9.7
}, );

movies.add({
    name: 'Mr. Nobody',
    stars: 9.7
});



// iterating on an class which is extended using for in loop 

for ( const movie in movies) {
    console.log(movie);
    
}
// Output : 
 // 1
 // 2
 // 3
 // name >>> it prints everything

 // using for of
 for (const movie of movies) { // it behaves as we want 
     console.table(movie);
 }