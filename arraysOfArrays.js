var movies = [
  ['fury', ' 89 mins', ' 2014'],
  ['annie', ' 114 mins', ' 1984'],
    ['bambie', ' 77 mins', ' 1942'],
    ['cinderella', ' 79 mins', ' 1965'],
    ['barbie', ' 30 mins', ' 2001'],
    ['lego', ' 110 mins', ' 2012'],
    ['home', ' 119 mins', ' 2015'],
    ['sense8', ' 30 mins', ' 2015'],
    ['starwars', ' 200 mins', ' 1973'],
    ['movie', ' 100 mins', ' 2000'],
    ];
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

for (var i = 0; i < movies.length; i++) {
  var capitalizedName = capitalize(movies[i]);
  console.log(capitalizedName);
}
var movieObjs = [];

function movieObjCreator(name, mins, yr) {
  movieObj = {title: name, time: mins, year: yr};
  return movieObj;
}

for(i = 0; i < movies.length; i++){
  var movie = movies[i];
  movieObjs.push(movieObjCreator.apply({}, movie));
}

for(i = 0; i < movies.length; i++){
  var movie = movieObjs[i];
}


var userMovie = prompt('please pick a movie');
for(i = 0; i < movieObjs.length; i++){
 var movie = movieObjs[i]; if(movie.title.toUpperCase() === userMovie.toUpperCase()) {
alert(movie.title + ' has a running time of ' + movie.time + ' and was released in ' + movie.year);  
 }
  else {
     alert('Sorry, that movie is not on the list.');
}
} 
       


