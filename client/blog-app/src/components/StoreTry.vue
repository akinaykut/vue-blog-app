<template>
  <div>
    <h1>{{ this.$store.getters.getCounter }}</h1>

    <button
      class="btn btn-lg btn-success"
      @click="this.$store.commit('increment')"
    >
      +
    </button>
    <button
      class="btn btn-lg btn-danger"
      @click="this.$store.commit('decrease')"
    >
      -
    </button>
  </div>
</template>
