<template>
  <div class="gallery-wrapper">
    <header class="gallery-header">
      <ul class="filter">
        <li
          v-for="(category, i) in categories"
          :key="i"
          @click="changeCategory(category)"
          :class="{ clickable: true, isActive: selectedCategory === category }"
          v-html="category" />
      </ul>
    </header>
    <transition name="fade">
      <div v-if="status === 'LOADING' || status === 'IDLE'">Loading projects …</div>
      <div v-else-if="status === 'ERROR'">Could not load projects.</div>
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
              <figure><img :src="`http://uclab.fh-potsdam.de/vff/images/${item.key}.png`" /></figure>
              <strong v-if="item.winner || i === 0" class="winner"><span class="label">Winner <i class="icon-vff" /></span><span class="type">{{ item.type }}</span></strong>
              <header>
                <a :href="item.link"><h3>{{ item.title }}<i class="icon-link-ext" /></h3></a>
                <span @click="changeEntry(item.key)" class="btn--details caption"><i :class="activeEntry === item.key ? 'icon-up-open' : 'icon-down-open'" /> Details <i :class="activeEntry === item.key ? 'icon-up-open' : 'icon-down-open'" /></span>
              </header>
              <transition-expand>
                <div class="details" v-if="activeEntry === item.key">
                  <dl>
                    <div v-if="item.description">
                      <dt>Description</dt><dd v-html="item.description" />
                    </div>
                    <div v-if="item.credits">
                      <dt>Credits</dt><dd v-html="item.credits" />
                    </div>
                  </dl>
                  <div v-if="item.link" class="link-website">
                    <a class="btn" :href="item.link">Visit project website</a>
                  </div>
                  <dl class="list--columns">
                    <div v-if="item.organisation">
                      <dt>Organisation</dt><dd v-html="item.organisation" />
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
              </transition-expand>
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
  import TransitionExpand from '~/components/TransitionExpand.vue'

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
    },
    components: {
      TransitionExpand
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

  .expand-enter-active,
  .expand-leave-active {
    transition-property: opacity, height;
  }
  .expand-enter,
  .expand-leave-to {
    opacity: 0;
  }

  .list-complete-item {
    transition: all 1s;
    display: inline-block;
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
    margin-top: 0;

    ul {
      width: 700px;
      max-width: 96vw;
    }
  }

  .gallery {
    width: 96vw;
  }

  .entries {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 3vh 3vw;

    & > * {
      overflow: hidden;
      max-width: 96vw;
    }

    .entry {
      background-color: rgba(255, 255, 255, 1);
      border: 2px solid #222;
      box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.15);
      margin: 0;
      margin-bottom: 10px;
      margin-right: 10px;
      max-width: calc(100% - 2px - 10px);

      header h3 {
        min-height: calc(2 * 1.8rem * 1.1);
      }

      figure {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: $spacing / 2;
      }

      .winner {
        display: block;
        text-align: center;

        span {
          display: block;
        }
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

      header, .details, figure {
        padding: 0 $spacing / 2;
        margin-top: $spacing / 2;
      }

      .details {
        margin-top: 0;
      }

      .link-website {
        margin: $spacing 0;
        text-align: center;

        a {
          width: auto;
          padding: $spacing / 4 $spacing;
          font-size: 1rem;
          letter-spacing: 0.05em;
        }
      }

      dl {
        div {
          margin-bottom: $spacing / 2;
        }

        &.list--columns {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 2vh 2vw;
          margin-bottom: $spacing / 2;

          div {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .filter {
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0;
    font-family: $font-headline;
    line-height: 1.2;

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

      &:last-child {
        margin-right: 0;
      }


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
