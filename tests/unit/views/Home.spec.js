import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home'
import { GET_RANDOM_PHRASES } from '../../fixtures/services/PhraseService'
import PhraseList from '@/components/PhraseList'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Home', () => {
  let store
  let actions
  let state

  beforeEach(() => {
    actions = {
      getRandomPhrases: jest.fn()
    }
    state = {
      phrases: GET_RANDOM_PHRASES
    }
    store = new Vuex.Store({
      actions,
      state
    })
  })

  it('shows a list of phrases', async () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store
    })
    await flushPromises()
    const phrases = wrapper.find(PhraseList).props().phrases

    expect(actions.getRandomPhrases).toHaveBeenCalledWith(expect.anything(), 5, undefined)
    expect(phrases).toBe(GET_RANDOM_PHRASES)
  })
})
