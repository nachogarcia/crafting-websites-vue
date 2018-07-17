import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'
import { GET_RANDOM_PHRASES } from '../../fixtures/services/PhraseService'
import { phraseService } from '@/infrastructure/Factory'
import PhraseList from '@/components/PhraseList'

phraseService.getRandomPhrases = jest.fn(() => GET_RANDOM_PHRASES)

describe('Home', () => {
  it('shows a list of phrases', async () => {
    const wrapper = shallowMount(Home)
    await flushPromises()
    const phrases = wrapper.find(PhraseList).props().phrases

    expect(phraseService.getRandomPhrases).toHaveBeenCalledWith(5)
    expect(phrases).toBe(GET_RANDOM_PHRASES)
  })
})
