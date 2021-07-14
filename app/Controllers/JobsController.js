import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js"

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(job => {
    template += job.TemplateJob
  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
  constructor() {
    ProxyState.on('jobs', _draw)
    ProxyState.on('jobs', () => {
      console.log('new job')
    })
    _draw()
  }
  createJob() {
    event.preventDefault()
    let form = event.target
    let rawJob = {
      title: form.title.value,
      company: form.company.value,
      education: form.education.value,
      salary: form.salary.value,
      description: form.description.value
    }
    jobsService.createJob(rawJob)
    form.reset()
  }
}