const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function () {
  console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
  tarefa1.cancel()
  console.log('Cancelado Tarefa 1!')
}, 2000)

const regra = new schedule.RecurrenceRule()
