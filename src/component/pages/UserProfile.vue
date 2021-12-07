<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-container v-bind="{ [`grid-list-xs`]: true }" fluid>
            <v-layout row wrap>
              <v-flex v-for="item in country" :key="item" xs4>
                <v-container>
                  <v-row>
                    <div style="margin-right: 10px">
                      <v-checkbox
                        v-model="my_country"
                        multiple
                        :value="item"
                        class="v-input--reverse"
                      ></v-checkbox>
                    </div>
                    <div style="margin-top: 20px">{{ myFiles[item].location }}</div>
                  </v-row>
                </v-container>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-col>
      <div class="col-12">
        <v-btn depressed @click="create" color="#00897f"> Save </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import myFile from "./../../assets/vaccined.json";
import { mapActions } from "vuex";

console.log(myFile);
export default {
  //
  data() {
    return {
      country: [],
      my_country: [],
      myFiles: {},
    };
  },
  methods: {
    create() {
      this.setMyCountry(this.my_country);
    },
    ...mapActions("country", ["setMyCountry"]),
  },
  async created() {
    this.country = Object.keys(myFile);
    this.myFiles = myFile;
  },
};
</script>
