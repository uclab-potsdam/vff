import axios from 'axios'
import { isUndefined, map, uniq } from 'lodash'
import showdown from 'showdown'
import { csvParse } from 'd3-dsv'

const converter = new showdown.Converter()

const STATUS_IDLE = 'IDLE'
const STATUS_LOADING = 'LOADING'
const STATUS_SUCCESS = 'SUCCESS'
const STATUS_ERROR = 'ERROR'

// Path where the data is located
const url = './data.csv'

const state = () => {
  return {
    datum: false,
    status: STATUS_IDLE,
    message: ''
  }
}

export const getters = {
  entries: state => {
    return state.datum
  },
  categories: (state, getters) => {
    console.log(getters.entries, uniq(map(getters.entries, 'type')))
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
          const datum = csvParse(response.data).map(d => {
            return {
              ...d,
              key: +d.key,
              winner: d.winner === 'TRUE',
              score: +d.score,
              organization: converter.makeHtml(d.organization),
              credits: converter.makeHtml(d.credits)

            }
          })
          commit('LOAD_DATA', { status: STATUS_SUCCESS, datum })
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
