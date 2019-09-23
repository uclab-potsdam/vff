import axios from 'axios'
import { isUndefined, get, map, compact, fromPairs, uniq, sortBy } from 'lodash'
import showdown from 'showdown'

const converter = new showdown.Converter()

const STATUS_IDLE = 'IDLE'
const STATUS_LOADING = 'LOADING'
const STATUS_SUCCESS = 'SUCCESS'
const STATUS_ERROR = 'ERROR'

// Path where the data is located
const url = 'https://spreadsheets.google.com/feeds/list/1ZFourOHLVe2c5MPxOlW4x85wRFXZuWkbOrTLqV3ND5k/od6/public/values?alt=json'

const columns = [
  // Path in entry, key, parse
  ['gsx$id', 'key', false],
  ['gsx$winner', 'winner', false],
  ['gsx$organization', 'organisation', true],
  ['gsx$country', 'country', false],
  ['gsx$title', 'title', false],
  ['gsx$team', 'credits', true],
  ['gsx$type', 'type', false],
  ['gsx$weblink', 'link', false],
  ['gsx$description', 'description', false]
]

const state = () => {
  return {
    datum: false,
    status: STATUS_IDLE,
    message: ''
  }
}

export const getters = {
  entries: state => {
    return sortBy(compact(map(get(state.datum, ['feed', 'entry'], []), entry => {
      return fromPairs(map(columns, keys => {
        const content = get(entry, [keys[0], '$t'])
        return [keys[1], keys[2] ? converter.makeHtml(content) : content]
      }))
    })), entry => {
      return !entry['winner']
    })
  },
  categories: (state, getters) => {
    return uniq(map(getters.entries, 'type'))
  }
}

const mutations = {
  LOAD_DATA (state, { status, datum, message }) {
    if (!isUndefined(status)) {
      state.status = status
    }
    if (!isUndefined(datum)) {
      state.datum = datum
    }
    if (!isUndefined(message)) {
      state.message = message
    }
  }
}

const actions = {
  loadData ({ state, commit }) {
    if (state.status !== STATUS_SUCCESS) {
      commit('LOAD_DATA', { status: STATUS_LOADING })
      axios.get(url)
        .then(response => {
          commit('LOAD_DATA', { status: STATUS_SUCCESS, datum: response.data })
        })
        .catch(error => {
          commit('LOAD_DATA', { status: STATUS_ERROR, message: error })
        })
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
