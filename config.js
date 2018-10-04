'user strict'

const config = {
  aws: {
    accessKey: process.env.AWS_ACCESS_KEY,
    secretKey: process.env.AWS_SECRET_KEY
  },
  client: {
    endpoints: {
      pictures: 'http://api.platzi.com/picture',
      users: 'http://api.platzi.com/user',
      auth: 'http://api.platzi.com/auth'
    }
  },
  secret: process.env.PLATZIGRAM_SECRET || 'pl4tzi'
}

if (process.env.NODE_ENV !== 'production') {
  config.client.endpoints = {
    pictures: 'http://localhost:5000',
    users: 'http://localhost:5001',
    auth: 'http://localhost:5002'
  }
}

module.exports = config