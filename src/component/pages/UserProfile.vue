<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-container>
            <v-autocomplete
              v-model="my_country"
              @change="limiteCategory"
              :items="country"
              outlined
              dense
              chips
              small-chips
              label="Country"
              multiple
            />
          </v-container>
          <!--<v-container v-bind="{ [`grid-list-xs`]: true }" fluid>
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
                    <div style="margin-top: 20px">
                      {{ myFiles[item].location }}
                    </div>
                  </v-row>
                </v-container>
              </v-flex>
            </v-layout>
          </v-container>-->
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
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters("country", { countries: "getCountry" }),
  },
  methods: {
    create() {
      this.setMyCountry(this.my_country);
    },
    limiteCategory() {
      if (this.my_country.length > 4) this.my_country.pop();
    },
    ...mapActions("country", ["setMyCountry"]),
  },
  async created() {
    this.country = Object.keys(myFile);
    this.my_country = this.countries;
    console.log(this.my_country);
    this.myFiles = myFile;
  },
};
</script>
