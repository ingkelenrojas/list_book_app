

<template>
  <div class="main">
    <section class="listSection">
      <div class="listContainer">
        <h1 class="title">List Book</h1>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <search-book/>
        </div>
        <div class="col-md-5">
          <list-book />
        </div>
      </div>
    </div>
    <details-book />
  </div>
</template>

<script>
import searchBook from './components/search/searchBook'
import listBook from './components/show/listBook'
import detailsBook from './components/details/detailsBook'
import { mapGetters } from 'vuex'
export default {
    name: 'app',
    components: {
        searchBook,
        listBook,
        detailsBook
    },
    computed: {
        ...mapGetters(['books'])
    },
    created() {
      //console.log('HERE getBooks');
        this.$store.dispatch("getBooks")
    }
}
</script>

<style scoped>
.container {
  max-width: 1140px;
  margin: auto;
}
.listSection {
  padding: 50px;
}
.listContainer {
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
}
.title {
  color: #6c757d;
  font-size: 1.2em;
  font-weight: 300;
}
</style>