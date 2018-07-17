import { shallowMount } from '@vue/test-utils'
import PhraseList from '@/components/PhraseList'
import { GET_RANDOM_PHRASES } from '../../fixtures/services/PhraseService'

describe('PhraseList', () => {
  it('shows a list of phrases', async () => {
    const wrapper = shallowMount(PhraseList, {
      propsData: {
        phrases: GET_RANDOM_PHRASES
      }
    })
    const phrases = wrapper.findAll('.phrase')

    GET_RANDOM_PHRASES.forEach( (phrase, index) => {
      const phraseComponent = phrases.at(index)
      const text = phraseComponent.text()
      expect(text).toBe(phrase.text)
    })
  })
})
