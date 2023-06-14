import express  from "express"
import cors from 'cors'
//------------------------------------importamos la conexión a la DB
import db from "./database/db.js"
//------------------------------------importamos nuestro enrutador
import blogRoutes from './routes/routes.js'

const app = express()
//------------------------------------Configuramos para no tener problemas
app.use(cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    // * las `` son plantillas literales, dentro se usa ${}
    console.log(`El error de conexión es: ${error}`)
}

/* app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
}) */

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})

/* 
* nuestra app va a correr en este puerto: http://localhost:8000/
    * luego de la barra va '/blogs', blogRoutes
        * lo que pasa ahí es que de la url base, llama a / id de cada ruta en routes.js


*/