import { formatNumber } from '../utils/format.js'

class StatisticItem extends HTMLElement {
  set statistic (statistic) {
    this._statistic = statistic
    this.render()
  }

  get statistic () {
    return this._statistic
  }

  render () {
    this.innerHTML = `
      <h5 class="card__title text-sm mb-2 font-heading">${this._statistic.provinsi}</h5>
      <ul class="space-y-1">
        <li class="flex justify-between text-sm"> <span>Kasus baru:</span> <span class="bg-orange-500 rounded-md py-1 px-3 text-xs font-bold text-white">${formatNumber(this._statistic.kasus)}</span></li>
        <li class="flex justify-between text-sm"> <span>Dirawat:</span> <span class="bg-sky-500 rounded-md py-1 px-3 text-xs font-bold text-white">${formatNumber(this._statistic.dirawat)}</span></li>
        <li class="flex justify-between text-sm"> <span>Sembuh:</span> <span class="bg-emerald-500 rounded-md py-1 px-3 text-xs font-bold text-white">${formatNumber(this._statistic.sembuh)}</span></li>
        <li class="flex justify-between text-sm"> <span>Meninggal:</span> <span class="bg-red-500 rounded-md py-1 px-3 text-xs font-bold text-white">${formatNumber(this._statistic.meninggal)}</span> </li>
      </ul>
    `
  }
}

customElements.define('statistic-item', StatisticItem)
