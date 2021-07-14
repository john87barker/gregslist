import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/CarsService.js"

function _draw() {
  let template = ''
  ProxyState.houses.forEach(house => {
    template = + house.TemplateHouse
  })
  document.getElementById('houses').innerHTML = template
}
export default class HousesController {
  constructor() {
    ProxyState.on('houses', _draw)
    ProxyState.on('houses', () => {
      console.log('new house')
    })
    _draw()
  }
  createHouse() {
    event.preventDefault()
    let form = event.target
    let rawHouse = {
      bedrooms: form.bedrooms.value,
      bath: form.bath.value,
      sqft: form.sqft.value,
      price: form.price.value,
      price: form.price.value,
      imgUrl: form.imgUrl.value,
    }
    housesService.createHouse(rawHouse)
    form.reset()
  }
}