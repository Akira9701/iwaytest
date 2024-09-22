const cors_proxy = require('cors-anywhere')

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 8080

cors_proxy
  .createServer({
    originWhitelist: [], // Разрешить все источники
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
  })
  .listen(port, host, function () {
    console.log('CORS Anywhere запущен на ' + host + ':' + port)
  })
