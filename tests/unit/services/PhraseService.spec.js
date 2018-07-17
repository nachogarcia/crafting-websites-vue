import MockAdapter from 'axios-mock-adapter'
import * as axios from 'axios'
import {
  GET_RANDOM_PHRASES_RESPONSE,
  GET_RANDOM_PHRASES
} from '../../fixtures/services/PhraseService'
import { PHRASES_API } from '@/infrastructure/config'
import PhraseService from '@/services/PhraseService'

const mockHttp = new MockAdapter(axios)

describe('Phrase Service', () => {
  it('gets random phrases', async () => {
    const numberOfPhrases = 5
    const url = `${PHRASES_API}/random/${numberOfPhrases}?escape=javascript`
    mockHttp
      .onGet(url)
      .reply(200, GET_RANDOM_PHRASES_RESPONSE)
    const service = new PhraseService(axios)

    const phrases = await service.getRandomPhrases(numberOfPhrases)

    expect(phrases).toEqual(GET_RANDOM_PHRASES)
  })
})
