
<template>

  <div>
      <div class="searchBook">
        <input type="text" v-model="search.book_isbn"/>
        <font-awesome-icon 
            icon="search"
            @click="searchBook()"
            :class="[ search.book_isbn ? 'active' : 'inactive', 'search']"
        />
      </div>
      <div v-if="this.error">
          {{ this.message }}
      </div>
      <add-book v-if="!this.error" :book="book"/>
  </div>
</template>

<script>
    import axios from 'axios'
    import addBook from './addBook'

    export default {
        name: 'search-book',
        components: {
            addBook
        },
        data: function () {
            return {
                search: {
                    book_isbn: ""
                },
                book: {
                    book_isbn: "",
                    book_title: "",
                    book_cover_img: "",
                    book_author: "",
                    book_by_statement: "",
                    book_publish_date: ""
                },
                error: false,
                message: ''
            }
        },
        methods: {
            searchBook() {
                if( this.search.book_isbn == '' ) {
                    return;
                }
                axios.get('https://openlibrary.org/api/books?bibkeys=ISBN:' + this.search.book_isbn + '&jscmd=data&format=json')
                .then( response => {
                    console.log( response );
                    if (Object.keys(response.data).length === 0) {
                        let data = '';
                        this.book.book_isbn = data,
                        this.book.book_title = data,
                        this.book.book_cover_img = data,
                        this.book.book_author = data,
                        this.book.book_by_statement = data,
                        this.book.book_publish_date = data
                        this.error =true;
                        this.message = "Book not found. ";
                        console.log( 'Not found' );
                        return;
                    } else {
                        this.error = false;
                        let data = response.data["ISBN:" + this.search.book_isbn];
                        this.book.book_isbn = this.search.book_isbn,
                        this.book.book_title = data.title,
                        this.book.book_cover_img = data.cover.medium,
                        this.book.book_author = data.authors[0].name,
                        this.book.book_by_statement = data.by_statement,
                        this.book.book_publish_date = data.publish_date
                        console.log(this.book);
                    }
                })
                .catch( error => {
                    console.log( error);
                })
            }
        }
    }
</script>

<style scoped>
.searchBook {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    background: #f7f7f7;
    border: 0px;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    width: 100%;
}

.search {
    font-size: 20px;
}

.active {
    color: #00ce25
}

.inactive {
    color: #999999
}
</style>