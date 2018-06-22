class MovieCollection extends Array {
    constructor(name, ...movies) { // the rest operator to pass all the the args 
        super(...movies); // spread operator to spread the returned array
        this.name = name;
    }
    add(movie) {
        this.push(movie)
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