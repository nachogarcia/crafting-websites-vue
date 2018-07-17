<template>
  <PhraseList :phrases ="phrases"/>
</template>

<script>
import PhraseList from '@/components/PhraseList.vue'
import { phraseService } from '@/infrastructure/Factory'

export default {
  name: 'home',
  components: {
    PhraseList
  },
  data: () => ({
    phrases: []
  }),
  async created () {
    this.phrases = await phraseService.getRandomPhrases(5)
  }
}
</script>
