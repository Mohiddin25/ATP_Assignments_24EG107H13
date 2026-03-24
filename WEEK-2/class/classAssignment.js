// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books

class Book{
        title //(string)
        author //(string)
        pages //(number)
       isAvailable //(boolean, default: true)

       constructor(title,author,pages,isAvailable=true){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable

       }
    //   Methods:
//       borrow() - Marks the book as not available
        borrow(){
            this.isAvailable=false
        }
//       returnBook() - Marks the book as available
        returnBook(){
            if(!this.isAvailable){
                this.isAvailable=true
            }else{
                con("You already returned the book")
            }
        }
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
        getInfo(){
            return `Book: ${this.title} by ${this.author}(${this.pages} pages)`
        }
//       isLongBook() - Returns true if pages > 300, false otherwise
        isLongBook(){
            return (this.pages>300)?true:false
        }
}
let b1=new Book("JavaScript","Harshit",400)
let b2=new Book("Harry Potter","XYZ",200)
let b3=new Book("The Hobbit","Khasim",300)
let b4=new Book("KGF","Neel",800)
let b5=new Book("Java","ABC",300)
let books=[b1,b2,b3,b4,b5]
// i. Display info of all books
console.log(b1.getInfo())
console.log(b2.getInfo())
console.log(b3.getInfo())
console.log(b4.getInfo())
console.log(b5.getInfo())
// ii. Borrow 2 books and show their availability status
b1.borrow()
b2.borrow()

console.log(b1.isAvailable)
console.log(b2.isAvailable)

//iii. Return 1 book and show updated status
b1.returnBook()
console.log("Status:",b1.isAvailable)
//iv. Count how many books are "long books" (more than 300 pages)
let count_longBooks=(books)=>{
    let count=0
    for(let x of books){
        if(x.isLongBook()){
            count++;
        }
    }
    return count
}
console.log(count_longBooks(books))

//v. List all available books
console.log(books.filter(obj=>obj.isAvailable===true))


