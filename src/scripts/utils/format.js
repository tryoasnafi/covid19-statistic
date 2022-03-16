
const getDate = (dateString = '') => {
  const date = dateString === '' ? new Date() : new Date(dateString)
  return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
}

const formatNumber = (num) => new Intl.NumberFormat('id-ID').format(num)

const formatDate = (dateString) => getDate(dateString)

export {
  getDate,
  formatNumber,
  formatDate
}
