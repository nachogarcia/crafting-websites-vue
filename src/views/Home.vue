<template>
  <PhraseList :phrases ="$store.state.phrases"/>
</template>

<script>
import PhraseList from '@/components/PhraseList.vue'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    PhraseList
  },
  methods: {
    ...mapActions(['getRandomPhrases'])
  },
  async created () {
    await this.getRandomPhrases(5)
  }
}
</script>
