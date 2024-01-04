function numberOfBooksRead(library) {
    let count = 0;

    for (const book of library) {
        if (book.readingStatus === true) {
            count++;
        }
    }

    return count;
}

// Example usage:
const library = [
    {
        author: 'Author 1',
        title: 'Book 1',
        readingStatus: true
    },
    {
        author: 'Author 2',
        title: 'Book 2',
        readingStatus: false
    },
    {
        author: 'Author 3',
        title: 'Book 3',
        readingStatus: true
    }
];

console.log(numberOfBooksRead(library)); // Output: 2



// Do not change the code below

alert(numberOfBooksRead());
