
<template>
    <div id="bookList">
        <h3>Your Book List</h3>
        <p id="sortOptions">Sort by: Name
            <button 
                @click="sortAlphabeticallyAscending" 
                class="btn btn-link btn-sm">
                <font-awesome-icon icon="chevron-up" />
            </button>
            <button 
                @click="sortAlphabeticallyDescending" 
                class="btn btn-link btn-sm">
                <font-awesome-icon icon="chevron-down" />
            </button>
        </p>

        <div v-for="(book, index) in books" :key="index">

            <book 
                :book="book"
            />
        </div>
    </div>
</template>

<script>
import book from './book'
import { mapGetters } from 'vuex'
export default {
    name: 'list-book',
    components: {
        book
    },
    computed: {
        ...mapGetters([ 'books' ])
    },
    methods: {
        sortAlphabeticallyAscending() {
            this.$store.commit("sortBooksAlphabeticallyAscending")
        },
        sortAlphabeticallyDescending() {
            this.$store.commit("sortBooksAlphabeticallyDescending")
        }
    },
    created() {
        console.log('OJOJOJ getBooks');
        console.log(this.books);
        this.$store.dispatch("getBooks")
    }
}
</script>

<style scoped>
#sortOptions {
    color: #6c757d;
    margin-bottom: 0;
}
</style>