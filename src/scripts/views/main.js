import '../components/statistic-list.js'
import { formatNumber, formatDate } from '../utils/format.js'
import DataCovid from '../data/data-covid.js'

const main = () => {
  const statListEl = document.querySelector('statistic-list')
  const todayStatistic = async () => {
    try {
      const data = await DataCovid.getStatistics()
      document.getElementById('kumulatifPositif').innerHTML = formatNumber(data.positif)
      document.getElementById('kumulatifSembuh').innerHTML = formatNumber(data.sembuh)
      document.getElementById('kumulatifDirawat').innerHTML = formatNumber(data.dirawat)
      document.getElementById('kumulatifMeninggal').innerHTML = formatNumber(data.meninggal)
      document.getElementById('kumulatifLastUpdate').innerHTML = formatDate(data.lastUpdate)
    } catch (error) {
      return new Error('Data tidak ditemukan')
    }
  }

  const provinceStatistic = async () => {
    try {
      const data = await DataCovid.getProvinceStatistics()
      renderResult(data)
    } catch (error) {
      return new Error('Data tidak ditemukan')
    }
  }

  const renderResult = (results) => {
    statListEl.statistics = results
  }

  provinceStatistic()
  todayStatistic()
}

export default main
