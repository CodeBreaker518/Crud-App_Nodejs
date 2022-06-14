import { connection } from '../../database/db.js'

export const update = (req, res) => {
  const { id, ...user } = req.body
  connection.query('UPDATE users SET ? WHERE id = ?', [user, id], (error, results) => {
    if (error) {
      console.log(error)
    } else {
      res.redirect('/')
    }
  }
  )
}
