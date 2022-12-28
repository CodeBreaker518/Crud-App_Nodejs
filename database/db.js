import mysql from 'mysql'
const connection = mysql.createConnection({
  host: 'gateway01.us-east-1.prod.aws.tidbcloud.com',
  port: 4000,
  user: 'ym77hznZWW2YTge.root',
  password: 'O5e7D1Ea1xyhku6s',
  database: 'formulary',
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  }
})

connection.connect((error) => {
  if (error) {
    console.error('El error de conexion es: ' + error)
    return
  }
  console.log('Conectado a la Db MySQL')
})

export { connection }
