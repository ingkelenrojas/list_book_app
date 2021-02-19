
<template>
    <div id="book">
        <div class="card">
            <div class="row no-gutters">
                <div class="col-md-2">
                    <img id="book-cover-image" v-bind:src="book.book_cover_img" class="card-img-top">
                </div>
                <div class="col-md-8">
                    <div class="card-title">
                        <p id="book-title">{{ this.book.book_title }}</p>
                        <button 
                            @click="selectForDetails"
                            class="btn btn-primary btn-sm">
                            Display Details
                        </button>
                    </div>
                </div>
                <div class="col-md-1">
                    <div class="card-body">
                    <button 
                        @click="shiftUp"
                        class="btn btn-link">
                        <font-awesome-icon icon="chevron-up" />
                    </button>
                    <button 
                        @click="removeFromUserList" 
                        id="remove" 
                        class="btn btn-link">
                        <font-awesome-icon icon="minus" />
                    </button>
                    <button 
                        @click="shiftDown" 
                        class="btn btn-link">
                        <font-awesome-icon icon="chevron-down" />
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'book',
    props: ['book'],
    methods: {
        removeFromUserList() {
            this.$store.dispatch("removeBook", this.book.book_isbn)
        },
        shiftUp() {
            this.$store.commit("shiftBookUp", this.book.book_isbn)
        },
        shiftDown() {
            this.$store.commit("shiftBookDown", this.book.book_isbn)
        },
        selectForDetails() {
            this.$store.commit("selectBookForDetails", this.book.book_isbn)
        }
    }
}
</script>

<style scoped>
.shiftButton {
    background-color: #ffffff;
}
.card-body {
    padding: 0 0 0 50%;
}
#remove {
    color: red;
}
#book-title {
    padding: 5% 0 0 0;
    margin-bottom: 5px;
}
</style>