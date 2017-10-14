/* Create a simple movie database that contains movie objects with the following properties:
    title: String
    hasWatched : boolean
    rating : int

    Output to console a 1 line sentence showing the state of each movie in the database like:
        You have watched "<title>" - <rating> stars
        or
        You have not seen "<title>" - <rating> stars
*/

var movies = [
        {
            title: "Moana",
            hasWatched: true,
            rating: 5
        },
        {
            title: "The Way We Were",
            hasWatched: true,
            rating: 5
        },
        {
            title: "Star Wars 2",
            hasWatched: false,
            rating: 4
        }];

movies.forEach(function(movie) {
    console.log(buildResponseString(movie));
});


function buildResponseString(movie) {
    var response = "";

    response += "You have ";
    if(movie.hasWatched) {
        response += "watched ";
    } else {
        response += "not seen ";
    };
    response += "\"" + movie.title + "\" - " + movie.rating + " stars";
    return response;
}