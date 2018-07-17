import * as httpClient from 'axios'
import PhraseService from '@/services/PhraseService'

export const phraseService = new PhraseService(httpClient)
