<template>
  <div class="gallery-wrapper">
    <header class="gallery-header">
      <h2><span>Gallery</span></h2>
      <p>While climate change is a complex phenomenon with severe impacts for people and the environment, it is a human-made development, the trajectory of which can still be altered. The complexity of climate change requires new methods for making sense of scientific insights and communicating possible paths for action to various stakeholders and citizens. To better understand the dynamics of climate change and inform policy change, visualization is widely recognized as an indispensable tool for analysis and communication.</p>
      <ul class="filter">
        <li
          v-for="category in categories"
          @click="changeCategory(category)"
          :class="{ clickable: true, isActive: selectedCategory === category }"
          v-html="category" />
      </ul>
    </header>
    <transition name="fade">
      <div v-if="status === 'LOADING' || status === 'IDLE'">Loading …</div>
      <div v-else class="gallery">
        <transition-group
          name="list-complete"
          tag="div"
          class="entries ">
          <article
            v-for="(item, i) in items"
            class="list-complete-item"
            :key="item.key">
            <div class="entry">
              <header>
                <figure><img :src="`http://uclab.fh-potsdam.de/vff/images/${item.key}.png`" /></figure>
                <span v-if="item.winner" class="winner" v-html="'Winner'" />
                <a :href="item.link"><h3>{{ item.title }}<i class="demo-icon icon-link-ext" /></h3></a>
                <span class="h4">By <strong>{{ item.name }}</strong></span>
                <span @click="changeEntry(item.key)" class="btn--details caption"><i :class="activeEntry === item.key ? 'icon-up-open' : 'icon-down-open'" /> Details <i :class="activeEntry === item.key ? 'icon-up-open' : 'icon-down-open'" /></span>
              </header>
              <transition name="fade">
                <div class="details" v-if="activeEntry === item.key">
                  <dl>
                    <div v-if="item.description">
                      <dt>Description</dt><dd v-html="item.description" />
                    </div>
                  </dl>
                  <div v-if="item.link" class="link-website">
                    <a :href="item.link">Visit website</a>
                  </div>
                  <dl class="list--columns">
                    <div v-if="item.organisation">
                      <dt>Organisation</dt><dd v-html="item.organisation" />
                    </div>
                    <div v-if="item.credits">
                      <dt>Credits</dt><dd v-html="item.credits" />
                    </div>
                    <div v-if="item.country">
                      <dt>Country</dt><dd v-html="item.country" />
                    </div>
                    <div v-if="item.date">
                      <dt>Date</dt><dd v-html="item.date" />
                    </div>
                    <div v-if="item.type">
                      <dt>Type</dt><dd v-html="item.type" />
                    </div>
                  </dl>
                </div>
              </transition>
            </div>
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
        selectedCategory: false,
        activeEntry: false
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
      },
      changeEntry: function (entry) {
        if (this.activeEntry === entry) {
          this.activeEntry = false
        } else {
          this.activeEntry = entry
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

  .gallery-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .gallery-header {
    min-width: 700px;
  }

  .gallery {
    width: 90vw;
  }

  .entries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 3vh 2vw;

    & > * {
      overflow: hidden;
    }

    .entry {
      background-color: rgba(255, 255, 255, 1);
      border: 2px solid #222;
      box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.15);
      margin: 0;
      margin-bottom: 10px;
      margin-right: 10px;

      figure {
        overflow: hidden;
        max-height: 20vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: $spacing / 2;
      }

      .winner {
        display: block;
        text-align: center;
        margin: 0 calc(17px * -1);
        margin-bottom: $spacing / 2;
      }

      .btn--details {
        text-align: center;
        display: block;
        cursor: pointer;
        padding: $spacing / 2 0;
        transition: color 0.2s;

        &:hover i {
          color: $color-accent;
        }
      }

      header, .details {
        padding: $spacing / 2;
        padding-bottom: 0;
      }

      .link-website {
        margin: $spacing 0;
        text-align: center;

        a {
          background: $color-accent;
          width: 50%;
          display: inline-block;
          padding: $spacing / 4 0;
          font-size: 1rem;
          letter-spacing: 0.05em;
          border: 2px solid $color-accent;
          transition: background-color 0.2s, color 0.2s, border-color 0.2s;
          font-family: $font-headline;

          &:hover, &:focus {
            background-color: #000;
            border-color: #000;
            color: #fff;
          }
        }
      }

      .list--columns {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
    }
  }

  .filter {
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    margin: $spacing 0;
    font-family: $font-headline;

    & > * {
      background-color: #fff;
      border-radius: 2px;
      display: inline-block;
      margin: $spacing / 6 $spacing / 4 $spacing / 6 0;
      padding: $spacing / 6 $spacing / 4;
      font-size: 0.8rem;
      letter-spacing: 0.05em;
      border: 2px solid $color-accent;
      transition: background-color 0.2s, color 0.2s;


      &:hover, &:focus {
        background-color: rgba($color-accent, 0.2);
      }

      &.isActive {
        background-color: $color-accent;
        color: #000;
      }
    }
  }

</style>
