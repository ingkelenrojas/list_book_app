import axios from "axios"

export const listBookStore = {
    state: {
        books: [],
        showDetailsPage: false,
        selectedBookDetails: null,
    },

    mutations: {
        GET_BOOKS(state, data) {
            console.log('HERE');
            console.log(data);

            data.forEach(book => {
                state.books.push( book )
            });
        },
        
        ADD_BOOK(state, book) {
            state.books.push(book)
        },
        
        REMOVE_BOOK(state, isbn) {
            let position = state.books.findIndex(book => book.book_isbn === isbn)
            state.books.splice(position, 1)
        },
        
        sortBooksAlphabeticallyAscending(state) {
            state.books.sort((book1, book2) =>
                book1.book_title.localeCompare(book2.book_title))
        },

        sortBooksAlphabeticallyDescending(state) {
            state.books.sort((book1, book2) =>
                book2.book_title.localeCompare(book1.book_title))
        },

        shiftBookUp(state, isbn) {
            let position = state.books.findIndex(book => book.book_isbn === isbn)
            //let sizeOfBooks = state.books.length
            let tempBooksArray = state.books

            if(position != 0) {
                var targetBook = tempBooksArray[position]
                tempBooksArray.splice(position, 1)
                tempBooksArray.splice((position - 1), 0, targetBook)
            }

            state.books = tempBooksArray
        },

        shiftBookDown(state, isbn) {
            let position = state.books.findIndex(book => book.book_isbn === isbn)
            let sizeOfBooks = state.books.length
            let tempBooksArray = state.books

            if(position != (sizeOfBooks - 1)) {
                var targetBook = tempBooksArray[position]
                tempBooksArray.splice(position, 1)
                tempBooksArray.splice((position + 1), 0, targetBook)
            }

            state.books = tempBooksArray
        },

        closeBookDetailsPage(state) {
            state.showDetailsPage = false
        },

        selectBookForDetails(state, isbn) {
            state.showDetailsPage = true
            let position = state.books.findIndex(book => book.book_isbn === isbn)
            state.selectedBookDetails = state.books[position]
        }
    },
    actions: {
        
        getBooks({commit}) {
            axios.get('/api/books').then( response => {
                console.log(response.data)
                console.log('All books')
                commit('GET_BOOKS', response.data)
                
            }).catch(err => {
                console.log(err)
            })
        },

        addBook({commit}, book) {
            axios.post('/api/book/store', {book: book}).then(response => {
                commit('ADD_BOOK', response.data)
                console.log('Added book to database')
            }).catch(err => {
                console.log(err)
            })
        },

        removeBook({commit, state}, isbn) {
            let position = state.books.findIndex(book => book.book_isbn === isbn)
            console.log("DELETE --> " + state.books[position]);
            let id = state.books[position].id
            axios.delete('/api/book/' + id).then(
                commit('REMOVE_BOOK', isbn),
                console.log('Removed book from the database')
            ).catch(err => {
                console.log(err)
            })
        },
    },

    getters: {
        books: state => state.books,
        showDetailsPage: state => state.showDetailsPage,
        selectedBookDetails: state => state.selectedBookDetails,
    }
}