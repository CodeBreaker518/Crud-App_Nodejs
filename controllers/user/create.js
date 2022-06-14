import { connection } from '../../database/db.js'

export const create = (req, res) => {
  const user = req.body.user
  const rol = req.body.rol
  connection.query(
    'INSERT INTO users SET ?',
    { user, rol },
    (error, results) => {
      if (error) {
        console.log(error)
      } else {
        res.redirect('/')
      }
    }
  )
}
