import { connection } from '../../database/db.js'

export const remove = (req, res) => {
  const id = req.params.id
  connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
    if (error) {
      throw error
    } else {
      res.redirect('/')
    }
  })
}
