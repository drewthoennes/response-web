import {Scatter, mixins} from 'vue-chartjs'
const {reactiveData} = mixins

export default Scatter.extend({
  mixins: [reactiveData],
  props: ['rawChartData'],
  data() {
    return {
      options: {
        hover: {
          // animationDuration: 0, // duration of animations when hovering an item
        },
        // responsiveAnimationDuration: 0, // animation duration after a resize
        // plugins: [pluginZoom],
        // pan: {
        //   enabled: true,
        //   mode: 'x',
        //   // speed: 10,
        //   // threshold: 10,
        //   drag: true
        // },
        // zoom: {
        //   enabled: true,
        //   mode: 'x'
        // },
        responsive: true,
        showLines: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'hour',
                parser: 'X',
                // unitStepSize: 30,
                tooltipFormat: 'YYYY/DD/MM h:mm:ss a'
              },
              position: 'bottom'
            }
          ],
          yAxes: [
            {
              ticks: {
                stepSize: 1
              }
            }
          ]
        }
      }
    }
  },
  computed: {
    processedChartData() {
      let data = []
      this.rawChartData.forEach(el => {
        data.push({y: el.sentiment, x: el.time})
      })
      // data = data.filter(e => e.x >= 1506643200000)
      data.sort((a, b) => a.x - b.x)
      return data
    }
  },
  mounted() {
    this.updateData()
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    rawChartData() {
      this.updateData()
    }
  },
  methods: {
    updateData() {
      this.chartData = {
        datasets: [
          {
            label: 'Sentiment',
            data: this.processedChartData,
            lineTension: 0.25,
            backgroundColor: 'rgba(52, 152, 219, 0.5)',
            borderColor: 'rgba(52, 152, 219, 1)',
            fill: false
          }
        ]
      }
    }
  }
})
