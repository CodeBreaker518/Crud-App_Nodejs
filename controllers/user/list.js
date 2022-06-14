import { connection } from '../../database/db.js'

export const list = (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    } else {
      res.render('index', { results })
    }
  })
}
