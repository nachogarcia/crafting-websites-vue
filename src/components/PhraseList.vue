<template>
  <ul class="phraseList">
    <li class="phrase" :key="phrase.id" v-for="phrase in phrases">
      {{phrase.text}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PhraseList',
  props: {
    phrases: Array
  }
}
</script>

<style scoped>
.phraseList{
  $margin-M: 2rem;

  list-style-type: none;
  padding: 0;
  margin: 0;
  .phrase{
    margin: $margin-M;
  }
}
</style>
