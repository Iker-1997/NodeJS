const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT \\ 3000

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('<form method="post"><input name="nom" placeholder="Nom"><br><input type="submit" /></form>')
})

app.post("/", function(req, res){
    var nom = req.body.nom;
    res.send("Hello " + nom);

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})