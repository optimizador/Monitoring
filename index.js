const express = require('express')
const path = require('path')
const fetch = require('node-fetch');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = require('request');
const app = express()
const port = 4000
const morgan = require('morgan');
const { json } = require('body-parser');
var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));


app.get('/VATLA', (request, response) => {
    response.sendFile(path.resolve(__dirname, './VATLA.html'))
    
})
app.get('/VLG', (request, response) => {
    response.sendFile(path.resolve(__dirname, './VLG.html'))
    
})
app.get('/tdt', (request, response) => {
    response.sendFile(path.resolve(__dirname, './tdt.html'))
    
})
app.get('/ActivityTracker',function (req, res)  {
    const GBS = req.query.GB;
    const dias = req.query.dias;
    const region = req.query.region;
    const pais = req.query.preciopais;
    var options = {
        method: 'POST',
        url: 'https://apimonitoring.9sxuen7c9q9.us-south.codeengine.appdomain.cloud/ActivityTracker',
        qs:
        {
            GB: GBS,
            dias: dias,
            region: region,
            preciopais: pais
        }
       
    };
    console.log(options["qs"])
    var request= require("request");
    request(options, function (error, response, body) {
        if (error)
            return console.error('Failed: %s', error.message);
        var bodystring = JSON.parse(body);
        console.log('Total= ' + bodystring["total"]);
        //return  bodystring["total"];
        return res.json(bodystring["total"]);
    
    });

});

app.get('/LogAnalysis',function (req, res)  {
    const GBS = req.query.GB;
    const dias = req.query.dias;
    const region = req.query.region;
    const pais = req.query.preciopais;
    var options = {
        method: 'POST',
        url: 'https://apimonitoring.9sxuen7c9q9.us-south.codeengine.appdomain.cloud/LogAnalysis',
        qs:
        {
            GB: GBS,
            dias: dias,
            region: region,
            preciopais: pais
        }
       
    };
    console.log(options["qs"])
    var request= require("request");
    request(options, function (error, response, body) {
        if (error)
            return console.error('Failed: %s', error.message);
        var bodystring = JSON.parse(body);
        console.log('Total= ' + bodystring["total"]);
        //return  bodystring["total"];
        return res.json(bodystring["total"]);
    
    });

});


app.get('/CloudMonitoring',function (req, res)  {
    const node = req.query.node;
    const nodelite = req.query.litenode;
    const container = req.query.container;
    const timeseries = req.query.timeserieshour;
    const api = req.query.apicall;
    const region = req.query.region;
    const pais = req.query.preciopais;
    
    var options = {
        method: 'POST',
        url: 'https://apimonitoring.9sxuen7c9q9.us-south.codeengine.appdomain.cloud/CloudMonitoring',
        qs:
        {
            node: node,
            litenode: nodelite,
            container: container,
            timeserieshour: timeseries,
            apicall: api,
            region: region,
            preciopais: pais
        }
       
    };
    console.log(options["qs"])
    var request= require("request");
    request(options, function (error, response, body) {
        if (error)
            return console.error('Failed: %s', error.message);
        var bodystring = JSON.parse(body);
        console.log(bodystring);
        return res.json(body);
    
    });

});
app.get('/Tasadetransferencia',function (req, res)  {
    const TamañoArchivo = req.query.TamañoArchivo;
    const UnidadTamañoArchivo = req.query.UnidadTamañoArchivo;
    var TiempoTransferencia = req.query.TiempoTransferencia;
    const UnidadTiempoTransferencia = req.query.UnidadTiempoTransferencia;
    var options = {
        method: 'POST',
        url: 'https://apimonitoring.9sxuen7c9q9.us-south.codeengine.appdomain.cloud/TasaDeTransferencia',
        qs:
        {
            TamañoArchivo: TamañoArchivo,
            UnidadTamañoArchivo: UnidadTamañoArchivo,
            TiempoTransferencia: TiempoTransferencia,
            UnidadTiempoTransferencia: UnidadTiempoTransferencia
        }
       
    };
    console.log(options["qs"])
    var request= require("request");
    request(options, function (error, response, body) {
        if (error)
            return console.error('Failed: %s', error.message);
        var bodystring = JSON.parse(body);
       //console.log(body)
        console.log('Total= ' + bodystring["TotalAnchoBanda"]);
        
        return res.json(bodystring["TotalAnchoBanda"]);
    
    });

});
app.get('/TiempoDeTransferencia',function (req, res)  {
    const TamañoArchivoTiempo = req.query.TamañoArchivoTiempo;
    const UnidadTamañoArchivoTiempo = req.query.UnidadTamañoArchivoTiempo;
    var AnchoBanda = req.query.AnchoBanda;
    const UnidadAnchoBanda = req.query.UnidadAnchoBanda;
    var options = {
        method: 'POST',
        url: 'https://apimonitoring.9sxuen7c9q9.us-south.codeengine.appdomain.cloud/TiempoDeTransferencia',
        qs:
        {
            TamañoArchivoTiempo: TamañoArchivoTiempo,
            UnidadTamañoArchivoTiempo: UnidadTamañoArchivoTiempo,
            AnchoBanda: AnchoBanda,
            UnidadAnchoBanda: UnidadAnchoBanda
        }
       
    };
    console.log(options["qs"])
    var request= require("request");
    request(options, function (error, response, body) {
        if (error)
            return console.error('Failed: %s', error.message);
        var bodystring = JSON.parse(body);
       //console.log(body)
        console.log('Total= ' + bodystring["totaltiempotransferencia"]);
        
        return res.json(bodystring["totaltiempotransferencia"]);
    
    });

});
app.listen(port, () => {
    console.log('La aplicacion esta en linea en el puerto ' + port);
})
