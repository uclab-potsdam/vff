<template>
  <div>
    <h1>Gallery</h1>
    <transition name="fade">
      <div v-if="status === 'LOADING' || status === 'IDLE'">Loading …</div>
      <div v-else class="gallery">
        <ul class="filter">
          <li
            v-for="category in categories"
            @click="changeCategory(category)"
            :class="{ clickable: true, isActive: selectedCategory === category }"
            v-html="category" />
        </ul>
        <transition-group
          name="list-complete"
          tag="div"
          class="entries ">
          <article
            v-for="item in items"
            class="entry list-complete-item"
            :key="item.key">
            <h3 v-html="item.name" />
            <h4 v-html="item.organisation" />
          </article>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import { filter, get } from 'lodash'

  export default {
    data: function () {
      return {
        selectedCategory: false
      }
    },
    computed: {
      ...mapState({
        'status': state => state.data.status
      }),
      ...mapGetters([
        'entries',
        'categories'
      ]),
      items: function () {
        const { entries, selectedCategory } = this
        if (selectedCategory) {
          return filter(entries, entry => {
            return get(entry, 'type') === selectedCategory
          })
        } else {
          return entries
        }
      }
    },
    methods: {
      changeCategory: function (category) {
        if (this.selectedCategory === category) {
          this.selectedCategory = false
        } else {
          this.selectedCategory = category
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to {
    opacity: 0;
  }
  .list-complete-leave-active {
    position: absolute;
  }

  .entries {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: $spacing $spacing;

    .entry {
      background-color: #eee;
    }
  }

  .filter {
    & > * {
      background-color: #eee;
      border-radius: 2px;
      display: inline-block;
      margin: $spacing / 6 $spacing / 4;

      &:hover, &:focus {
        background-color: #aaa;
      }

      &.isActive {
        background-color: #222;
        color: #fff;
      }
    }
  }

</style>
