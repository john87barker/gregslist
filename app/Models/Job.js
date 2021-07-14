export default class Job {
  constructor({ title, company, education, salary, description }) {
    this.title = title
    this.company = company
    this.education = education
    this.salary = salary.toLocaleString("en-US")
    this.description = description
  }

  get TemplateJob() {
    return `
<div class="col-md-3 col-sm-2 my-3">
  <div class="car bg-light shadow">
    <div class="p-3">
      <div class="text-center">
        <p><b>${this.title} - ${this.company} - $${this.salary} </b></p>
      </div>
        <p>${this.description}</p>
        <p><em>${this.education}</em></p>
    </div>
  </div>
</div>
  `
  }
}