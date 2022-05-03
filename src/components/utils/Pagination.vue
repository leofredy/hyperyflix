<template>
  <ul class="pagination">
    <li 
      v-show="currentPage > 1"
      class="pagination-prevPage"
      @click="changePage(currentPage - 1)"
    >
      <router-link :to="{query: {...$route.query, page: currentPage - 1}}">
        <img 
          src="@/assets/icons/arrow.svg" 
          width="4.5"
          height="6"
          loading="lazy"
          :alt="`Volta para a página ${currentPage - 1}`"
        >
      </router-link>
    </li>

    <li 
      v-show="pages[0] > 1"
      class="pagination-lastPage"
      @click="changePage(1)"
    >
      <router-link :to="{query: {...$route.query, page: 1}}">
        ...
      </router-link>
    </li>

    <li 
      v-for="page in pages" 
      :key="page"
      :class="{'pageLinkActive': page === currentPage}"
      @click="changePage(page)"
    >
      <router-link :to="{query: {...$route.query, page: page}}">
        {{ page }}
      </router-link>
    </li>

    <li 
      v-show="pages[pages.length - 1] < lastPage"
      class="pagination-lastPage"
      @click="changePage(lastPage)"
    >
      <router-link :to="{query: {...$route.query, page: lastPage}}">
        ...
      </router-link>
    </li>

    <li 
      v-show="currentPage < lastPage"
      class="pagination-nextPage"
      @click="changePage(currentPage + 1)"
    >
      <router-link :to="{query: {...$route.query, page: currentPage + 1}}">
        <img 
          src="@/assets/icons/arrow.svg" 
          width="4.5"
          height="6"
          loading="lazy"
          :alt="`Passa para a página ${currentPage + 1}`"
        >
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    range: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    lastPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      invalidRange: false,
      pages: [],
    }
  },
  computed: {
    correctRange() {
      //Verifica se foi passado um range par, se sim corrige para impar adicionando +1
      return this.invalidRange ? this.range + 1 : this.range;
    },
  },
  watch: {
    currentPage() {
      if (this.currentPage > (this.correctRange + 1) / 2 || this.pages.indexOf(this.currentPage) - ((this.correctRange - 1) / 2) < 0) {
        this.generatePages();
      }
    },
    range() {
      this.generatePages();
    }
  },
  methods: {
    validRange() {
      if (!(this.range % 2)) {
        console.warn("Pagination.vue: invalid prop range, expect odd received even.");
        this.invalidRange = true;
      }
    },
    generatePages() {
      const pages = [];
      const leftShift = (this.correctRange - 1) / 2;
      let startPage = this.currentPage - leftShift;
      if (startPage <= 0) {
        startPage = 1;
      } else {
        startPage = this.lastPage - (startPage + (this.correctRange - 1)) < 0
          ? startPage + (this.lastPage - (startPage + (this.correctRange - 1)))
          : startPage;
      }
      for (let index = 0; index < this.correctRange; index++) {
        pages.push(startPage + index);
      }

      this.pages = pages;
    },
    initPages() {
      this.validRange();
      this.generatePages();
    },
    changePage(value) {
      this.$emit("changePage", value);      
    }
  },
  created() {
    this.initPages();
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: flex-end;
}
.pagination li:not(:last-child) {
  margin-right: 8px;
}
.pagination a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--secondary-background);
  border-radius: 8px;
  transition: 
    background-color 0.3s ease-in-out, 
    color 0.3s ease-in-out
  ;
}
.pagination .pageLinkActive a,
.pagination a:hover {
  color: var(--text-primary);
  background-color: var(--primary-dark-color);
}
.pagination .pageLinkActive a {
  font-weight: 600;
}
.pagination-prevPage img,
.pagination-nextPage img {
  width: 6px;
}

.pagination-prevPage img {
  transform: rotate(90deg);
}
.pagination-nextPage img {
  transform: rotate(-90deg);
}
</style>