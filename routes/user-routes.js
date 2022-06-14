import express from 'express'
import { create, list, remove, update } from '../controllers/user/index.js'
import { connection } from '../database/db.js'

const router = express.Router()

const renderEdit = (req, res) => {
  const id = req.params.id
  connection.query(
    'SELECT * FROM users WHERE id = ?',
    [id],
    (error, results) => {
      if (error) {
        throw error
      } else {
        res.render('edit', { user: results[0] })
      }
    }
  )
}
const renderCreate = (req, res) => {
  res.render('create')
}
// Routes for render

// Mostrar TODOS los registros
router
  .get('/', list)
  // Ruta para EDITAR registros
  .get('/edit/:id', renderEdit)
// Ruta para CREAR registros
  .get('/create', renderCreate)

// CRUD operations
router.post('/save', create)
  // this must be a delete
  .get('/delete/:id', remove)
  // this must be a post
  .post('/update', update)

export default router
