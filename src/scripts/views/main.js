import DataSource from "../data/data-source.js"

const main = () => {
  const todayStatistic = async () => {
    try {
      const data = await DataSource.getProvinceStatistics()
      console.log(data)
    } catch (error) {
      return new Error("Data tidak ditemukan")
    }
  }
}

export default main