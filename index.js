
const express = require('express')
const path = require('path')
const app = express()

const port = 3000

app.get('/',(request,response)=> {
   
    response.sendFile(path.resolve(__dirname, './views/index.html'))
})

    app.get('/VATLA',(request,response)=> {
   
        response.sendFile(path.resolve(__dirname, './views/VATLA.html'))
    })
    app.get('/VATLA',(request,response)=> {
   
        response.sendFile(path.resolve(__dirname, './views/ATLA.js'))
    })
    app.get('/VLG',(request,response)=> {
   
        response.sendFile(path.resolve(__dirname, './views/VLG.html'))
    })
    app.get('/VLG',(request,response)=> {
   
        response.sendFile(path.resolve(__dirname, './views/manager.js'))
    })
app.listen(port, () => {
    console.log('La aplicacion esta en linea!');
})
