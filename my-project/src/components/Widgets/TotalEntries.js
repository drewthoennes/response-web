import {Pie, mixins} from 'vue-chartjs'
const {reactiveData} = mixins

export default Pie.extend({
  mixins: [reactiveData],
  props: ['rawChartData'],
  data() {
    return {
      options: {}
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
        data.push(e.count)
      })

      this.chartData = {
        labels: labels,
        datasets: [
          {
            backgroundColor: [
              '#e74c3c',
              '#3498db',
              '#1abc9c',
              '#f1c40f'
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
