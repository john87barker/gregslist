import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = []
  /**@type {House[]} */
  houses = [
    new House({
      bedrooms: 4,
      bath: 3,
      sqft: 1873,
      price: 650000,
      description: 'Beautiful home for a medium sized family!',
      imgUrl: 'https://rentpath-res.cloudinary.com/t_rp,cs_tinysrgb,fl_force_strip,w_400,h_240,c_fill,q_auto:low,dpr_1.0,e_improve/e_unsharp_mask:50/4b6d6719156e7f725978abfab6155fce'
    }),
    new House({
      bedrooms: 3,
      bath: 1.5,
      sqft: 1073,
      price: 100000,
      description: 'Great home for a small family!',
      imgUrl: 'https://images1.apartments.com/i2/2I7wP7VzoIMG462e24oaegCND1rUzk6cjOjalgUYch4/111/image.jpg'
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
