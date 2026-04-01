class Book {
    #title;
    #author;
    #year;
    #isAvailable = true;;
    constructor(title, author, year) {
        this.#title = title;
        this.#author = author;
        this.#year = year;
        this.#isAvailable = true;
    }

    get title() {
        return this.#title;
    }

    set title(title) {
        if (title === "") {
            console.log("The title cannot be empty");
            return;
        }
        this.#title = title;
    }

    get author() {
        return this.#author;
    }

    set author(author) {
        if (author === "") {
            console.log("The author can not be empty");
            return;
        }
        this.#author = author;
    }

    get year() {
        return this.#year;
    }

    set year(year) {
        if (year < 0) {
            console.log("The year must be a positive number!");
            return;
        }
        this.#year = year;
    }

    get isAvailable() {
        return this.#isAvailable;
    }

    borrowBook() {
        if (this.#isAvailable) {
            this.#isAvailable = false;
            return "You borrowed the book";
        } else {
            return "The book is already borrowed";
        }
    }

    returnBook() {
        if (!this.#isAvailable) {
            this.#isAvailable = true;
            return "You returned the book";
        } else {
            return "The book is already available";
        }
    }

    matchesTitle(word) {
        return this.#title.includes(word);
    }

    getInfo() {
    return`The title of book ${this.title} 
The author ${this.author} 
The year of book${this.year} 
Is it available ${this.isAvailable}`;
    }
}

class Reader {
    #name;
    #borrowedBooks;
    constructor(name) {
        this.#name = name;
        this.#borrowedBooks = [];
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        if (name === "") {
            console.log("The name must not be an empty string");
            return;
        }
        this.#name = name;
    }

    get borrowedBooks() {
        return this.#borrowedBooks;
    }
    
    get borrowedBooksCount() {
        return this.#borrowedBooks.length;
    }

    takeBook(book) {
        if (!book.isAvailable) {
            return "The book is not available";
        } else {
            this.#borrowedBooks.push(book);
            book.borrowBook();
        }
    }

    giveBackBook(book) {
        for (let i = 0; i < this.#borrowedBooks.length; ++i) {
            if (this.#borrowedBooks[i] === book) {
                this.#borrowedBooks[i].returnBook();
                this.#borrowedBooks.splice(i, 1);
                return "You gave the book back";
            }
        }
        return "This book is not in your borrowed books";       
    }

    hasBook(book) {
        return this.#borrowedBooks.includes(book);
    }

    showBorrowedBooks() {
        let borrowedBooks_titles = [];
        for (let i = 0; i < this.#borrowedBooks.length; ++i) {
            borrowedBooks_titles.push(this.#borrowedBooks[i].title);
        }
        return borrowedBooks_titles;
    }

    getInfo() {
        return `${this.#name} has ${this.borrowedBooksCount} borrowed Books`;
    }
}

class Library {
    #name;
    #books;
    #readers;

    constructor(name) {
        this.#name = name;
        this.#books = [];
        this.#readers = [];
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        if (name === "") {
            console.log("The name can not be an empty string");
            return;
        }
        return this.#name = name;
    }

    get books() {
        return this.#books;
    }

    get readers() {
        return this.#readers;
    }

    addBook(book) {
        if (!book.title) {
            return "The book must have a title";
        }
        if (!book.author) {
            return "The book must have an author";
        }
        if (typeof book.year !== "number") {
            return "The books year must contain numbers";
        }

        let books = this.#books;
        let unique = books.some(b => b.title === book.title);
        if (unique) {
            return "The book must be unique";
        }
        
        this.#books.push(book);
    }

    registerReader(reader) {
        if (!reader) {
            return "The reader must have a name";
        }
        this.#readers.push(reader);
        return;
    }

    findBookByTitle(title) {
        for (let i = 0; i < this.#books.length; ++i) {
            if (this.#books[i].title === title) {
                return this.#books[i].getInfo();
            }
        }
        return null;
    }

    findBooksByAuthor(authorName) {
        let found_books = [];
        for (let i = 0; i < this.#books.length; ++i) {
            if (this.#books[i].author === authorName) {
                found_books.push(this.#books[i].getInfo());
            }
        }
        return found_books
    }

    giveBookToReader(title, reader) {
        for (let i = 0; i < this.#books.length; ++i) {
            if (this.#books[i].title === title) {
                reader.takeBook(this.#books[i]);
            }
        }
        return "The title of book could not be found";
    }

    acceptBookFromReader(title, reader) {
        for (let i = 0; i < this.#books.length; ++i) {
            if (this.#books[i].title === title) {
                reader.giveBackBook(this.#books[i].getInfo());
            }
        }
        return "The title of book could not be found";
    }

    showAvailableBooks() {
        let available_books = [];
        for (let i = 0; i < this.#books.length; ++i) {
            if (this.#books[i].isAvailable === true) {
                available_books.push(this.#books[i].getInfo());
            }
        }
        return available_books;
    }

    showAllBooks() {
        return this.#books.map(book => book.getInfo());
    }

    getLibraryInfo() {
        return `In Library we have ${this.#books.length} books and ${this.#readers.length} readers`;
    }
}

const book1 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book2 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book3 = new Book("1984", "George Orwell", 1949);

const reader1 = new Reader("Anna");
const reader2 = new Reader("David");

const library = new Library("Central Library");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.registerReader(reader1);
library.registerReader(reader2);

console.log("=== Library info ===");
console.log(library.getLibraryInfo());

console.log("=== All books ===");
console.log(library.showAllBooks());

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBooksByAuthor("George Orwell"));

console.log("=== Available books ===");
console.log(library.showAvailableBooks());

console.log("=== Give book to reader ===");
library.giveBookToReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Give another book to reader ===");
library.giveBookToReader("Harry Potter", reader1);
console.log(reader1.getInfo());

console.log("=== Try to borrow same book again ===");
console.log(library.giveBookToReader("The Hobbit", reader2));

console.log("=== Return book ===");
library.acceptBookFromReader("The Hobbit", reader1);
console.log(reader1.showBorrowedBooks());
console.log(book1.getInfo());

console.log("=== Final available books ===");
console.log(library.showAvailableBooks());

console.log("=== Final library info ===");
console.log(library.getLibraryInfo());1