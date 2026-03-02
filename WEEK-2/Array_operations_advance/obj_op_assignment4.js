// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
//     1. filter() only "Sci-Fi" movies
console.log(movies.filter(obj=>obj.genre==="Sci-Fi"))
//     2. map() to return:
//             "Inception (8.8)"
console.log(movies.map(obj=>`${obj.title}(${obj.rating})`))

//     3. reduce() to find average movie rating
let sum=movies.reduce((acc,obj)=>acc+obj.rating,0)
console.log("Average movie rating: ",sum/movies.length)
//     4. find() movie "Joker"
console.log(movies.find(obj=>obj.title==='Joker'))
//     5. findIndex() of "Avengers"
console.log(movies.findIndex(obj=>obj.title==='Avengers'))




