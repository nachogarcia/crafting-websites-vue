import { PHRASES_API } from '@/infrastructure/config'

const parsePhrase = phrase => ({
  id: phrase.id,
  text: phrase.joke
})

const parsePhrases = data => data.value.map(parsePhrase)

export default class PhraseService {
  constructor (httpClient) {
    this.httpClient = httpClient
  }

  async getRandomPhrases (numberOfPhrases) {
    const url = `${PHRASES_API}/random/${numberOfPhrases}?escape=javascript`
    const response = await this.httpClient.get(url)
    return parsePhrases(response.data)
  }
}
