<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    label: {
      type: Array,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
    chartColors: {
      type: Object,
    },
  },
  mounted() {
    const dates = this.chartData[0].map((d) => d.date).reverse();

    const { borderColor } = this.chartColors;
    this.gradient = [5];
    this.gradient[0] = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient[1] = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
      
    this.gradient[2] = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
      
    this.gradient[3] = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient[0].addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient[0].addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient[0].addColorStop(1, "rgba(255, 0, 0, 0)");

    this.gradient[1].addColorStop(0, "rgba(231, 0, 231, 0.5)");
    this.gradient[1].addColorStop(0.5, "rgba(231, 0, 231, 0.25)");
    this.gradient[1].addColorStop(1, "rgba(231, 0, 231, 0)");

    this.gradient[2].addColorStop(0, "rgba(0, 0, 255, 0.9)");
    this.gradient[2].addColorStop(0.5, "rgba(0, 0, 255, 0.25)");
    this.gradient[2].addColorStop(1, "rgba(0, 0, 255, 0)");

    this.gradient[3].addColorStop(0, "rgba(0, 255, 0, 0.9)");
    this.gradient[3].addColorStop(0.5, "rgba(0, 255, 0, 0.25)");
    this.gradient[3].addColorStop(1, "rgba(0, 255, 0, 0)");
    var parent = this;
    this.dataset = [];
    
    this.chartData.forEach(function (element, index) {
      var totals = parent.chartData[index].map((d) => d.total).reverse();
      parent.dataset.push({
        label: parent.label[index],
        data: totals,
        borderColor: borderColor,
        pointBackgroundColor: "white",
        pointBorderColor: "black",
        backgroundColor: parent.gradient[index]
      });
    });

    this.renderChart(
      {
        labels: dates,
        datasets: this.dataset,
      },
      this.options
    );
  },
};
</script>
