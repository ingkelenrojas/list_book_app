
<template>
    <div id="addbook">
        <h3>Search Results</h3>
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-3">
                    <img v-bind:src="this.book.book_cover_img" class="card-img-top">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 id="book-title" class="card-title">{{ this.book.book_title }}</h5>
                        <p id="author">{{ this.book.book_author }}</p>
                        <button 
                            @click="addBook()" 
                            type="button" 
                            class="btn btn-primary btn-sm">
                            Add to List
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <p class="error-text" v-if="error">
            {{ this.book.book_title }} (ISBN: {{ this.book.book_isbn }}) is already in your book list.
        </p>
    </div>
</template>

<script>

    export default {
        name: 'add-book',
        props: ['book'],
        data () {
            return {
                error: false,
            }
        },
        methods: {
            addBook() {
                console.log('book to store ' + this.book);
                
                var found = false
                for( var i = 0; i < this.$store.getters.books.length; i++) {
                    console.log(this.$store.getters.books[i].book_isbn);
                    if(this.$store.getters.books[i].book_isbn == this.book.book_isbn) {
                        found = true
                        break
                    }
                }

                if(!found) {
                    console.log('NOT FOUND ' + this.book);
                    this.$store.dispatch("addBook", this.book)
                    this.error = false
                }
                else {
                    this.error = true
                }
            }
        }
    }

</script>

<style scoped>
#addbook {
    padding-top: 50px;
}
.card {
    max-width: 500px;
    margin: auto;
    height: 50%;
}
.card-img-top {
    padding: 5px;
    object-fit: cover;
}
.error-text {
    color: red;
    font-weight: bold;
}
</style>