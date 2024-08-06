import http from 'node:http'

const options = {
  timeout: 2000,
  host: 'localhost',
  port: process.env.PORT || 3000,
  path: '/healthz',
}

const r = http.request(options, (res) => {
  console.info('STATUS: ', res.statusCode)
  process.exitCode = res.statusCode === 200 ? 0 : 1
  process.exit()
})

r.on('error', function (err) {
  console.error('ERROR', err)
  process.exit(1)
})

r.end()
