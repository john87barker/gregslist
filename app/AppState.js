import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    new Car({
      make: 'Ford',
      model: 'Pinto',
      year: 1987,
      price: 1200,
      description: 'This Car is HOT!',
      imgUrl: 'https://blog.automedicsafrica.com/wp-content/uploads/2015/08/Impala-vs-Pinto-750x547.jpg'
    }),
    new Car({
      make: 'VW',
      model: 'Gremlin',
      year: 1988,
      price: 3400,
      description: 'Lime Green! You gonna love it',
      imgUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/07/Gremlin-X.jpg'
    })
  ]
  /**@type {House[]} */
  houses = [
    new House({
      bedrooms: 4,
      bath: 3,
      sqft: 1873,
      price: 650000,
      description: 'Beautiful home for a medium sized family!',
      imgUrl: ''
    }),
    new House({
      bedrooms: 3,
      bath: 1.5,
      sqft: 1073,
      price: 100000,
      description: 'Great home for a small family!',
      imgUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Frentpath-res.cloudinary.com%2Ft_rp%2Ccs_tinysrgb%2Cfl_force_strip%2Cw_400%2Ch_240%2Cc_fill%2Cq_auto%3Alow%2Cdpr_1.0%2Ce_improve%2Fe_unsharp_mask%3A50%2Fa6f7076a60f95a0a770488f3bb6bcd4e&imgrefurl=https%3A%2F%2Fwww.rent.com%2Fidaho%2Fmeridian-houses&tbnid=kkFNVfCxjnig3M&vet=12ahUKEwiL1sb0tePxAhUJAzQIHc-JD3QQMygBegUIARDRAQ..i&docid=3mJ1lIXRm2m0TM&w=400&h=240&itg=1&q=houses%20for%20rent&ved=2ahUKEwiL1sb0tePxAhUJAzQIHc-JD3QQMygBegUIARDRAQ'
    })


  ]
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
