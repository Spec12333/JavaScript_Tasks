class Book {
    constructor(title, author, year, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    
    getInfo() {
        return `The title of book ${this.title} The author ${this.author} The year of book ${this.year} Is it available ${this.isAvailable}`;
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return "You borrowed the book congrats";
        } else {
            return "The book is already borrowed";
        }
    }

    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            return "You returned the book thank you"
        } else {
            return "The book is already available";
        }
    }
    
    matchesAuthor(authorName) {
        return this.author.toLowerCase() === authorName.toLowerCase();
    }

    matchesTitle(word) {
        return this.title.includes(word);
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (!book.title) {
            throw new Error("The book must contain title");
        }
        if (!book.author) {
            throw new Error("The book must have an author");
        }
        if (typeof book.year !== "number") {
            throw new Error("The book's year have numbers");
        }
        
        let books = this.books;
        let unique = books.some(b => b.title === book.title);
        if (unique) {
            throw new Error("The book must be unique");
        }

        this.books.push(book);
    }

    removeBook(title) {
        let index = this.books.findIndex(book => book.title === title);
        if (index === -1) {
            return "There is not book with that title";
        }
        this.books.splice(index, 1);
    }

    findBookByTitle(title) {
        for (let i = 0; i < this.books.length; ++i) {
            if (this.books[i].matchesTitle(title)) {
                return this.books[i];
            }
        }
        return null;
    }

    findBooksByAuthor(authorName) {
        let author_books = [];
        for (let i = 0; i < this.books.length; ++i) {
            if (this.books[i].matchesAuthor(authorName)) {
                author_books.push(this.books[i]);
            }
        }
        return author_books;
    }

    getAvailableBooks() {
        let available_books = [];
        for (let i = 0; i < this.books.length; ++i) {
            if (this.books[i].isAvailable) {
                available_books.push(this.books[i]);
            }
        }
        return available_books;
    }

    borrowBook(title) {
        for (let i = 0; i < this.books.length; ++i) {
            if (this.books[i].matchesTitle(title)) {
                return this.books[i].borrowBook();
            }
        }
        return "We dont have your book in library"
    }

    returnBook(title) {
        for (let i = 0; i < this.books.length; ++i) {
            if (this.books[i].matchesTitle(title)) {
                return this.books[i].returnBook();
            }
        }
        return "You couldnt return that book";
    }   

    showAllBooks() {
        let all_books = [];
        for (let i = 0; i < this.books.length; ++i) {
            all_books.push(this.books[i].getInfo());
        }
        return all_books;
    }

    countBooks() {
        return this.books.length;
    }

    countAvailableBooks () {
        return this.getAvailableBooks().length;
    }

    searchBooks(word) {
        let searched_books = [];
        for (let i = 0; i < this.books.length; ++i) {
            if (this.books[i].title.includes(word)) {
                searched_books.push(this.books[i]);
            }
        }
        return searched_books;
    }

    getOldestBook() {
        if (this.books.length === 0) {
            return null;
        }

        let min = this.books[0];
        for (let i = 0; i < this.books.length; ++i) {
            if (min.year > this.books[i].year) {
                min = this.books[i];
            }
        }
        return min;
    }
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
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
console.log(library.borrowBook("1984"));

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
console.log(library.showAllBooks());