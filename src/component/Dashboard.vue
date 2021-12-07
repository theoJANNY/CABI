<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        <h1 class="text-center">Assignment 3 BI</h1>
      </div>
    </div>
    <v-card>
      <h2 class="text-center">Total Case</h2>
      <div class="row mt-5" v-if="arrTotalNewCases.length > 0">
        <div class="col">
          <line-chart
            :chartData="arrTotalNewCases"
            :options="chartOptions"
            :chartColors="totalNewCasesChartColors"
            label="Total Case"
          />
        </div>
      </div>
    </v-card>

    <v-card>
      <h2 class="text-center">New Case</h2>
      <div class="row mt-5" v-if="arrNewCases.length > 0">
        <div class="col">
          <bar-chart
            :chartData="arrNewCases"
            :options="chartOptions"
            :chartColors="newCasesChartColors"
            label="New Case"
          />
        </div>
      </div>
    </v-card>

    <v-card>
      <h2 class="text-center">Total Deaths</h2>
      <div class="row mt-5" v-if="arrTotalDeaths.length > 0">
        <div class="col">
          <doughnut-chart
            :chartData="test"
            :options="chartOptions"
            :chartColors="totalDeathsColors"
            label="Total Deaths"
            :key="this.cpt"
          />
        </div>
      </div>
      <v-col cols="12" lg="2">
        <v-card>
          <datepicker
            @closed="onChange()"
            v-model="date"
            :disabled-dates="state.disabledDates"
          ></datepicker>
        </v-card>
      </v-col>
    </v-card>

    <v-card>
      <h2 class="text-center">Total cases per million</h2>
      <div class="row mt-5" v-if="arrNewDeaths.length > 0">
        <div class="col">
          <h2 class="text-center">New Deaths</h2>
          <line-chart
            :chartData="arrNewDeaths"
            :options="chartOptions"
            :chartColors="newDeathsColors"
            label="New Deaths"
          />
        </div>
      </div>
    </v-card>

    <v-card>
      <h2 class="text-center">Total cases per million</h2>
      <div class="row mt-5" v-if="arrTotalCasesPerMillion.length > 0">
        <div class="col">
          <line-chart
            :chartData="arrTotalCasesPerMillion"
            :options="chartOptions"
            :chartColors="totalCasesPerMillionColors"
            label="Total cases per million"
          />
        </div>
      </div>
    </v-card>
    
    <v-card>
      <h2 class="text-center">Total deaths per millions</h2>
      <div class="row mt-5 mb-5">
        <div class="col">
          <line-chart
            v-if="arrTotalDeathsPerMillion.length > 0"
            :chartData="arrTotalDeathsPerMillion"
            :options="chartOptions"
            :chartColors="totalDeathsPerMillionColors"
            label="Total deaths per millions"
          />
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
//import axios from "axios";
import moment from "moment";

import LineChart from "./LineChart";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import myFile from "./../assets/vaccined.json";

import Datepicker from "vuejs-datepicker";

export default {
  components: {
    LineChart,
    BarChart,
    DoughnutChart,
    Datepicker,
  },
  data() {
    return {
      state: {
        disabledDates: {
          from: new Date(2021, 11, 1), // Disable all dates up to specific date
          to: new Date(2020, 0, 24),
        },
      },
      date: new Date(2021, 11, 1),
      arrTotalNewCases: [],
      totalNewCasesChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74A57F",
      },
      arrNewCases: [],
      newCasesChartColors: {
        borderColor: "#251F47",
        pointBorderColor: "#260F26",
        pointBackgroundColor: "#858EAB",
        backgroundColor: "#858EAB",
      },
      arrTotalDeaths: [],
      totalDeathsColors: {
        borderColor: "#190B28",
        pointBorderColor: "#190B28",
        pointBackgroundColor: "#E55381",
        backgroundColor: "#E55381",
      },
      arrNewDeaths: [],
      newDeathsColors: {
        borderColor: "#784F41",
        pointBorderColor: "#784F41",
        pointBackgroundColor: "#BBE5ED",
        backgroundColor: "#BBE5ED",
      },
      arrTotalCasesPerMillion: [],
      totalCasesPerMillionColors: {
        borderColor: "#4E5E66",
        pointBorderColor: "#4E5E66",
        pointBackgroundColor: "#31E981",
        backgroundColor: "#31E981",
      },
      arrTotalDeathsPerMillion: [],
      totalDeathsPerMillionColors: {
        borderColor: "#E06D06",
        pointBorderColor: "#E06D06",
        pointBackgroundColor: "#402A2C",
        backgroundColor: "#402A2C",
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      test: [],
      cpt: 0,
    };
  },
  methods: {
    onChange() {
      this.cpt = Math.floor((this.date - new Date(2020, 0, 24)) / 86400000);
      this.test = {
        labels: ["deaths", "cases", "population"],
        total: [
          myFile.FRA.data[this.cpt].total_deaths || 0,
          myFile.FRA.data[this.cpt].total_cases ||
            0 - myFile.FRA.data[this.cpt].total_deaths ||
            0,
          myFile.FRA.population ||
            0 - myFile.FRA.data[this.cpt].total_cases ||
            0 - myFile.FRA.data[this.cpt].total_deaths ||
            0,
        ],
      };
      console.log(this.test);
    },
  },
  async created() {
    //const { data } = await axios.get("https://covidtracking.com/api/us/daily");
    myFile.FRA.data.forEach((d) => {
      const date = moment(d.date, "YYYY-MM-DD").format("YYYY/MM/DD");
      const {
        total_cases,
        new_cases,
        total_deaths,
        new_deaths,
        total_cases_per_million,
        total_deaths_per_million,
      } = d;

      this.arrTotalNewCases.unshift({ date, total: total_cases });
      this.arrNewCases.unshift({ date, total: new_cases });
      this.arrTotalDeaths.unshift({ date, total: total_deaths });
      this.arrNewDeaths.unshift({ date, total: new_deaths });
      this.arrTotalCasesPerMillion.unshift({
        date,
        total: total_cases_per_million,
      });
      this.arrTotalDeathsPerMillion.unshift({
        date,
        total: total_deaths_per_million,
      });
    });
    this.cpt = Math.floor((this.date - new Date(2020, 0, 24)) / 86400000);
    this.test = {
      labels: ["deaths", "cases", "population"],
      total: [
        myFile.FRA.data[this.cpt].total_deaths || 0,
        myFile.FRA.data[this.cpt].total_cases ||
          0 - myFile.FRA.data[this.cpt].total_deaths ||
          0,
        myFile.FRA.population ||
          0 - myFile.FRA.data[this.cpt].total_cases ||
          0 - myFile.FRA.data[this.cpt].total_deaths ||
          0,
      ],
    };
    console.log(this.test);
  },
};
</script>

<style></style>
