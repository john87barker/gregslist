export default class House {
  constructor({ bedrooms, bath, sqft, price, description, imgUrl }) {
    this.bedrooms = bedrooms
    this.bath = bath
    this.sqft = sqft
    this.price = price
    this.description = description || "No Description for the Home"
    this.imgUrl = imgUrl || '//placehold.it/200x200'
  }

  get TemplateHouse() {
    return `
<div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow">
        <img src="${this.imgUrl}" class="w-100" alt="${this.bedrooms} ${this.bath} home image">
        <div class="p-3">
          <div class="text-center">
            <p><b>${this.bedrooms} - ${this.bath} - ${this.sqft}</b></p>
          </div>
              <p>${this.description}</p>
                <p><em>$${this.price}</em></p>
          </div>
      </div>
    </div>
  `
  }
}
