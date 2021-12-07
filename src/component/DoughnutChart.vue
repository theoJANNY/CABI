<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Object,
    },
    options: {
      type: Object,
    },
    chartColors: {
      type: Object,
    },
  },
  mounted() {
    console.log(this.chartData);
    this.renderChart(
      {
        labels: this.chartData.labels,
        datasets: [
          {
            label: this.label,
            data: this.chartData.total,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      this.options
    );
  },
};
</script>
