import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import App from '@/App'
import {
  GET_RANDOM_PHRASES_RESPONSE,
  GET_RANDOM_PHRASES
} from '../fixtures/services/PhraseService'
import { PHRASES_API } from '@/infrastructure/config'
import MockAdapter from 'axios-mock-adapter'
import * as axios from 'axios'
const url = `${PHRASES_API}/random/5?escape=javascript`
const mockHttp = new MockAdapter(axios)
mockHttp
  .onGet(url)
  .reply(200, GET_RANDOM_PHRASES_RESPONSE)

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter(routes)

describe('Home', () => {
  it('retrieves random phrases on start', async () => {
    const wrapper = mount(App, {
      localVue,
      router
    })
    await flushPromises()
    const phrases = wrapper.findAll('.phrase')

    GET_RANDOM_PHRASES.forEach( (phrase, index) => {
      const phraseComponent = phrases.at(index)
      const text = phraseComponent.text()
      expect(text).toBe(phrase.text)
    })
  })
})
