import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = []
  /**@type {House[]} */
  houses = []
  /**@type {Job[]} */
  jobs = [
    new Job({
      title: 'Salesman',
      company: '#1 Car Dealer',
      education: 'High School Graduate or Equivelent',
      salary: 45000,
      description: 'Best dealership in the area!'
    })
  ]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
