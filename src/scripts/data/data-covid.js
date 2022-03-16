import axios from 'axios'

class DataCovid {
  static baseUrl = 'https://apicovid19indonesia-v2.vercel.app/api'

  static getData = (endpoint) => {
    return axios.get(this.baseUrl + endpoint)
      .then(response => response.data)
      .catch(error => error)
  }

  static getStatistics = () => this.getData('/indonesia')

  static getProvinceStatistics = () => this.getData('/indonesia/provinsi')
}

export default DataCovid
