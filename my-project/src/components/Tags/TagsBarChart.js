import {Bar, mixins} from 'vue-chartjs'
const {reactiveData} = mixins

export default Bar.extend({
  mixins: [reactiveData],
  props: ['rawChartData'],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: false
              }
            }
          ],
          yAxes: [
            {
              // display: true,
              ticks: {
                max: 1
              }
            }
          ]
        }
      }
    }
  },
  mounted() {
    this.updateData()
    // this.renderChart(this.chartData, this.options)
    this.renderChart(this.chartData, null)
  },
  methods: {
    updateData() {
      let data = [],
        labels = []
      this.rawChartData.forEach((e) => {
        // datasets.push({
        //   label: e._id,
        //   data: [e.count]
        // })
        labels.push(e._id)
        data.push(e.sentiment)
      })

      this.chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Data',
            backgroundColor: [
              '#3498db', '#1abc9c', '#e74c3c', '#f1c40f'
            ],
            data: data
          }
        ]
        // datasets: datasets
        // datasets: [{
        //   data: [30],
        //   label: 'hello',
        //   backgroundColor: '#e74c3c'
        // }, {
        //   data: [30],
        //   label: 'hello1',
        //   backgroundColor: '#8e44ad'
        // }]
      }
    }
  },
  watch: {
    rawChartData() {
      this.updateData()
    }
  }
})
