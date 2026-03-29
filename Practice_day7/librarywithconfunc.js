function Book(title, author, year, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = isAvailable;
}

Book.prototype.getInfo = function() {
    return  `The title of book ${this.title} 
    The author of book ${this.author}
    The realise year of book ${this.year}
    Is the book Available or not ${this.isAvailable}`;
}

Book.prototype.borrowBook = function() {
    if (this.isAvailable) {
        this.isAvailable = false;
        return "You borrowed the book";
    } else {
        return "The book is already unavailable";
    }
}

Book.prototype.returnBook = function() {
    if (!this.isAvailable) {
        this.isAvailable = true;
        return "The book is borrowed";
    } else {
        return "The book is already available";
    }
}

Book.prototype.matchesAuthor = function(authorName) {
    return this.author.toLowerCase() === authorName.toLowerCase();
}

Book.prototype.matchesTitle = function(word) {
    return this.title.includes(word);
}

function Library(name) {
    this.name = name;
    this.books = [];
}

Library.prototype.addBook = function(book) {
    if (!book.title) {
        throw new Error("The book must have a title");
    }
    if (!book.author) {
        throw new Error("The book must have an author");
    }
    if (!book.year) {
        throw new Error("The year must have numbers");
    }
    
    let books = this.books;
    let unique = books.some(element => element.title == book.title);
    if (unique) {
        throw new Error("The book's titles must be unique"); 
    }

    this.books.push(book);
}

Library.prototype.removeBook = function(title) {
    let index = this.books.findIndex(book => book.title === title);
    if (index === -1) {
        return "There is'nt any book with that title";
    }
    this.books.splice(index, 1);
}

Library.prototype.findBooksByTitle = function(title) {
    for (let i = 0; i < this.books.length; ++i) {
        if (this.books[i].title === title) {
            return this.books[i];
        }
    }
    return null;
}

Library.prototype.findBooksByAuthor = function(authorName) {
    let books = [];
    for (let i = 0; i < this.books.length; ++i) {
        if (this.books[i].author === authorName) {
            books.push(this.books[i]);
        }
    }
    return books;
}

Library.prototype.getAvailableBooks= function() {
    let available_books = [];
    for (let i = 0; i < this.books.length; ++i) {
        if (this.books[i].isAvailable) {
            available_books.push(this.books[i]);
        }
    }
    return  available_books;
}

Library.prototype.borrowBook = function(title) {
    for (let i = 0; i < this.books.length; ++i) {
        if (this.books[i].title === title) {
            return this.books[i].borrowBook();
        }
    }
    return "We dont have your book in library";
}

Library.prototype.returnBook = function(title) {
    for (let i = 0; i < this.books.length; ++i) {
        if (this.books[i].title === title) {
            return this.books[i].returnBook();
        }
    }
    return "You couldnt return that book";
}

Library.prototype.showAllBooks = function() {
    return this.books;
}

Library.prototype.countBooks = function() {
    return this.books.length;
}

Library.prototype.countAvailableBooks = function() {
    return this.getAvailableBooks().length;
}

Library.prototype.searchBooks = function(word) {
    let searched_books = [];
    for (let i = 0; i < this.books.length; ++i) {
        if (this.books[i].title.includes(word)) {
            searched_books.push(this.books[i]);
        }
    }
    return searched_books;
}

Library.prototype.getOldestBook = function() {
    let min = this.books[0];
    for (let i = 0; i < this.books.length; ++i) {
        if (min.year > this.books[i].year) {
            min = this.books[i];
        }
    }
    return min;
}

const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBooksByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBooksByTitle("1984"));

console.log("=== Borrow same book again ===");
console.log(library.borrowBook("1984"));

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBooksByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
console.log(library.showAllBooks());