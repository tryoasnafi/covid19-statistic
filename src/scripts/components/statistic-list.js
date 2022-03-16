import './statistic-item.js'
import { getDate } from '../utils/format.js'

class StatisticList extends HTMLElement {
  set statistics (statistics) {
    this._statistics = statistics
    this.render()
  }

  get statistics () {
    return this._statistics
  }

  render () {
    this._statistics.forEach(stat => {
      const statItemEl = document.createElement('statistic-item')
      statItemEl.classList.add('card--white', 'hover:shadow-lg', 'hover:bg-gray-50')
      statItemEl.statistic = stat
      this.appendChild(statItemEl)
    })
    console.log(getDate())
    document.getElementById('provinsiLastUpdate').innerHTML = getDate()
  }
}

customElements.define('statistic-list', StatisticList)
