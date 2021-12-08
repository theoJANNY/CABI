<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'App',
  methods: {
    create() {
      this.setMyCountry(["FRA", "IRL"]);
    },
    ...mapActions("country", ["setMyCountry"]),

  },
  created() {
    this.create();
  }
}
</script>