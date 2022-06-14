import mysql from 'mysql'
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12001369',
  database: 'crud_nodejs_db'
})

connection.connect((error) => {
  if (error) {
    console.error('El error de conexion es: ' + error)
    return
  }
  console.log('Conectado a la Db MySQL')
})

export { connection }
